import React from "react";
import Layout from "./../components/Layout";
import * as LucideIcons from "lucide-react";
import services from "../data/utils.json";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <Layout>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}
      <section
        className="relative flex items-center  bg-cover bg-center h-screen "
        style={{ backgroundImage: "url('./img/home/header-bg.jpg')" }}
      >
        {/* เบลอเฉพาะแทบซ้าย (Responsive) */}
        <div className="absolute top-0 left-0 h-full w-full sm:w-1/2 md:w-[600px] lg:w-[880px] backdrop-blur-xs bg-white/10"></div>

        {/* คอนเทนต์ด้านซ้าย */}
        <div className="relative z-10 mb-14 lg:mb-0 w-full sm:w-3/4 lg:w-1/2 text-white text-center sm:text-left px-4 md:px-32">
          <h1 className="max-w-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg">
            MASARU MARKETING
          </h1>
          <p className="text-xl sm:text-2xl mt-2 lg:max-w-md drop-shadow-lg">Digital Marketing E-commerce</p>
          <p className="text-xl sm:text-2xl lg:max-w-md drop-shadow-lg">และคลังสินค้าฟูลฟิลเมนต์ครบวงจร</p>

          {/* ปุ่ม CTA */}
          <div className="flex justify-center sm:justify-start mt-6 gap-2">
            <button className="flex items-center gap-2 cursor-pointer bg-[#D93327] hover:bg-red-500 transition px-8 sm:px-10 py-3 rounded-full text-white text-lg shadow-lg">
              <LucideIcons.BookOpenText /> อ่านเพิ่มเติม
            </button>
            <NavLink to={"/contact"} className="flex items-center gap-2 cursor-pointer border-2 hover:border-black hover:bg-black transition px-8 sm:px-10 py-3 rounded-full text-white text-lg shadow-lg">
              <LucideIcons.Phone /> ติดต่อเรา
            </NavLink>
          </div>
        </div>
      </section>

      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Info -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto p-10 mb-20 mt-0 lg:mt-16">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-10">
          <div data-aos="fade-up" data-aos-delay="50" className="w-full sm:w-[555px]">
            <img className="rounded-xl" src="./img/home/info.jpg" alt="" />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">Masaru Marketing</h1>
            <p className="text-sm sm:text-lg text-white">
              บริษัทประกอบกิจการเกี่ยวกับ E-commerce และคลังสินค้าฟูลฟิวเม้นท์ <br></br>รวมถึงทำธุรกิจในรูปแบบ Digital Marketing
              บนแพลตฟอร์มออนไลน์
              <br></br>เช่น Facebook Lazada Shopee JD Central และ Tiktok
            </p>
          </div>
        </div>
      </section>
      {/* Info -------------------------------------------------------------------------------------------------- */}

      {/* Our Service -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto">
        <div className="flex justify-center">
          <div data-aos="fade-up" data-aos-delay="50" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
            {services.services.map((s, index) => {
              const IconComponent = LucideIcons[s.icon];
              return (
                <div
                  key={index}
                  className="group relative max-w-md sm:max-w-xs p-10 rounded-lg border-2 cursor-pointer border-red-700 shadow-lg shadow-red-800 transform transition-all duration-300"
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
        <h1 data-aos="fade-up" data-aos-delay="50" className="text-black text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center">
          พร้อมที่จะเติบโตธุรกิจของคุณหรือยัง
        </h1>
        <div data-aos="fade-up" data-aos-delay="50" className="flex flex-col justify-center items-center mt-2">
          <h2 className="max-w-xl text-center text-md sm:text-lg px-5 sm:px-0">
            ติดต่อเราวันนี้เพื่อคำแนะนำจากผู้เชี่ยวชาญด้าน E-commerce และ Digital Marketing หรือเรียนรู้วิธีการขยายธุรกิจของคุณทางออนไลน์
          </h2>
          <button className="mt-7 flex gap-2 text-white py-2.5 px-8 rounded-full bg-[#D93327] cursor-pointer hover:bg-red-600">
            <LucideIcons.Headset /> ติดต่อเรา
          </button>
        </div>
      </section>
      {/* Register  -------------------------------------------------------------------------------------------------- */}

      {/* Why us  -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto p-10 mb-20 mt-0 lg:mt-16">
        <div className="flex flex-wrap  sm:flex-nowrap items-center justify-center gap-10">
          <div data-aos="fade-up" data-aos-delay="50" className="w-full sm:w-[555px]">
            <img className="rounded-xl" src="./img/home/whyus.jpg" alt="" />
          </div>
          <div data-aos="fade-up" data-aos-delay="50" className=" max-w-xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">
              ทำไมต้องเลือก <span className="text-[#D93327] font-black">MASARU</span>
            </h1>
            <p className="text-white text-sm sm:text-lg">
              MASARU คือผู้เชี่ยวชาญด้านการตลาดและสื่อสารออนไลน์ครบวงจร <br />
              เราช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง
            </p>
            <div className="space-y-3 mt-2">
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.CircleCheckBig size={24} className="text-[#D93327]" /> ผลิตสื่อคอนเทนต์ดึงดูดลูกค้า
              </h1>
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.ShoppingCart size={24} className="text-[#D93327]" /> วางกลยุทธ์ E-commerce อย่างมืออาชีพ
              </h1>
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.Palette size={24} className="text-[#D93327]" /> ออกแบบกราฟิกให้โดดเด่น
              </h1>
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.Megaphone size={24} className="text-[#D93327]" /> การตลาดโซเชียลมีเดียครบวงจร
              </h1>
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.Store size={24} className="text-[#D93327]" /> ดูแลร้านค้าออนไลน์ Shopee / Lazada / Titok
              </h1>
              <h1 className="text-white flex gap-2 text-lg">
                <LucideIcons.Shield size={24} className="text-[#D93327]" /> พาร์ทเนอร์ด้านการตลาดที่คุณวางใจ
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Why us -------------------------------------------------------------------------------------------------- */}

      {/* Count Up  -------------------------------------------------------------------------------------------------- */}
      <section ref={ref} className="border-2 border-[#D93327] py-20 text-center mt-10 sm:mt-10 md:mt-10 lg:mt-40">
        <div className="flex justify-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-36 gap-y-10 ">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-black text-red-600">
                {inView ? <CountUp start={0} end={45} duration={1.5} suffix="+" /> : "0"}
              </h1>
              <p className="text-lg text-white">โครงการที่สำเร็จ</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-black text-red-600">
                {inView ? <CountUp start={0} end={20} duration={1.5} suffix="%" /> : "0"}
              </h1>
              <p className="text-lg text-white">การเติบโตของธุรกิจ</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-black text-red-600">
                {inView ? <CountUp start={0} end={90} duration={1.5} suffix="%" /> : "0"}
              </h1>
              <p className="text-lg text-white">ความสุขพนักงาน</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-black text-red-600">
                {inView ? <CountUp start={0} end={30} duration={1.5} suffix="+" /> : "0"}
              </h1>
              <p className="text-lg text-white">หลักสูตรต่อปี</p>
            </div>
          </div>
        </div>
      </section>
      {/* Count Up  -------------------------------------------------------------------------------------------------- */}

      {/* Join Us -------------------------------------------------------------------------------------------------- */}
      <section data-aos="fade-up" data-aos-delay="50" className="container mx-auto mt-10 sm:mt-10 md:mt-10 lg:mt-40">
        <h1 className="text-2xl sm:text-4xl text-white font-bold text-center">ร่วมงานกับเรา</h1>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <p className="max-w-md sm:max-w-4xl text-lg text-white text-center mt-2 mb-2 px-5 sm:px-0">
              เป็นส่วนหนึ่งของทีมที่มุ่งมั่นในการพัฒนาผลิตภัณฑ์และบริการที่ตอบโจทย์ลูกค้า เราให้ความสำคัญกับการพัฒนาศักยภาพของพนักงานทุกคน
              มีโอกาสเรียนรู้และเติบโตในสายอาชีพที่คุณรัก พร้อมด้วยสวัสดิการที่ครบครัน
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="flex gap-2 items-center cursor-pointer bg-[#D93327] hover:bg-red-500 transition px-8 py-2.5 rounded-full  text-white mt-4 shadow-lg text-lg">
            <LucideIcons.PencilLine /> สมัครงาน
          </button>
        </div>
      </section>
      {/* Join Us -------------------------------------------------------------------------------------------------- */}
    </Layout>
  );
};

export default Home;
