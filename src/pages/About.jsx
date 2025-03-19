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
      <section className="container mx-auto p-5 sm:p-10 mb-10 sm:mb-20 mt-0 lg:mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div data-aos="fade-up" data-aos-duration="500" className="w-full sm:w-1/2">
            <img className="rounded-xl w-full h-auto object-cover" src="./img/about/head.jpg" alt="about" />
          </div>

          <div data-aos="fade-up" data-aos-duration="1000"  className="w-full sm:w-1/2 max-w-xl text-center sm:text-left space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-black">วิสัยทัศน์องค์กร</h1>
            <p className="text-lg sm:text-lg lg:text-xl text-white leading-relaxed">
              เติบโตในยุคดิจิทัลคอนเทนต์ที่สร้างสรรค์ ใช้นวัตกรรมใหม่<br></br>เพื่อเพิ่มมูลค่าแบรนด์
              เข้าถึงกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพ โดยมุ่งเน้นการดำเนินกิจการให้เติบโตได้อย่างยั่งยืน
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin ">วางแผนการตลาด เพิ่มโอกาสและศักยภาพการเติบโต</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin">ใช้ข้อมูลแม่นยำ ตอบโจทย์กลุ่มเป้าหมายชัดเจน</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin">วิเคราะห์ข้อมูลเชิงลึกด้วยเทคโนโลยีล้ำสมัย</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin">ดำเนินงานรวดเร็ว ด้วยแนวทางที่มีประสิทธิภาพ</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin">ให้คำปรึกษาจากทีมงานมืออาชีพ</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-[#D93327] flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg font-thin">อัพเดทข่าวสารการตลาดออนไลน์ล่าสุด</span>
              </li>
            </ul>
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
          <img data-aos="zoom-in" data-aos-duration="500"  src="./img/about/4.jpg" className="w-[35rem] rounded-xl" />
        </div>
      </section>
      {/* Quote -----------------------------------------------------------------------------------------------*/}
    </Layout>
  );
};

export default About;
