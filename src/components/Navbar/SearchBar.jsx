import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return <>
   <form className="relative hidden md:block">
            <input type="search" className="pl-[10px] py-[7px] focus:outline-none text-[#7D8184] max-w-full w-[223px] bg-[#F5F5F5] border-none rounded-[4px]" placeholder="What are you looking for?" />
            <CiSearch size={24} className="absolute translate-y-[-50%] text-[#7D8184] text-[24px] top-1/2 right-1" />
          </form>
  
  </>
}

export default SearchBar