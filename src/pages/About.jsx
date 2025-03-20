import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <Layout>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}
      <section
        id="home"
        className="py-48 bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/img/about/header.jpg)]"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-2 text-white">About Us</h2>
          <p className="text-lg text-white">หน้าหลัก / เกี่ยวกับ</p>
        </div>
      </section>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}

      {/* Vision -----------------------------------------------------------------------------------------------*/}
          <section className="container mx-auto p-10 mb-20 mt-0 lg:mt-16">
             <div className="flex flex-wrap  sm:flex-nowrap items-center justify-center gap-10">
               <div data-aos="fade-up" data-aos-delay="50" className="w-full sm:w-[555px]">
                 <img className="rounded-xl" src="./img/about/head.jpg" alt="" />
               </div>
               <div data-aos="fade-up" data-aos-delay="50"className=" max-w-xl text-center sm:text-left">
                 <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">
                   วิสัยทัศน์องค์กร
                 </h1>
                 <p className="text-white text-sm sm:text-lg">
                   MASARU คือผู้เชี่ยวชาญด้านการตลาดและสื่อสารออนไลน์ครบวงจร <br />
                   เราช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง
                 </p>
                 <div className="space-y-3 mt-2">
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> วางแผนการตลาด เพิ่มโอกาสและศักยภาพการเติบโต
                   </h1>
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> ใช้ข้อมูลแม่นยำ ตอบโจทย์กลุ่มเป้าหมายชัดเจน
                   </h1>
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> วิเคราะห์ข้อมูลเชิงลึกด้วยเทคโนโลยีล้ำสมัย
                   </h1>
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> ดำเนินงานรวดเร็ว ด้วยแนวทางที่มีประสิทธิภาพ
                   </h1>
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> ให้คำปรึกษาจากทีมงานมืออาชีพ
                   </h1>
                   <h1 className="text-white flex gap-2 text-lg">
                     <LucideIcons.BadgeCheck size={24} className="text-[#D93327]" /> อัพเดทข่าวสารการตลาดออนไลน์ล่าสุด
                   </h1>
                 </div>
               </div>
             </div>
           </section>

      {/* Vision -----------------------------------------------------------------------------------------------*/}

      {/* Image -----------------------------------------------------------------------------------------------*/}
      <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(/img/about/b.jpg)] bg-cover bg-center py-32 mt-10 mb-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white text-center font-bold">
          <Typewriter words={[' " เราอยากให้ลูกค้าประสบความสำเร็จสูงสุด " ']} loop={0} typeSpeed={150} cursor={true} />
        </h1>
      </section>
      {/* Image -----------------------------------------------------------------------------------------------*/}

      {/* Quote -----------------------------------------------------------------------------------------------*/}
      <section className="container mx-auto mt-20 mb-20">
        <h1 className="text-white font-bold text-4xl text-center">เสาหลักบริษัท</h1>
        <div className="flex justify-center mt-5 p-5">
          <img data-aos="fade-up" data-aos-delay="50"  src="./img/about/4.jpg" className="w-[35rem] rounded-xl" />
        </div>
      </section>
      {/* Quote -----------------------------------------------------------------------------------------------*/}
    </Layout>
  );
};

export default About;
