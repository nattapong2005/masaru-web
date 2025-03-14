import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}
      <section id="home" className="py-48 bg-[#D93327]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">About Us</h2>
          <p className="text-lg text-white">หน้าหลัก / เกี่ยวกับ</p>
        </div>
      </section>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}

      {/* Vision -----------------------------------------------------------------------------------------------*/}
      <section className="container mx-auto p-10 mb-20 mt-0 lg:mt-16">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-5">
          <div className="w-full sm:w-[555px]">
            <img className="rounded-xl" src="./img/about/head.jpg" alt="" />
          </div>
          <div className=" max-w-xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl text-white font-black mb-2">วิสัยทัศน์องค์กร</h1>
            <p className="text-lg sm:text-xl text-white">
              เติมโตในยุคดิจิทัลคอนเทนต์สร้างสรรค์
              ใช้นวัตกรรมใหม่เพื่อเพิ่มมูลค่าแบรนด์เข้าถึงกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพโดยมุ่งเน้นการดำเนินกิจการให้เติบโตได้อย่างยั่งยืน
            </p>
          </div>
        </div>
      </section>
      {/* Vision -----------------------------------------------------------------------------------------------*/}
    </Layout>
  );
};

export default About;
