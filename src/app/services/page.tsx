import React from "react";

const Services = () => {
  return (
    <div className="bg-[#fffefa] w-full min-h-screen relative mt-8">
      <section className="max-w-[1728px] mx-auto px-[88px] py-20">
        <div className="flex flex-col items-center gap-16 mb-20">
          <div className="flex flex-col items-center gap-6 max-w-[1200px]">
            <h1 className="[font-family:'Lato',Helvetica]  text-black text-[72px] tracking-[0] leading-[86px] text-center">
              Our Interior Design Services
            </h1>
            <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[28px] tracking-[0] leading-[38px] text-center">
              From cozy homes to smart commercial spaces — we design it all
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full max-w-[1400px]">
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300">
                <img
                  src="/Images/service1.png"
                  alt="Living Room Design"
                  className="w-full h-[40px] object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300">
                <img
                  src="/Images/service2.png"
                  alt="Modern Kitchen"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-shadow duration-300">
                <img
                  src="/Images/service3.png"
                  alt="Office Space"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              </div>
      </section>
      </div>
  );
};

export default Services;


// import React from "react";
// import Image from "next/image";

// const Services = () => {
// //   const services = [
// //     { src: "/Images/service1.png", title: "Living Room Design" },
// //     { src: "/Images/service2.png", title: "Modern Kitchen" },
// //     { src: "/Images/service3.png", title: "Office Space" },
// //   ];

//   return (
//     <div className="bg-[#fffefa] w-full min-h-screen  mt-8">
//       <section className=" mx-auto px-[88px] py-20">
//         <div className="flex flex-col items-center gap-16 mb-20">
//           <div className="flex flex-col items-center gap-6 ">
//             <h1 className="[font-family:'Lato',Helvetica] text-black text-[72px] tracking-[0] leading-[86px] text-center">
//               Our Interior Design Services
//             </h1>
//             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[28px] tracking-[0] leading-[38px] text-center">
//               From cozy homes to smart commercial spaces — we design it all
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-6 w-full ">
//           <div className="grid grid-cols-3 gap-6 w-full h-full">
// <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-[420px]">
// <div className="absolute inset-0 flex flex-col">
//     <div className="relative overflow-hidden transition-all duration-500 h-full">
//         {/* <img
//             src="/Images/service1.png"
//             alt="Living Room Design"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//         /> */}
// <Image
//             src="/Images/service2.png"
//             alt="Modern Kitchen"
//             height={400}
//             width={400}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//         />
        
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//             Residential Interiors
//         </h3>
//         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//             Transform your living spaces with elegant design
//         </p>
//     </div>
// </div>
// </div>

// <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-full">
// <div className=" inset-0 flex flex-col">
//     <div className="relative overflow-hidden transition-all duration-500 group-hover:h-[80%] h-full">
//         <Image
//             src="/Images/service2.png"
//             alt="Modern Kitchen"
//             height={400}
//             width={400}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//         />
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//             Modular Kitchens
//         </h3>
//         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//             Custom kitchen solutions for modern living
//         </p>
//     </div>
// </div>
// </div>

// <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-[420px]">
// <div className="absolute inset-0 flex flex-col">
//     <div className="relative overflow-hidden transition-all duration-500 group-hover:h-[80%] h-full">
//         {/* <img
//             src="/Images/service3.png"
//             alt="Office Space"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//         /> */}
//         <Image
//             src="/Images/service2.png"
//             alt="Modern Kitchen"
//             height={1000}
//             width={400}
//             className=" object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//         />
//     </div>
//     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//             Commercial Spaces
//         </h3>
//         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//             Professional office and retail interiors
//         </p>
//     </div>
// </div>
// </div>
// </div>
//         </div>
//       </section>
//     </div>
//   );
// };

//  export default Services;


// import React from "react";

// const Services = () => {
    

//     return (

//         <div className="bg-[#fffefa] w-full min-h-screen ">

//             <main className="pt-[130px]">
//                 <section className="max-w-[1728px] mx-auto px-[88px] py-20">
//                     <div className="flex flex-col items-center gap-16 mb-20">
//                         <div className="flex flex-col items-center gap-6 max-w-[1200px]">
//                             <h1 className="[font-family:'Lato',Helvetica] font-extrabold text-text-gray-900 text-[72px] tracking-[0] leading-[86px] text-center">
//                                 Our Interior Design Services
//                             </h1>
//                             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[28px] tracking-[0] leading-[38px] text-center">
//                                 From cozy homes to smart commercial spaces — we design it all
//                             </p>
//                         </div>

