// // "use client";
// // import React, { useState } from 'react'
// // import {SearchManufacturer} from './';
// // import { useRouter } from 'next/navigation';

// // const SearchButton = ({otherClasses}:{otherClasses:string}) =>(
// //   <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
// //       <Image src="/magnifying-glass.svg"
// //       alt="maginifying glass"
// //       width = {40}
// //       height ={40}
// //       className ="object-contain"
// //       />
// //   </button>
// // )


// // const SearchBar = (setManufacturer, setModel) => {

// //     const [searchManufacturer, setsearchManufacturer] = useState('');

// //     const [searchModel, setsearchModel] = useState('');

// //     const router = useRouter();

// //     const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
// //       e.preventDefault();

// //       if(searchManufacturer === '' && searchModel === '') {
// //         return alert('Please fill in hte search bar')
// //       }
    
  
// //   setModel(searchModel)
// //   setsearchManufacturer(searchManufacturer)

// // }

// //   return (
// //     <form className='searchbar' onSubmit={handleSearch}>
// //         <div className='searchbar__item'>
// //             <SearchManufacturer 
// //                 selected = {searchManufacturer}
// //                 setSelected = {setsearchManufacturer}
// //             />

// //             <SearchButton  otherClasses="sm:hidden" />
// //         </div>


// //         <div className='searchbar__item'>
// //           <Image 
// //             src = "/model-icon.png"
// //             width={25}
// //             height={25}
// //             className="absolute w-[20px] h-[20px] ml-4" alt="car model"
// //           />

// //           <input
// //               type='text'
// //               name='model'
// //               value={searchModel}

// //               onChange={(e) => setSearchModel(e.target.value)}
// //               placeholder='Tiguan'
// //               className='searchbar__input'
// //           />

// //           <SearchButton otherClasses='sm:hidden' />
// //         </div>
// //         <SearchButton otherClasses='max-sm:hidden' />
// //     </form>
// //   )
// // }

// // export default SearchBar;





















// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { SearchManufacturer } from ".";
// import { SearchBarProps } from "@/types";

// const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
//   const [searchManufacturer, setSearchManufacturer] = useState("");
//   const [searchModel, setSearchModel] = useState("");

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     setManufacturer(searchManufacturer);
//     setModel(searchModel);
//   };

//   return (
//     <form className="searchbar" onSubmit={handleSearch}>
//       <div className="searchbar__item">
//         <SearchManufacturer
//           selected={searchManufacturer}
//           setSelected={setSearchManufacturer}
//         />
//       </div>

//       <div className="searchbar__item">
//         <Image src="/model-icon.png" width={25} height={25} alt="model" />
//         <input
//           type="text"
//           value={searchModel}
//           onChange={(e) => setSearchModel(e.target.value)}
//           placeholder="Tiguan"
//           className="searchbar__input"
//         />
//       </div>

//       <button type="submit" className="searchbar__button">
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBar;







"use client";

import { useState } from "react";
import Image from "next/image";
import SearchManufacturer from "./SearchManufacturer";

interface SearchBarProps {
  setManufacturer: (value: string) => void;
  setModel: (value: string) => void;
}

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [manufacturer, setManufacturerInput] = useState("");
  const [model, setModelInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setManufacturer(manufacturer);
    setModel(model);
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      {/* Manufacturer */}
      <div className="searchbar__item">
        <SearchManufacturer
          selected={manufacturer}
          setSelected={setManufacturerInput}
        />
      </div>

      {/* Model */}
      <div className="searchbar__item relative">
        <Image
          src="/model-icon.png"
          width={20}
          height={20}
          alt="Car model"
          className="absolute left-4 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          value={model}
          onChange={(e) => setModelInput(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
      </div>

      {/* Submit */}
      <button type="submit" className="searchbar__button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
