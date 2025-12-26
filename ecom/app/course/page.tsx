import React from 'react'
import image from "../../public/OIP.webp"
import Image from 'next/image'
import Link from 'next/link'

function Coursepage() {
  return (
    <div>
        <h1>
            Coursepage
        </h1>

        <li>
            <Link href={`/course/course-details/course-1`}>Course 1</Link>
        </li>

        <li>
            <Link href={`/course/course-details/course-2`}>Course 2</Link>
        </li>

        <li>
            <Link href={`/course/course-details/course-3`}>Course 3</Link>
        </li>

        <li>
            <Link href={`/course/course-details/course-4`}>Course 4</Link>
        </li>

        <li>
            <Link href={`/course/course-details/course-5`}>Course 5</Link>
        </li>
        {/* <div style={{
            width:100,
            height:100,
            position:"relative"
        }}>
            <Image fill src={image.src} />
        </div> */}

        {/* <img src={image.src} /> */}

    </div>
  )
}

export default Coursepage