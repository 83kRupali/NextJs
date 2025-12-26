// import React from 'react'

// function page({params}) {
//   return (
//     <>
//         <main>
//             <h1>This os the course detail page</h1>
//         </main>

//         <main>
//             <h2>Course detail of ${params.course_slug}</h2>
//         </main>
//     </>
//   )
// }

// export default page
"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return (
    <main>
      <h2>Course detail of {params.course_slug}</h2>
    </main>
  );
}
