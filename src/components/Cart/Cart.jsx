"use client";
import { useState } from "react";
import Broad from "../Broad";
import Shooter from "../../Images/Shooter.png"
import Jacket from "../../Images/Jacket.png"
import Image from "next/image";
import Link from "next/link";
const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: Shooter },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image:Jacket },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  return (
    <div className="mx-[10px]  md:mx-[136px]  mb-[140px] mt-20">
      <div className="mb-20">
              <Broad  />

      </div>
      
      {/* الهيدر فقط */}
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr className="shadow-[0px_5px_15px_rgba(0,0,0,0.1)] rounded">
            <th className="p-3 font-normal text-left w-1/3">Product</th>
            <th className="p-2 font-normal w-1/5">Price</th>
            <th className="p-3 font-normal w-1/5">Quantity</th>
            <th className="p-3 font-normal w-1/5">Subtotal</th>
          </tr>
        </thead>
      </table>

      {/* كل عنصر في السلة منفصل عن الآخر */}
      <div className="space-y-3 md:space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="bg-white shadow-[0px_5px_15px_rgba(0,0,0,0.1)] w-full rounded-lg p-4 flex items-center justify-center md:justify-between">
            <div className="flex items-center flex-col md:flex-row gap-3 w-1/3">
              <Image src={item.image} alt={item.name} className="w-[20px] h-[20px] md:w-[54px] md:h-[54px] object-cover" />
              <span>{item.name}</span>
            </div>
            <div className="w-1/5 ml-2 text-center">${item.price}</div>
            <div className="w-1/5 text-center">
              <input type="number" defaultValue={1} className="border outline-none focus:outline-none text-center border-borderColor ml-3 rounded w-[72px]"/>
            </div>
            <div className="w-1/5 text-center">${item.price * item.quantity}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:gap-0 mt-6">
        <Link href={"/"} className="border border-black px-12 w-full py-4 md:w-max  rounded">Return To Shop</Link>
        <button className="border border-black px-12  w-full py-4 md:w-max rounded">Update Cart</button>
      </div>



      <section className="mt-20 items-center gap-4 md:gap-0 md:items-start flex-col md:flex-row flex justify-between">
      <div className="flex items-center">
          <form action="" className="flex flex-col md:flex-row items-center gap-4">
            <input type="text" name="" placeholder="Coupon Code" className="md:w-[300px] w-full py-4 rounded outline-none focus:outline-none pr-[164px] pl-6 border border-black max-w-full" id="" />
            <button type="submit" className="bg-secondary2 w-full text-white py-4 px-12 rounded ">Apply Coupon</button>
          </form>
        </div >
        <div className="border-2 w-full md:w-[350px] px-6 py-8 max-w-full  border-black rounded">
          <h1 className="text-[20px] font-medium">Cart Total</h1>
          <div className="flex text-[#000000] items-center justify-between pb-4 mb-4 mt-5 border-b border-black">
            <span >Subtotal:</span>
            <span >123$</span>
          </div>


          <div className="flex items-center text-[#000000] justify-between pb-4 mb-4 border-b border-[#000000]">
            <span>Subtotal:</span>
            <span>123$</span>
          </div>
          <div className="flex items-center text-[#000000] justify-between">
            <span>total:</span>
            <span>123$</span>
          </div>
          <button className="bg-secondary2 mx-auto block text-white py-4 px-7 rounded mt-4">Procees to checkout</button>
        </div>
       
      </section>
    </div>
  );
};

export default CartPage;
