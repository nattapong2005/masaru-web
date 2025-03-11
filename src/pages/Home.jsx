import React from "react";
import Layout from "./../components/Layout";
import { BookOpenText } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* -------------------------------------------------------------------------------------------------- */}
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
      {/* -------------------------------------------------------------------------------------------------- */}

      {/* -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto p-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div className="w-full sm:w-1/2">
            <img className="rounded-xl" src="./img/home/test.jpg" alt="" />
          </div>
          <div className=" max-w-xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">Masaru Digital Marketing</h1>
            <p className="text-lg sm:text-xl text-white">
              บริษัทประกอบกิจการเกี่ยวกับ E-commerce และคลังสินค้าฟูลฟิวเม้นท์ รวมถึงทำธุรกิจในรูปแบบ Digital Marketing บนแพลตฟอร์มออนไลน์
              เช่น <span className="text-[#D93327]">Facebook</span> <span className="text-[#D93327]">Lazada</span>{" "}
              <span className="text-[#D93327]">Shopee</span> <span className="text-[#D93327]">JD Central</span> และ <span className="text-[#D93327]">Tiktok</span>
            </p>
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------------------------------------------------- */}
    </Layout>
  );
};

export default Home;
