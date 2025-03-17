import React from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section -----------------------------------------------------------------------------------------------*/}
      <section id="home" className="py-48 bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(/img/about/2.jpg)]">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-2 text-white">About Us</h2>
          <p className="text-lg text-white">หน้าหลัก / เกี่ยวกับ</p>
        </div>
      </section>

      {/* Hero Section -----------------------------------------------------------------------------------------------*/}

      {/* Vision -----------------------------------------------------------------------------------------------*/}
      <section className="container mx-auto p-5 sm:p-10 mb-10 sm:mb-20 mt-0 lg:mt-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* รูปภาพ */}
          <div className="w-full sm:w-1/2">
            <img className="rounded-xl w-full h-auto object-cover" src="./img/about/head.jpg" alt="about" />
          </div>

          {/* เนื้อหา */}
          <div className="w-full sm:w-1/2 max-w-xl text-center sm:text-left space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-black">วิสัยทัศน์องค์กร</h1>
            <p className="text-lg sm:text-lg lg:text-xl text-white leading-relaxed">
              เติบโตในยุคดิจิทัลคอนเทนต์ที่สร้างสรรค์ ใช้นวัตกรรมใหม่<br></br>เพื่อเพิ่มมูลค่าแบรนด์
              เข้าถึงกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพ โดยมุ่งเน้นการดำเนินกิจการให้เติบโตได้อย่างยั่งยืน
            </p>

            {/* ข้อความไอคอน */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">วางแผนการตลาด เพิ่มโอกาสและศักยภาพการเติบโต</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">ใช้ข้อมูลแม่นยำ ตอบโจทย์กลุ่มเป้าหมายชัดเจน</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">วิเคราะห์ข้อมูลเชิงลึกด้วยเทคโนโลยีล้ำสมัย</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">ดำเนินงานรวดเร็ว ด้วยแนวทางที่มีประสิทธิภาพ</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">ให้คำปรึกษาจากทีมงานมืออาชีพ</span>
              </li>
              <li className="flex items-start gap-2">
                <LucideIcons.BadgeCheck className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-white text-sm sm:text-lg">อัพเดทข่าวสารการตลาดออนไลน์ล่าสุด</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision -----------------------------------------------------------------------------------------------*/}

      <section className="container mx-auto">
        <div className="lead">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white text-center py-32">" เราอยากให้ลูกค้าประสบความสำเร็จสูงสุด "</h1>
        </div>
      </section>
    </Layout>
  );
};

export default About;
