import React from "react";

const ContactUs =()=>{

    return(
        <section className="max-w-[1728px] mx-auto px-[88px] py-20 bg-[#fffefa] w-full min-h-screen relative pt-[140px]">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col justify-center gap-12">
            <div>
              <h2 className="[font-family:'Lato',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[66px] mb-6">
                DISCOVER US
              </h2>
              <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[20px] tracking-[0] leading-8 mb-8">
                Interior design is here to help you.
                <br />
                Our experts are available to answer any <br/>questions you might have. We've got the answers.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
                  VISIT US
                </h3>
                <div className="flex items-start gap-3">
                  <span className="text-[#996830] text-xl">📍</span>
                  <div className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
                    Office no. G-02, Qunlo Solutions Pvt Ltd.
                    <br />
                    Building 1, Ground Floor, Nawada
                  </div>
                </div>
              </div>

              <div>
                <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
                  EMAIL US
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#996830] text-xl">✉️</span>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
                    interiordesign@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="[font-family:'Lato',Helvetica] font-bold text-[#18191f] text-[20px] tracking-[0] leading-[32px] mb-3">
                  CALL US
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-[#996830] text-xl">📞</span>
                  <p className="[font-family:'Lato',Helvetica] font-normal text-[#18191f] text-[18px] tracking-[0] leading-7">
                    9999999999
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/Images/contact1.png"
                  alt="Interior 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/Images/contact2.png"
                  alt="Interior 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/Images/contact3.png"
                  alt="Interior 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/Images/contact4.png"
                  alt="Interior 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">
                <img
                  src="/Images/contact5.png"
                  alt="Interior 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        
    )

}

export default ContactUs;