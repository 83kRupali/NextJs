// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { footerLinks } from "@/constants";
// import { it } from "node:test";


// const Footer = () => {
//   return (
//     <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
//       <div className="flex max-md:flex-col flex-wrap justify-between gap=5 sm:px-16 px-6 py-10">
//         <div className="flex flex-col justify-start items-start gap-6">
//           <Image
//             src="/logo.svg"
//             alt='Car Hub logo'
//             width={118}
//             height={18}
//             className='object-contain'
//           />
//           <p className="text-base text-gray-700">
//             Carhub 2023 <br /> 
//             All rights reserved &copy;
//           </p>
//         </div>


//         <div className="footer__links">
//             {footerLinks.map((link) =>(
//                 <div key={link.title}
//                  className="footer__link">
//                     <h3 className="font-bold">{link.title}</h3>
                
//                 {link.links.map((item) =>(
//                     <Link 
//                         key={item.title}
//                         href={item.url}
//                         className="text-gray-500"
//                     >
//                         {item.title}
//                     </Link>
//                 ))}
//                 </div>
//             ))}
//         </div>
//         </div>

//         <div className="flex justify-between flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            
//             <p>@2023 CarHub. All Rights Reserved</p>

//             <div className="footer_copyrights-link">
//                 <Link href="/" className="text-gray-500">
//                     Privacy Policy
//                 </Link>

//                 <Link href="/" className="text-gray-500">
//                     Terms of Use
//                 </Link>
//             </div>
//         </div>
      
//     </footer>
//   );
// };

// export default Footer;














import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-16 py-12">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Image
              src="/logo.svg"
              alt="CarHub logo"
              width={118}
              height={18}
              priority
            />

            <p className="text-sm text-gray-600 leading-6">
              CarHub 2023 <br />
              All rights reserved ©
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="font-semibold text-gray-900">
                  {section.title}
                </h3>

                {section.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-sm text-gray-500 hover:text-gray-900 transition"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2023 CarHub. All Rights Reserved
          </p>

          <div className="flex gap-6">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
