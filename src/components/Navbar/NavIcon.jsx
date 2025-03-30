"use client";

import { context } from "@/Context/ContextData";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { LuStar } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";

const NavIcon = () => {
  const {wishlistData,cartData} = useContext(context)
  const dropLinks = [
    { id: 0, content: "Manage My Account", icon: <FiUser size={32} />, href: "/MyAccount" },
    { id: 1, content: "My Order", icon: <FiShoppingBag size={24} />, href: "/" },
    { id: 2, content: "My Cancellations", icon: <FiUser size={24} />, href: "/" },
    { id: 3, content: "My Reviews", icon: <LuStar size={24} />, href: "/" },
  ];

  let token = Cookies.get("tokenUser");





  // تسجيل الخروج
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("tokenUser");
    router.push("/SignIn");
  };

  // فتح وإغلاق قائمة المستخدم
  const [user, setUser] = useState(false);
  const openUser = (e) => {
    e.stopPropagation();
    setUser(!user);
  };

  useEffect(() => {
    if (user) {
      window.addEventListener("click", () => setUser(false));
    } else {
      window.removeEventListener("click", () => setUser(false));
    }
  }, [user]);

  return (
    <div className="flex items-center gap-4">
      <Link href={"/Whish"} className="relative">
        <CiHeart size={24} className="text-[#7D8184] cursor-pointer" />
        <span className="flex absolute rounded-full w-[16px] h-[16px] text-[12px] -right-1 font-bold -top-1 items-center justify-center bg-secondary2 text-primary">
          {wishlistData ? wishlistData?.length : 0}
        </span>
      </Link>

      <Link href={"/CartData"} className="relative">
        <BsCart3 size={24} className="text-[#7D8184] cursor-pointer" />
        <span className="flex absolute rounded-full w-[16px] h-[16px] text-[12px] -right-1 font-bold -top-1 items-center justify-center bg-secondary2 text-primary">
          {cartData ? cartData?.length : 0}
        </span>
      </Link>

      {token && (
        <div onClick={openUser} className="w-[34px] relative h-[34px] hover:text-primary cursor-pointer flex items-center justify-center rounded-full transition-all hover:bg-secondary2">
          <FiUser size={24} className="cursor-pointer" />
          {user && (
            <div onClick={(e) => e.stopPropagation()} className="absolute cursor-text rounded w-full min-w-[225px] right-0 top-10 bg-gradient-to-br from-gray-400 via-[#9C79A0] to-black">
              <ul className="pt-[18px] text-sm pr-3 flex flex-col items-start gap-[13px] pl-[20px] text-primary w-full pb-[10px]">
                {dropLinks.map((e) => (
                  <li key={e.id}>
                    <Link className="flex items-center gap-4" href={e.href}>
                      {e.icon} <span>{e.content}</span>
                    </Link>
                  </li>
                ))}
                <li onClick={handleLogout} className="flex cursor-pointer items-center gap-4">
                  <TbLogout2 size={24} />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavIcon;
