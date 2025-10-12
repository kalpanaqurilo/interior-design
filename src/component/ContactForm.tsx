"use client";

import React, { useState } from "react";


const ContactUs = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
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
          Share a few details about your project and our design team will reach
          out within <strong>24 hours</strong>.
        </p>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="grid grid-cols-2 gap-6 animate-fadeIn">
              <div>
                <label className="block mb-2 font-medium text-[#18191f]">
                  Name *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#18191f]">
                  Contact No. *
                </label>
                <input
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  placeholder="+91-9876543210"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#18191f]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#18191f]">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Select...</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#18191f]">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Select...</option>
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
                  name="TotalArea"
                  value={formData.TotalArea}
                  onChange={handleChange}
                  placeholder="1200 sq ft"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  No. of Rooms
                </label>
                <input
                  name="NumberOfRoom"
                  value={formData.NumberOfRoom}
                  onChange={handleChange}
                  placeholder="3"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  Budget Range
                </label>
                <input
                  name="BudgetsRange"
                  value={formData.BudgetsRange}
                  onChange={handleChange}
                  placeholder="₹5–8L"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-[#18191f] font-medium">
                  Timeline to start
                </label>
                <input
                  name="TimeToStart"
                  value={formData.TimeToStart}
                  onChange={handleChange}
                  placeholder="1–3 months"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2 text-[#18191f] font-medium">
                  Message
                </label>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your design needs..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step === 2 && (
              <button
                type="button"
                onClick={prevStep}
                className="text-[#996830] px-6 py-3 rounded-lg border border-[#996830]"
              >
                ← Back
              </button>
            )}

            {step === 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-[#996830] text-white px-8 py-3 rounded-lg hover:bg-[#b07b45]"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-lg text-white transition ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#996830] hover:bg-[#b07b45]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Step {step} of 2
          </p>
        </form>
      </section>

      {/* Keep Google Map Section same */}
    </div>
  );
};

export default ContactUs;
