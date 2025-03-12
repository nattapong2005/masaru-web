import React from "react";
import Layout from "./../components/Layout";
import * as LucideIcons from "lucide-react";
import { BookOpenText, Headset } from "lucide-react";
import services from "../data/utils.json";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}
      <section className="container flex  items-center justify-center mx-auto md:px-12 mt-20 lg:mt-0 ">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-white font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight ">
            MASARU MARKETING
          </h1>
          <p className="text-2xl text-center text-white lg:text-left lg:max-w-md">Digital Marketing E-commerce</p>
          <p className="text-2xl text-center text-white lg:text-left lg:max-w-md">และคลังสินค้าฟูลฟิวเม้นท์ครบวงจร</p>
          <div className="flex justify-center mt-2 lg:justify-start">
            <button className="flex gap-2 items-center cursor-pointer bg-[#D93327] hover:bg-red-500 transition px-10 py-3 rounded-lg  text-white mt-4 shadow-lg text-lg">
              <BookOpenText /> อ่านเพิ่มเติม
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 ">
          <img src="./img/home/1.png" />
        </div>
      </section>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Info -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto p-10 mb-20">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-5">
          <div className="w-full sm:w-1/2">
            <img className="rounded-xl" src="./img/home/info.jpg" alt="" />
          </div>
          <div className=" max-w-xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">Masaru Digital Marketing</h1>
            <p className="text-lg sm:text-xl text-white">
              บริษัทประกอบกิจการเกี่ยวกับ E-commerce และคลังสินค้าฟูลฟิวเม้นท์ รวมถึงทำธุรกิจในรูปแบบ Digital Marketing บนแพลตฟอร์มออนไลน์
              เช่น Facebook Lazada Shopee JD Central และ Tiktok
            </p>
          </div>
        </div>
      </section>
      {/* Info -------------------------------------------------------------------------------------------------- */}

      {/* Our Service -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto">
        {/* <h1 className="text-4xl font-bold text-white text-center">บริการของเรา</h1> */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {services.services.map((s, index) => {
              const IconComponent = LucideIcons[s.icon];
              return (
                <div key={index} className="card max-w-md sm:max-w-xs p-10 rounded-lg border-2  cursor-pointer border-red-700 hover:shadow-[0_0_20px_5px_rgba(217,51,39,0.9)] transform transition duration-500 hover:-translate-y-3">
                  <h1 className="text-white flex flex-col gap-2 text-2xl font-bold items-left">
                    {IconComponent && <IconComponent className="text-[#D93327]" size={60} />}
                    {s.name}
                  </h1>
                  <div className="text-white mt-2">
                    <h2>{s.description}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Our Service -------------------------------------------------------------------------------------------------- */}

      {/* Register  -------------------------------------------------------------------------------------------------- */}
      <section className="bg-[url('./img/home/test.jpg')] bg-cover bg-center py-32 mb-10 mt-10">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold text-center">พร้อมที่จะเติบโตธุรกิจของคุณหรือยัง</h1>
        <div className="flex flex-col justify-center items-center mt-2">
          <h2 className="max-w-xl text-lg px-2 sm:px-0">
            ติดต่อเราวันนี้เพื่อขอคำแนะนำฟรีจากผู้เชี่ยวชาญด้าน E-commerce และ Digital Marketing
            หรือเรียนรู้วิธีการขยายธุรกิจของคุณทางออนไลน์
          </h2>
          <button className="mt-4 flex gap-2 text-white py-2.5 px-8 rounded-lg bg-[#D93327] cursor-pointer hover:bg-red-600">
            <Headset /> ติดต่อเรา
          </button>
        </div>
      </section>
      {/* Register  -------------------------------------------------------------------------------------------------- */}

      {/* Why us  -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto mt-12 mb-5">
        <h1 className="text-white text-2xl sm:text-4xl font-bold text-center">
          ทำไมต้องเลือก <span className="text-[#D93327] ">MASARU</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-white text-lg max-w-lg mt-2 px-3 sm:px-0">
            MASARU คือผู้เชี่ยวชาญด้านการตลาดและสื่อสารออนไลน์ครบวงจร เราช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง
          </p>
        </div>
      </section>
      {/* Why us  -------------------------------------------------------------------------------------------------- */}

      
    </Layout>
  );
};

export default Home;
