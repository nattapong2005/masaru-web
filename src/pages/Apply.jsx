import React, { useState } from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";
import welfare from "../data/utils.json";
import axios from "axios";
import Test from "./Test";

const Apply = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", file: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    alert("ส่งข้อมูลเรียบร้อย");
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("file", formData.file);

    try {
      const res = await axios.post(
        "https://script.google.com/macros/s/AKfycbxPG2e4woi2WiV5IfxQTc58-HJ8C2oWkyqweBApgwsl-sKZT8WNycqTPTlDtRAytXc/exec",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}
      <section className="relative min-h-screen bg-[url('./img/apply/a.jpg')] bg-center bg-cover flex items-center">
        {/* Overlay ทำให้ภาพจางลง */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold  mb-3">ร่วมงานกับเรา</h1>
              <p className="text-base md:text-lg text-gray-200 mb-5">
                เราใส่ใจในการพัฒนาและยกระดับคุณภาพชีวิตของบุคลากร <br></br> พร้อมสร้างสภาพแวดล้อมที่เต็มไปด้วยโอกาส และความท้าทาย
                <br></br>เพื่อให้ทุกคนเติบโตไปพร้อมกับธุรกิจ ที่ขับเคลื่อนด้วยนวัตกรรมและความร่วมมือ
              </p>
              <button
                className="text-white px-6 py-3 rounded-full cursor-pointer font-semibold hover:opacity-90 transition flex gap-2"
                style={{ backgroundColor: "#D93327" }}
              >
                <LucideIcons.ChevronRight/> สมัครตอนนี้
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Welfare section -------------------------------------------------------------------------------------------------- */}
     <Test/>
      {/* Welfare section -------------------------------------------------------------------------------------------------- */}

      <section>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 ">สมัครร่วมทีมกับเรา</h1>
        <div className=" px-4 py-8 flex justify-center items-center">
          <form className="p-10 rounded-xl w-full max-w-4xl shadow-lg bg-black" method="POST" action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-lg mb-2">
                ชื่อ
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อ"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-lg mb-2">
                อีเมล
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="กรุณากรอกอีเมล"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-lg mb-2">
                ช่องทางการติดต่อ
              </label>
              <textarea
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="กรุณากรอกช่องทางการติดต่อ"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D93327] text-white px-4 py-3 rounded-full hover:bg-red-700  transition duration-300"
            >
              ส่งใบสมัคร
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
