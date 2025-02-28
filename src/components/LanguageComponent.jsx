"use client"

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function LanguageComponent() {
    const [language, setLanguage] = useState('');

    const handleChange = (e) => {
      setLanguage(e.target.value);
    };
  
    return (
      <div className="">
        <select
          value={language}
          onChange={handleChange}
          className={`bg-bgcolor  text-sm 
            ${language ? 'border-0' : 'border-none '}`}
        >
          
          <option value="en">English</option>
          <option value="ar">العربية</option>
          
        </select>
      
      </div>

  )
}
