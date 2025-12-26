// import React from 'react';
// import Image from 'next/image';
// import { CustomButtonProps } from '@/types';

// const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}:CustomButtonProps) => {
//   return (
//     <button 
//         disabled={false}
//         type={ btnType || "button"}
//         className={`custom-btn ${containerStyles}`}
//         onClick={handleClick}

//     >

//     <span className={`flex-1 ${textStyles}`}>
//         {title}
//     </span>

//     {rightIcon && (
//       <div className='relative w-6 h-6'>
//           <Image
//             src={rightIcon}
//             alt='right icon'
//             fill
//             className='object-contain'
//           />
//       </div>
//     )} 
//     </button>
//   )
// }

// export default CustomButton














"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles = "",
  handleClick,
  btnType = "button",
  textStyles = "",
  rightIcon,
  isDisabled = false,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={isDisabled}
      onClick={handleClick}
      aria-disabled={isDisabled}
      className={`custom-btn ${containerStyles} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <span className="relative w-6 h-6 flex-shrink-0">
          <Image
            src={rightIcon}
            alt=""
            fill
            className="object-contain"
          />
        </span>
      )}
    </button>
  );
};

export default CustomButton;
