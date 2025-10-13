"use client";

import React, { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNo: "",
        address: "",
        projectType: "",
        propertyType: "",
        TotalArea: "",
        NumberOfRoom: "",
        BudgetsRange: "",
        TimeToStart: "",
        Message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(2);
    const prevStep = () => setStep(1);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "https://d2j83cbk-4000.inc1.devtunnels.ms/api/contact",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("✅ Form submitted successfully!");
                console.log("Success:", data);
                setFormData({
                    name: "",
                    email: "",
                    contactNo: "",
                    address: "",
                    projectType: "",
                    propertyType: "",
                    TotalArea: "",
                    NumberOfRoom: "",
                    BudgetsRange: "",
                    TimeToStart: "",
                    Message: "",
                });
                setStep(1);
            } else {
                alert("❌ Failed to submit. Please try again.");
                console.error("Error:", data);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("⚠️ Network error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-20 bg-[#fffefa] w-full min-h-screen relative pt-[140px]">
            {/* === DISCOVER SECTION === */}
            {/* Keep your existing discover section and images unchanged */}

            {/* === FORM SECTION === */}
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
                  name="contactNo"
                  value={formData.contactNo}
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
                  Address
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
                  Project Type
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
                  Property Type
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
                  Total Area (sq ft)
                </label>
                <input
                  type="text"
                  name="TotalArea"
                  value={formData.TotalArea}
                  onChange={handleChange}
                  placeholder="e.g 000 sq ft"
                  className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  No. of Rooms
                </label>
                <input
                  type="text"
                  name="NumberOfRoom"
                  value={formData.NumberOfRoom}
                  onChange={handleChange}
                  placeholder="eg. 4 bedroom 3 bathroom "
                  className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  Budget Range
                </label>
                <input
                  type="text"
                  name="BudgetsRange"
                  value={formData.BudgetsRange}
                  onChange={handleChange}
                  placeholder=""
                  className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  Timeline to start
                </label>
                <input
                  type="text"
                  name="TimeToStart"
                  value={formData.TimeToStart}
                  onChange={handleChange}
                  placeholder="Enter project address"
                  className="w-full border border-gray-300 text-black placeholder-black rounded-lg px-4 py-3 focus:outline-none focus:border-[#996830]"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  Message
                </label>
                <textarea
                  name="Message"
                  value={formData.Message}
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

        </div>
    );
};

export default ContactUs;
