// // export async function fetchCars(){
// //     const headers = {
// //         'x-rapidapi-key': '1051995125msh037bbbcc571a138p1155a0jsn8c2ae3c8c61d',
// //     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

// import { CarProps } from "@/types";

// //     }
// //     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
// //         headers:headers,
// //     });

// //     const result = await response.json();

// //     return result;
// // }




// // export async function fetchCars(filters:FilterProps){

// //     const {manufacturer, year, model, limit, fuel} = filters;

// //     const headers = {
// //         'x-rapidapi-key': '1051995125msh037bbbcc571a138p1155a0jsn8c2ae3c8c61d',
// //     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

// //     }
// //     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',{
// //         headers:headers,
// //     });

// //     const result = await response.json();

// //     return result;
// // }



// export async function fetchCars(filters:FilterProps){

//     const {manufacturer, year, model, limit, fuel} = filters;

//     const headers = {
//         'x-rapidapi-key': '1051995125msh037bbbcc571a138p1155a0jsn8c2ae3c8c61d',
//     'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

//     }
//     const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
//         headers:headers,
//     });

//     const result = await response.json();

//     return result;
// }



// export const calculateCarRent = (city_mpg: number, year: number) => {
//   const basePricePerDay = 50; // Base rental price per day in dollars
//   const mileageFactor = 0.1; // Additional rate per mile driven
//   const ageFactor = 0.05; // Additional rate per year of vehicle age

//   // Calculate additional rate based on mileage and age
//   const mileageRate = city_mpg * mileageFactor;
//   const ageRate = (new Date().getFullYear() - year) * ageFactor;

//   // Calculate total rental rate per day
//   const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

//   return rentalRatePerDay.toFixed(0);
// };




// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//   url.searchParams.append('make', make);
//   url.searchParams.append('modelFamily', model.split(" ")[0]);
//   url.searchParams.append('zoomType', 'fullscreen');
//   url.searchParams.append('modelYear', `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`);

//   return `${url}`;
// } 


// export interface FilterProps{
//     manufacturer: string,
//     year: number,
//     fuel: string,
//     limit: number,
//     model: string,
// }




// export interface ShowMoreProps{
//     pageNumber:number;
//     isNext:boolean;
// }







import { CarProps, FilterProps } from "@/types";

/* =====================================
   FETCH CARS FROM API
===================================== */
export async function fetchCars(
  filters: FilterProps
): Promise<CarProps[]> {
  const { manufacturer, year, model, limit, fuel } = filters;

  const url = new URL(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars"
  );

  url.searchParams.append("make", manufacturer);
  url.searchParams.append("year", String(year));
  url.searchParams.append("model", model);
  url.searchParams.append("limit", String(limit));
  url.searchParams.append("fuel_type", fuel);

  const response = await fetch(url.toString(), {
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch cars: ${response.status}`);
  }

  const data: CarProps[] = await response.json();
  return data;
}

/* =====================================
   CAR RENT CALCULATION
===================================== */
export const calculateCarRent = (
  city_mpg: number,
  year: number
): string => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  return Math.round(
    basePricePerDay + mileageRate + ageRate
  ).toString();
};

/* =====================================
   CAR IMAGE GENERATOR
===================================== */
export const generateCarImageUrl = (
  car: CarProps,
  angle?: string
): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY ?? ""
  );
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", String(car.year));

  if (angle) {
    url.searchParams.append("angle", angle);
  }

  return url.toString();
};







