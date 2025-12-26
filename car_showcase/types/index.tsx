// import { MouseEventHandler } from "react";

// export interface CustomButtonProps {
//   title: string;
//   containerStyles?: string;
//   handleClick?: MouseEventHandler<HTMLButtonElement>;
//   btnType: "button" | "submit";
//   textStyles?: string;
//   isDisabled?: boolean;
// }

// export interface SearchManufacturerProps {
//   manufacturer: string;
//   setManufacturer: (manufacturer: string) => void;
// }

// export interface CarProps {
//   city_mpg: number;
//   class: string;
//   combination_mpg: number;
//   cylinders: number;
//   displacement: number;
//   drive: string;
//   fuel_type: string;
//   highway_mpg: number;
//   make: string;
//   model: string;
//   transmission: string;
//   year: number;
// }

// export interface OptionProps {
//   title: string;
//   value: string;
// }

// export interface CustomFilterProps {
//   title: string;
//   options: OptionProps[];
// }

// export const updateSearchParams = (type: string, value: string) => {
//   const searchParams = new URLSearchParams(window.location.search);

//   searchParams.set(type, value);

//   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

//   return newPathname;
// };















import { MouseEventHandler } from "react";

/* =========================
   BUTTON
========================= */
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

/* =========================
   SEARCH
========================= */
export interface SearchManufacturerProps {
  selected: string;
  setSelected: (value: string) => void;
}

export interface SearchBarProps {
  setManufacturer: (value: string) => void;
  setModel: (value: string) => void;
}

/* =========================
   FILTER
========================= */
export interface OptionProps {
  title: string;
  value: string | number;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (value: string | number) => void;
}

/* =========================
   CAR DATA
========================= */
export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

/* =========================
   PAGINATION
========================= */
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

/* =========================
   API FILTERS
========================= */
export interface FilterProps {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}
