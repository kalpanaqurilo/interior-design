// import React from "react";
// import Image from "next/image";

// const ContactUs =()=>{

//     return(
//       <div className="py-20 bg-[#fffefa] w-full min-h-screen relative pt-[140px]">
//         <section className="max-w-[1728px] mx-auto px-[88px] ">
//         <div className="grid grid-cols-2 gap-12">
//           <div className="flex flex-col justify-center gap-12">
//             <div>
//               <h2 className="[font-family:'Lato',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[66px] mb-6">
//                 DISCOVER US
//               </h2>
//               <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[20px] tracking-[0] leading-8 mb-8">
//                 Interior design is here to help you.
//                 <br />
//                 Our experts are available to answer any <br/>questions you might have. We have got the answers.
//               </p>
//             </div>

//             <div className="flex flex-col gap-8">
//               <div>
//                 <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
//                   VISIT US
//                 </h3>
//                 <div className="flex items-start gap-3">
//                   <span className="text-[#996830] text-xl">📍</span>
//                   <div className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
//                     Office no. G-02, Qunlo Solutions Pvt Ltd.
//                     <br />
//                     Building 1, Ground Floor, Nawada
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
//                   EMAIL US
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <span className="text-[#996830] text-xl">✉️</span>
//                   <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
//                     interiordesign@gmail.com
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
//                   CALL US
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <span className="text-[#996830] text-xl">📞</span>
//                   <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
//                     9999999999
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col gap-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
//                 <Image
//                   src="/Images/contact1.png"
//                   alt="Interior 1"
//                   className="w-full h-full object-cover"
//                   height={280} width={280}
//                 />
//               </div>
//               <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
//                 <Image
//                   src="/Images/contact2.png"
//                   alt="Interior 2"
//                   className="w-full h-full object-cover"
//                   height={280} width={280}
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-3 gap-4">
//               <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
//                 <Image
//                   src="/Images/contact3.png"
//                   alt="Interior 3"
//                   className="w-full h-full object-cover"
//                   height={350} width={350}
//                 />
//               </div>
//               <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
//                 <Image
//                   src="/Images/contact4.png"
//                   alt="Interior 4"
//                   className="w-full h-full object-cover"
//                   height={350} width={350}
//                 />
//               </div>
//               <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
//                 <Image
//                   src="/Images/contact5.png"
//                   alt="Interior 5"
//                   className="w-full h-full object-cover"
//                   height={350} width={350}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

// {/* section2 */}
//       <section>
//         <div className="w-full h-[400px] mt-20">
//           </div>
//       </section>
//       </div>
//     )

// }

// export default ContactUs;


"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
    projectType: "",
    propertyType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="py-20 bg-[#fffefa] w-full min-h-screen relative pt-[140px]">
      {/* SECTION 1: Discover Us */}
      <section className="max-w-[1728px] mx-auto px-[88px] ">
        <div className="grid grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center gap-12">
            <div>
              <h2 className="[font-family:'Lato',Helvetica] font-bold text-black text-[50px] leading-[66px] mb-6">
                DISCOVER US
              </h2>
              <p className="[font-family:'Lato',Helvetica] text-[#18191f] text-[20px] leading-8 mb-8">
                Interior design is here to help you.
                <br />
                Our experts are available to answer any <br />
                questions you might have. We have got the answers.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-[#18191f] text-[20px] mb-3">VISIT US</h3>
                <div className="flex items-start gap-3">
                  <span className="text-[#996830] text-xl">📍</span>
                  <p className="text-[18px] text-[#18191f] leading-7">
                    Office no. G-02, Qunlo Solutions Pvt Ltd.
                    <br />
                    Building 1, Ground Floor, Nawada
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#18191f] text-[20px] mb-3">EMAIL US</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#996830] text-xl">✉️</span>
                  <p className="text-[18px] text-[#18191f] leading-7">
                    interiordesign@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-[#18191f] text-[20px] mb-3">CALL US</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#996830] text-xl">📞</span>
                  <p className="text-[18px] text-[#18191f] leading-7">9999999999</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Images/contact1.png"
                  alt="Interior 1"
                  className="w-full h-full object-cover"
                  height={280}
                  width={280}
                />
              </div>
              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Images/contact2.png"
                  alt="Interior 2"
                  className="w-full h-full object-cover"
                  height={280}
                  width={280}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Images/contact3.png"
                  alt="Interior 3"
                  className="w-full h-full object-cover"
                  height={350}
                  width={350}
                />
              </div>
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Images/contact4.png"
                  alt="Interior 4"
                  className="w-full h-full object-cover"
                  height={350}
                  width={350}
                />
              </div>
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <Image
                  src="/Images/contact5.png"
                  alt="Interior 5"
                  className="w-full h-full object-cover"
                  height={350}
                  width={350}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM */}
      

      <section className="max-w-[1000px] mx-auto mt-34 bg-white p-12 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
  <h3 className="text-[28px] font-bold text-[#18191f] mb-3">
    Start your Interior Design Journey
  </h3>
  <p className="text-[16px] text-[#5a5a5a] mb-8 leading-7">
    We’d love to hear about your vision, whether it’s a cozy home upgrade,
    a luxury villa, or a commercial space transformation. <br />
    Share a few details about your project, and our expert design{" "}
    <strong>team will connect with you for a free consultation within 24 hours.</strong>
  </p>

  <form onSubmit={handleSubmit}>
    {step === 1 && (
      <div className="grid grid-cols-2 gap-6 animate-fadeIn">
        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Contact No. *
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Email Id *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter project address"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Project Type *
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          >
            <option value="">Select project type</option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Renovation</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Property Type *
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full border border-gray-300 text-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          >
            <option value="">Select property type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Office</option>
          </select>
        </div>
      </div>
    )}

    {step === 2 && (
      <div className="grid grid-cols-2 gap-6 animate-fadeIn">
        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Total Area (sq ft)*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g 000 sq ft"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            No. of Rooms *
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="eg. 4 badroom 3 bathroom "
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Budget Range*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Timeline to start *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter project address"
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-[#18191f] font-medium">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your design needs..."
            rows={4}
            className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
            required
          />
        </div>
      </div>
    )}

    <div className="flex justify-between mt-8">
      {step === 2 && (
        <button
          type="button"
          onClick={prevStep}
          className="text-[#996830] px-6 py-3 rounded-lg border border-[#996830] hover:bg-[#fff7ef] transition"
        >
          ← Back
        </button>
      )}
      {step === 1 ? (
        <button
          type="button"
          onClick={nextStep}
          className="bg-[#996830] text-white px-8 py-3 rounded-lg hover:bg-[#b07b45] transition ml-auto"
        >
          Next →
        </button>
      ) : (
        <button
          type="submit"
          className="bg-[#996830] text-white px-8 py-3 rounded-lg hover:bg-[#b07b45] transition ml-auto"
        >
          Submit
        </button>
      )}
    </div>

    <p className="text-center text-sm text-gray-500 mt-6">Step {step} of 2</p>
  </form>
</section>

{/* SECTION 3: GOOGLE MAP */}
<section className="max-w-full mx-auto  mt-24">
  

  <div className="w-full h-[500px]  overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.717824051368!2d-73.87199628459362!3d40.71353797933083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25eb3d3f8473b%3A0x4f7f07b704a8df7b!2sForest%20Hills%2C%20Queens%2C%20NY!5e0!3m2!1sen!2sus!4v1696361591234!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>



      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder,
  textarea::placeholder,
  select::placeholder {
    color: #000;
    opacity: 60%;
      `}</style>
    </div>
  );
};

export default ContactUs;
