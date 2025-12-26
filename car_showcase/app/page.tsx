// "use client";

// import {CarCard, CustomFilter, Hero, SearchBar, ShowMore} from "@/components";
// import { fuels, manufacturers, yearsOfProduction } from "@/constants";
// import { fetchCars } from "@/utils";
// import { TelemetryPlugin } from "next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default async function Home() {
//   const [allCars, setAllCars] = useState([]);
//   const [loading, setLoading] = useState(false);

//   //search states
//   const [manufacturer, setManufacturer] = useState("");
//   const [model, setModel] = useState("");

//   //filter states
//   const [fuel, setFuel] = useState("")
//   const [year, setYear] = useState(2022)

//   // pagination states
//   const [limit, setLimit] = useState(10)

//  const getCars = async () =>{
//     try{
//       const result = await fetchCars({
//       manufacturer:manufacturer || '',
//       year:year || 2022,
//       fuel:fuel || '',
//       limit:limit || 10,
//       model:model || '' ,
//     });
//     setAllCars(result);
//     }
//     catch(error){
//       console.log(error);
//     }
//     finally{
//       setLoading(false);
//     }

//     useEffect(() =>{
//       console.log(fuel, year, limit, manufacturer, model)
//       getCars();
//     }, [fuel, year, limit, manufacturer, model])

//   useEffect(() =>{
//     getCars()
//   }, [fuel, year, limit, manufacturer, model])

//   console.log(allCars);

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className="home__text-container">
//           <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
//           <p>Explore the cars you might like</p>
//         </div>
//         <div className="home__filters">
//           <SearchBar setManufacturer = {setManufacturer}
//           setModel = {setModel}
//           />

//           <div className="home__filter-container">
//             <CustomFilter title="fuel" options={fuels}
//             setFilter = {setFuel}
//             />
//             <CustomFilter title="year" options={yearsOfProduction} 
//             setFilter = {setYear}
//             />
//           </div>
//         </div>

//         (allCars.length >  0 ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allcars?.map((car) => (
//                 <CarCard car={car}/>
//               ))}

//             </div>

//             {loading && (
//               <div className="mt-16 w-full flex-center">
//                 <Image 
//                   src="/loader.svg"
//                   alt="loader"
//                   width={50}
//                   height={50}
//                   className="object-contain"
//                 />
//               </div>
//             )}
//             <ShowMore  
//               pageNumber = {limit / 10}
//               isNext ={limit  > allCars.length} 
//               setLimit = {setLimit}
//             />
//           </section>
//         ):(
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold">Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         ))
//       </div>
//     </main>
//   );
// }
















"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
} from "@/components";

import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { CarProps } from "@/types";

export default function Home() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(false);

  // filters
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      try {
        const data = await fetchCars({
          manufacturer,
          model,
          fuel,
          year,
          limit,
        });

        setCars(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  const isDataEmpty = !cars || cars.length === 0;

  return (
    <main className="overflow-hidden">
      <Hero />

      <section className="padding-x padding-y max-width" id="discover">
        {/* Header */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore cars you might like</p>
        </div>

        {/* Filters */}
        <div className="home__filters">
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter
              title="Fuel"
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {/* Cars */}
        {!isDataEmpty ? (
          <>
            <div className="home__cars-wrapper">
              {cars.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${index}`} car={car} />
              ))}
            </div>

            {/* Loader */}
            {loading && (
              <div className="mt-16 flex-center">
                <Image
                  src="/loader.svg"
                  width={50}
                  height={50}
                  alt="Loading"
                />
              </div>
            )}

            {/* Pagination */}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit >= cars.length}
              setLimit={setLimit}
            />
          </>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold">No results found</h2>
            <p>Try adjusting your search filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}
