import React, { useState } from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API
    console.log(formData);
  };

  return (
    <Layout>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}
      <section
        id="home"
        className="py-48 bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/img/contact/header.jpg)]"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-2 text-white">Contact Us</h2>
          <p className="text-lg text-white ">หน้าหลัก / ติดต่อเรา</p>
        </div>
      </section>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}

     {/* Form -----------------------------------------------------------------------------------------------*/}
      <section data-aos="fade-up" data-aos-duration="1000"  className="container mx-auto mt-10 mb-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 p-5 sm:p-0">
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#D93327] w-fit p-2.5 rounded-full">
                <LucideIcons.MapPin className="text-white" size={40} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-xl font-bold">Address</h1>
                <h1 className="text-white">475/4-5 เมือง นครปฐม 73000</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#D93327] w-fit p-2.5 rounded-full">
                <LucideIcons.Phone className="text-white" size={40} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-xl font-bold">โทร</h1>
                <h1 className="text-white">0927659777</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-[#D93327] w-fit p-2.5 rounded-full">
                <LucideIcons.Mail className="text-white" size={40} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white text-xl font-bold">อีเมล</h1>
                <h1 className="text-white">hr.official.ganes@gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 sm:p-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="mb-5">
                <label className="block text-white text-lg font-medium mb-2" htmlFor="name">
                  ชื่อ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-white"
                  placeholder="กรอกชื่อ"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-white text-lg font-medium mb-2" htmlFor="email">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-white"
                  placeholder="กรอกอีเมล"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-white text-lg font-medium mb-2" htmlFor="message">
                  ข้อความ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-white"
                  placeholder="กรอกข้อความ"
                  rows="4"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-[#D93327] text-white py-3 px-6 rounded-full hover:bg-red-600 transition duration-300 cursor-pointer"
              >
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </section>
       {/* Form -----------------------------------------------------------------------------------------------*/}


     {/* Google Map -----------------------------------------------------------------------------------------------*/}
      <section data-aos="fade-down" data-aos-duration="500"  className="container mx-auto mt-20 mb-10">
        <h1 className="text-white text-4xl font-bold text-center">Google Map</h1>
        <div className="mt-5 mb-10 p-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.1999764747934!2d100.067987!3d13.827027300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2e542f6f1f83f%3A0x8085b5c44fa33ffb!2sMasaru%20Marketing%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1742351562345!5m2!1sth!2sth"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          />
        </div>
      </section>
       {/* Google Map -----------------------------------------------------------------------------------------------*/}
    </Layout>
  );
};

export default Contact;
