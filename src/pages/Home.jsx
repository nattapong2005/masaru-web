import React from "react";
import Layout from "./../components/Layout";
import * as LucideIcons from "lucide-react";
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
              <LucideIcons.BookOpenText /> อ่านเพิ่มเติม
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 ">
          <img src="./img/home/1.png" />
        </div>
      </section>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Info -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto p-10 mb-20 mt-0 lg:mt-16">
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
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {services.services.map((s, index) => {
              const IconComponent = LucideIcons[s.icon];
              return (
                <div
                  key={index}
                  className="group relative max-w-md sm:max-w-xs p-10 rounded-lg border-2 cursor-pointer border-red-700 hover:shadow-lg transform transition-all duration-300 "
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#D93327] to-transparent transition-all duration-500 group-hover:h-full z-0"></div>
                  <div className="relative z-10">
                    <h1 className="text-white flex flex-col gap-2 text-2xl font-bold items-left">
                      {IconComponent && <IconComponent className="text-[#D93327]" size={60} />}
                      {s.name}
                    </h1>
                    <div className="text-white mt-2">
                      <h2>{s.description}</h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Our Service -------------------------------------------------------------------------------------------------- */}

      {/* Register  -------------------------------------------------------------------------------------------------- */}
      <section className="bg-[url('./img/home/test.jpg')] bg-cover bg-center py-32 mb-10 mt-10 sm:mt-10 md:mt-10 lg:mt-40">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold text-center">พร้อมที่จะเติบโตธุรกิจของคุณหรือยัง</h1>
        <div className="flex flex-col justify-center items-center mt-2">
          <h2 className="max-w-xl text-md sm:text-lg px-5 sm:px-0">
            ติดต่อเราวันนี้เพื่อคำแนะนำจากผู้เชี่ยวชาญด้าน E-commerce และ Digital Marketing หรือเรียนรู้วิธีการขยายธุรกิจของคุณทางออนไลน์
          </h2>
          <button className="mt-7 flex gap-2 text-white py-2.5 px-8 rounded-lg bg-[#D93327] cursor-pointer hover:bg-red-600">
            <LucideIcons.Headset /> ติดต่อเรา
          </button>
        </div>
      </section>
      {/* Register  -------------------------------------------------------------------------------------------------- */}

      {/* Why us  -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto mt-10 sm:mt-10 md:mt-10 lg:mt-40 mb-5">
        <h1 className="text-white text-2xl sm:text-4xl font-bold text-center">
          ทำไมต้องเลือก <span className="text-[#D93327] ">MASARU</span>
        </h1>
        <div className="flex justify-center px-5 sm:px-0">
          <div className="flex flex-col justify-center">
            <p className="text-white text-lg mt-2 px-3 sm:px-0">
              MASARU คือผู้เชี่ยวชาญด้านการตลาดและสื่อสารออนไลน์ครบวงจร เราช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง
            </p>
            <div className="flex justify-center">
              <div className="flex flex-col gap-y-2 mt-7">
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.CircleCheckBig size={30} className="text-[#D93327]" /> ผลิตสื่อคอนเทนต์ดึงดูดลูกค้า
                </h1>
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.ShoppingCart size={30} className="text-[#D93327]" /> วางกลยุทธ์ E-commerce อย่างมืออาชีพ
                </h1>
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.Palette size={30} className="text-[#D93327]" /> ออกแบบกราฟิกให้โดดเด่น
                </h1>
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.Megaphone size={30} className="text-[#D93327]" /> การตลาดโซเชียลมีเดียครบวงจร
                </h1>
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.Store size={30} className="text-[#D93327]" /> ดูแลร้านค้าออนไลน์ Shopee / Lazada / Titok
                </h1>
                <h1 className="text-white flex gap-2 text-lg">
                  <LucideIcons.Shield size={30} className="text-[#D93327]" /> พาร์ทเนอร์ด้านการตลาดที่คุณวางใจ
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why us  -------------------------------------------------------------------------------------------------- */}

      {/* Join Us -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto mt-10 sm:mt-10 md:mt-10 lg:mt-40">
        <h1 className="text-2xl sm:text-4xl text-white font-bold text-center">ร่วมงานกับเรา</h1>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <p className="max-w-md sm:max-w-2xl text-lg text-white mt-2 mb-2 px-5 sm:px-0">
              เป็นส่วนหนึ่งของทีมที่มุ่งมั่นในการพัฒนาผลิตภัณฑ์และบริการที่ตอบโจทย์ลูกค้า เราให้ความสำคัญกับการพัฒนาศักยภาพของพนักงานทุกคน
              มีโอกาสเรียนรู้และเติบโตในสายอาชีพที่คุณรัก พร้อมด้วยสวัสดิการที่ครบครัน
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex gap-2 items-center cursor-pointer bg-[#D93327] hover:bg-red-500 transition px-10 py-3 rounded-lg  text-white mt-4 shadow-lg text-lg">
            <LucideIcons.PencilLine /> สมัครงาน
          </button>
        </div>
      </section>
      {/* Join Us -------------------------------------------------------------------------------------------------- */}
    </Layout>
  );
};

export default Home;
