"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2';
import * as Yup from "yup";


export const context = createContext()
const ContextData = ({children}) => {
  const [isLoadding,setIsLoadding] = useState(false)
      let token = Cookies.get("tokenUser");
const queryclient = useQueryClient()

      const getAllProducts = async ()=>{
        try{
          const {data} = await axios.get("https://a7mde-commerce.runasp.net/api/Produts/All");
          return data
        }catch(e){
          console.log(e)
        }
       
    }
    

    
      // جلب بيانات قائمة المفضلة
      const getWhishList = async () => {
        try {
          const { data } = await axios.get(`https://a7mde-commerce.runasp.net/api/WishList`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return data;
        } catch (error) {
          console.error("Error fetching wishlist data:", error);
          return [];
        }
      };

        // جلب بيانات السلة
  const getCarts = async () => {

    try {
      const { data } = await axios.get(`https://a7mde-commerce.runasp.net/api/Cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return [];
    }
  };
  const relatedProducts = async () => {

    try {
      const {data} = await axios.get(`https://a7mde-commerce.runasp.net/api/Produts/JustForYou`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.error("Error fetching cart data:", error);
      return [];
    }
  };

// get categories
const getCategories =async ()=>{
  try{
    const {data} = await axios.get("https://a7mde-commerce.runasp.net/api/Categories/GetAllCategories")
    return data;
     }catch(e){
      console.log(e)
     }
  

 
    }

    // استخدام useQuery للحصول على بيانات السلة والمفضلة
    const { data: cartData,isLoading:loaddingCart } = useQuery({
      queryKey: ["cartProduct"],
      queryFn: getCarts,
    });
  
    const { data: wishlistData } = useQuery({
      queryKey: ["wishlistProduct"],
      queryFn: getWhishList,
    });
  
    const {data: releatedProducts} = useQuery({
        queryKey: ["relatedData"],
        queryFn: relatedProducts,
      });


       
   const { data: categoriesData,isLoading: loaddingProducts} = useQuery({
    queryKey: ['categories'],
      queryFn : getCategories,
  })
        const {data: getAllProduct} =useQuery(
     {
        querykey :['product'],
        queryFn : getAllProducts,
     }
        
    )






    // ___________________________________________
    // change password 
       const queryClient  = useQueryClient()
     
     
       const initialValue = {
         oldpass: '',
         NewPass: '',
         confirmednewpass: ''
       }
       // validation
       const validationSchema = Yup.object({
         oldpass: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, " The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. ").required('old Password is required'),
         NewPass: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, " The password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. ").required('New Password is required'),
         confirmednewpass: Yup.string().oneOf([Yup.ref('NewPass'), null], 'Passwords must match').required('Confirm New Password is required'),
       })
       // call api 
       const handleChange = async (values)=>{
     
         try{
           setIsLoadding(true)
           console.log("Sending request...");
     
           const {data} = await axios.patch("https://a7mde-commerce.runasp.net/api/Account/ChangePassword",   null,
           
            { 
             headers: {
               Authorization: `Bearer ${token}`,
             },
             params: values,
           }
     
         
     
         )
         console.log(data)
             return data; 
         }catch(e){
           console.log("API Error:", error?.response?.data || error.message); // اطبع الخطأ بالكامل
     
           setIsLoadding(false)
         }finally{
           setIsLoadding(false)
         }
       }
       // submiting
       const mutation = useMutation({
         mutationKey:["changePassword"],
         mutationFn: handleChange,
         onSuccess: (data) => {
           console.log("data: " , data)
           queryClient.invalidateQueries("changePassword")
              Swal.fire({
                icon: "success",
                title: data.message,
                text: "Your password has been successfully changed.",
                
              }).then(() => { router.push("/SignIn") })
            },
             onError: (error) => {
                  Swal.fire({
                    icon: "error",
                    title: error.response?.data?.message,
                  })
                },
       })
     
     
  return (
    <context.Provider value={{setIsLoadding,validationSchema,initialValue,mutation,isLoadding,cartData,loaddingCart,wishlistData,loaddingProducts,getAllProduct,categoriesData,getCarts,releatedProducts}}>
        {children}
    </context.Provider>
  )
}

export default ContextData