//                         <div className="grid grid-cols-3 gap-6 w-full max-w-[1400px]">
//                             <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-[420px]">
//                                 <div className="absolute inset-0 flex flex-col">
//                                     <div className="relative overflow-hidden transition-all duration-500 group-hover:h-[80%] h-full">
//                                         <img
//                                             src="/Images/service1.png"
//                                             alt="Living Room Design"
//                                             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//                                         />
//                                     </div>
//                                     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//                                         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//                                             Residential Interiors
//                                         </h3>
//                                         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//                                             Transform your living spaces with elegant design
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-[420px]">
//                                 <div className="absolute inset-0 flex flex-col">
//                                     <div className="relative overflow-hidden transition-all duration-500 group-hover:h-[80%] h-full">
//                                         <img
//                                             src="/Images/service2.png"
//                                             alt="Modern Kitchen"
//                                             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//                                         />
//                                     </div>
//                                     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//                                         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//                                             Modular Kitchens
//                                         </h3>
//                                         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//                                             Custom kitchen solutions for modern living
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_rgba(153,104,48,0.15)] transition-all duration-500 h-[420px]">
//                                 <div className="absolute inset-0 flex flex-col">
//                                     <div className="relative overflow-hidden transition-all duration-500 group-hover:h-[80%] h-full">
//                                         <img
//                                             src="/Images/service3.png"
//                                             alt="Office Space"
//                                             className="w-full h-full object-cover transition-transform duration-500 group-hover:-translate-y-[10%]"
//                                         />
//                                     </div>
//                                     <div className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0">
//                                         <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#996830] text-[22px] tracking-[0] leading-[28px] mb-2">
//                                             Commercial Spaces
//                                         </h3>
//                                         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[16px] tracking-[0] leading-[22px]">
//                                             Professional office and retail interiors
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

                    

//                     {/* <div className="flex flex-col items-center gap-20 mt-32">
//                         <div className="flex flex-col items-center gap-6 max-w-[1000px]">
//                             <h2 className="[font-family:'Lato',Helvetica] font-extrabold text-text-gray-900 text-[56px] tracking-[0] leading-[66px] text-center">
//                                 Renovation & Space Makeover
//                             </h2>
//                             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[22px] tracking-[0] leading-[32px] text-center">
//                                 Whether you want to update your tired old space or reimagine it entirely,
//                                 modern, warmer, and better functionality.
//                             </p>
//                         </div>

//                         <div className="w-full max-w-[1200px] bg-gradient-to-br from-[#f5e6d3] to-[#e8d4c0] rounded-3xl p-16 shadow-[0px_10px_40px_rgba(0,0,0,0.1)]">
//                             <div className="flex items-center justify-between gap-12">
//                                 <div className="flex-1">
//                                     <img
//                                         src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
//                                         alt="3D Visualization"
//                                         className="w-full h-[500px] object-cover rounded-2xl shadow-[0px_8px_30px_rgba(0,0,0,0.15)]"
//                                     />
//                                 </div>

//                                 <div className="flex-1 flex flex-col gap-8">
//                                     <div className="flex flex-col gap-4">
//                                         <h3 className="[font-family:'Lato',Helvetica] font-extrabold text-[#996830] text-[36px] tracking-[0] leading-[44px]">
//                                             3D VISUALIZATION
//                                         </h3>
//                                         <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[20px] tracking-[0] leading-[30px]">
//                                             Preview Your Future Interiors With Photorealistic 3D Renders And Walkthroughs.
//                                         </p>
//                                     </div>

//                                     <div className="flex flex-col gap-3">
//                                         <div className="flex items-start gap-3">
//                                             <div className="w-2 h-2 bg-[#996830] rounded-full mt-2 flex-shrink-0"></div>
//                                             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-[28px]">
//                                                 See realistic mockups before construction begins
//                                             </p>
//                                         </div>
//                                         <div className="flex items-start gap-3">
//                                             <div className="w-2 h-2 bg-[#996830] rounded-full mt-2 flex-shrink-0"></div>
//                                             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-[28px]">
//                                                 Make changes easily without expensive rework
//                                             </p>
//                                         </div>
//                                         <div className="flex items-start gap-3">
//                                             <div className="w-2 h-2 bg-[#996830] rounded-full mt-2 flex-shrink-0"></div>
//                                             <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-[28px]">
//                                                 Experience virtual walkthroughs of your future space
//                                             </p>
//                                         </div>
//                                     </div>

                                    
//                                 </div>
//                             </div>
//                         </div>
//                     </div> */}

//                     {/* <div className="flex flex-col items-center gap-8 mt-24 bg-gradient-to-r from-[#996830] to-[#7d5426] rounded-3xl p-16">
//                         <h2 className="[font-family:'Lato',Helvetica] font-extrabold text-white text-[52px] tracking-[0] leading-[62px] text-center">
//                             Ready to Transform Your Space?
//                         </h2>
//                         <p className="[font-family:'Lato',Helvetica] font-normal text-white text-[24px] tracking-[0] leading-[34px] text-center max-w-[900px]">
//                             Let's bring your vision to life. Schedule a consultation with our
//                             design experts and discover how we can create the perfect space
//                             for you.
//                         </p>
                        
//                     </div> */}
//                 </section>
//             </main>

            
//         </div>
//     )
// };




// export default Services;
