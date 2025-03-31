import React, { useState } from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";
import welfareData from "../data/utils.json";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", file: null });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const Category = ({ category, index, toggleCategory, isExpanded }) => {
    const IconComponent = LucideIcons[category.icon];
    return (
      <div className="border border-white/10 rounded-lg overflow-hidden ">
        <button
          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer ${
            isExpanded ? "bg-[#D93327]/20" : "bg-white/5 hover:bg-white/10"
          }`}
          onClick={() => toggleCategory(index)}
        >
          <div className="flex items-center gap-3 ">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#D93327]/10">
              {/* <Icon className="text-[#D93327]" size={24} /> */}
              {IconComponent && <IconComponent className="text-[#D93327]" size={24} />}
            </div>
            <h2 className="font-medium text-white">{category.name}</h2>
          </div>
          {isExpanded ? (
            <LucideIcons.ChevronUp className="h-5 w-5 text-[#D93327]" />
          ) : (
            <LucideIcons.ChevronDown className="h-5 w-5 text-gray-400" />
          )}
        </button>

        {isExpanded && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0 p-4 bg-white/5 ">
            {category.items.map((item, idx) => (
              <CategoryItem key={idx} item={item} />
            ))}
          </div>
        )}
      </div>
    );
  };
  const CategoryItem = ({ item }) => (
    <div className="py-2 px-2">
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 rounded-full bg-[#D93327]" />
        <div>
          <span className="text-sm font-medium text-white">{item.name}</span>
          {item.description && <span className="text-xs text-gray-400 ml-2">({item.description})</span>}
        </div>
      </div>
    </div>
  );

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("ส่งข้อมูลเรียบร้อย");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   alert("ส่งข้อมูลเรียบร้อย");
  //   navigate("/");
  //   const form = new FormData();
  //   form.append("name", formData.name);
  //   form.append("email", formData.email);
  //   form.append("message", formData.message);
  //   form.append("file", formData.file);

  //   try {
  //     const res = await axios.post(
  //       "https://script.google.com/macros/s/AKfycbxPG2e4woi2WiV5IfxQTc58-HJ8C2oWkyqweBApgwsl-sKZT8WNycqTPTlDtRAytXc/exec",
  //       form,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <Layout>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}
      <section className="relative min-h-screen bg-[url('./img/apply/header.jpg')] bg-center bg-cover flex items-center">
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="text-white max-w-2xl text-center sm:text-left">
              <h1 className="text-5xl font-extrabold mb-3">ร่วมงานกับเรา</h1>
              <p className="text-sm md:text-lg text-gray-200 mb-5">
                เราใส่ใจในการพัฒนาและยกระดับคุณภาพชีวิตของบุคลากร <br></br> พร้อมสร้างสภาพแวดล้อมที่เต็มไปด้วยโอกาส และความท้าทาย
                <br></br>เพื่อให้ทุกคนเติบโตไปพร้อมกับธุรกิจ ที่ขับเคลื่อนด้วยนวัตกรรมและความร่วมมือ
              </p>
              <div className="flex justify-center sm:justify-start">
                <a
                  href="#apply"
                  className="text-white px-6 w-fit py-3 rounded-lg cursor-pointer font-semibold hover:opacity-90 transition flex gap-2 bg-[#D93327]"
                >
                  เริ่มกันเลย <LucideIcons.ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Welfare section -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 data-aos="fade-up" data-aos-delay="50" className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10 text-white">
            สวัสดิการสำหรับพนักงาน <span className="text-[#D93327] font-extrabold">MASARU</span>
          </h1>

          <div data-aos="fade-up" data-aos-delay="50" className="space-y-4">
            {welfareData.categories.map((category, index) => {
              const isExpanded = expandedCategory === index;
              return <Category key={index} category={category} index={index} toggleCategory={toggleCategory} isExpanded={isExpanded} />;
            })}
          </div>
        </div>
      </section>
      {/* Welfare section -------------------------------------------------------------------------------------------------- */}

      {/* Apply step section -------------------------------------------------------------------------------------------------- */}
      <section data-aos="fade-up" data-aos-delay="50" className="w-full mt-10 mb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">ขั้นตอนการสมัครงาน</h2>
            <p className="mt-2 text-white mb-16">ทำความเข้าใจกระบวนการสมัครงานของเราได้ง่ายๆ ด้วย 3 ขั้นตอนต่อไปนี้</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col text-center sm:text-left bg-white/10 p-8 rounded-lg border-4 border-b-[#D93327] cursor-pointer hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2  bg-primary text-[#D93327] bg-[#D93327]/30">
                  <LucideIcons.FileText className="h-6 w-6" />
                </div>
                <div className="absolute top-1/2 left-[calc(50%+35px)] h-[2px] w-[calc(50%-35px)] hidden md:block bg-muted-foreground/30" />
              </div>
              <h3 className="text-lg font-medium text-white mt-3">กรอกใบสมัคร</h3>
              <p className="mt-1 text-sm text-gray-400">กรอกข้อมูลส่วนตัว การศึกษา ตำแหน่งงาน และทักษะความสามารถให้ครบถ้วน </p>
            </div>
            <div className="flex flex-col text-center sm:text-left bg-white/10 p-8 rounded-lg border-4 border-b-[#D93327] cursor-pointer hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-[#D93327] bg-[#D93327]/30">
                  <LucideIcons.Send className="h-6 w-6" />
                </div>
                <div className="absolute top-1/2 left-[calc(50%+35px)] h-[2px] w-[calc(50%-35px)] hidden md:block bg-muted-foreground/30" />
              </div>
              <h3 className="text-lg font-medium text-white mt-3">ส่งใบสมัครและรอการตอบกลับ</h3>
              <p className="mt-1 text-sm text-gray-400">ตรวจสอบข้อมูลให้ถูกต้อง กดส่งใบสมัคร และรอทีมงานของเราตรวจสอบคุณสมบัติ</p>
            </div>
            <div className="flex flex-col text-center sm:text-left bg-white/10 p-8 rounded-lg border-4 border-b-[#D93327] cursor-pointer hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 text-[#D93327] bg-[#D93327]/30">
                  <LucideIcons.MessageSquare className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mt-3">สัมภาษณ์และประกาศผล</h3>
              <p className="mt-1 text-sm text-gray-400">หากผ่านการคัดกรอง คุณจะได้รับการติดต่อเพื่อนัดสัมภาษณ์</p>
            </div>
          </div>
        </div>
      </section>
      {/* Apply step section -------------------------------------------------------------------------------------------------- */}

      {/* Apply now section -------------------------------------------------------------------------------------------------- */}
      <section className="bg-gradient-to-r from-red-500 via-red-800 to-red-900 mt-16 mb-10">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-wrap justify-center sm:justify-between items-center">
            <div data-aos="fade-up" data-aos-delay="50" className="w-full sm:w-1/2 mb-8 sm:mb-0 hidden lg:block">
              <img src="./img/apply/women.png" className="w-full h-auto object-cover" />
            </div>
            <div data-aos="fade-up" data-aos-delay="50" className="w-full sm:w-1/2 text-center sm:text-left p-5 sm:p-0">
              <h1 className="text-white text-2xl sm:text-5xl font-bold leading-tight mb-2">พร้อมร่วมงานกับเราหรือยัง?</h1>
              {/* <p className="text-white text-sm sm:text-xl">มาร่วมเป็นส่วนหนึ่งในทีมที่มุ่งมั่นสร้างสรรค์สิ่งดี ๆ และเติบโตไปด้วยกัน</p> */}
              <p className="text-sm sm:text-xl text-white">
                <Typewriter words={['มาร่วมเป็นส่วนหนึ่งในทีมที่มุ่งมั่นสร้างสรรค์สิ่งดี ๆ และเติบโตไปด้วยกัน']} loop={0} typeSpeed={50} cursor={true} />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Apply step section -------------------------------------------------------------------------------------------------- */}

      {/* Form section -------------------------------------------------------------------------------------------------- */}
      <section id="apply" className="container mx-auto px-6 py-12">
        <div data-aos="fade-up" data-aos-delay="50" className="flex justify-center items-center min-h-screen">
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-5xl w-full border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <LucideIcons.Briefcase className="h-8 w-8 text-red-500" />
              <h1 className="text-xl sm:text-3xl font-bold text-gray-700">แบบฟอร์มสมัครงาน</h1>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-red-400 to-red-200 rounded-full mb-8"></div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ชื่อ-นามสกุล (ไทย) */}
                <div className="mb-4">
                  <label htmlFor="thaiName" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.User className="h-5 w-5 text-red-500" />
                    ชื่อ-นามสกุล (ไทย)
                  </label>
                  <input
                    type="text"
                    id="thaiName"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="กรอกชื่อ-นามสกุล ไทย"
                  />
                </div>

                {/* เพศ */}
                <div className="mb-4">
                  <label htmlFor="gender" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.User className="h-5 w-5 text-red-500" />
                    เพศ
                  </label>
                  <select
                    id="gender"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled selected>
                      เลือกเพศ
                    </option>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>

                {/* เบอร์โทร */}
                <div className="mb-4">
                  <label htmlFor="phone" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.Phone className="h-5 w-5 text-red-500" />
                    เบอร์โทร
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="กรอกเบอร์โทร"
                  />
                </div>

                {/* อีเมล */}
                <div className="mb-4">
                  <label htmlFor="email" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.Mail className="h-5 w-5 text-red-500" />
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="กรอกอีเมล"
                  />
                </div>

                {/* ตำแหน่งที่สนใจ */}
                <div className="mb-4">
                  <label htmlFor="position" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.Briefcase className="h-5 w-5 text-red-500" />
                    ตำแหน่งที่สนใจ
                  </label>
                  <select
                    id="gender"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors bg-white"
                  >
                    <option value="" disabled selected>
                      เลือกตำแหน่ง
                    </option>
                    <option value="IA">ตรวจสอบภายใน IA</option>
                    <option value="ผู้ช่วยผู้บริหาร">ผู้ช่วยผู้บริหาร</option>
                    <option value="เลขา">เลขา</option>
                    <option value="ไลฟ์สด">ไลฟ์สด</option>
                    <option value="การตลาด">การตลาด</option>
                    <option value="Sale Admin">Sale Admin</option>
                    <option value="Graphic">Graphic</option>
                    <option value="Content">Content</option>
                    <option value="ลูกค้าสัมพันธ์">ลูกค้าสัมพันธ์</option>
                    <option value="ประสานงาน">ประสานงาน</option>
                    <option value="จัดซื้อ">จัดซื้อ</option>
                    <option value="บัญชี">บัญชี</option>
                    <option value="บุคคล">บุคคล</option>
                    <option value="IT">IT</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                  </select>
                </div>

                {/* เงินเดือนที่ต้องการ */}
                <div className="mb-4">
                  <label htmlFor="salary" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.DollarSign className="h-5 w-5 text-red-500" />
                    เงินเดือนที่ต้องการ
                  </label>
                  <input
                    type="text"
                    id="salary"
                    className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="กรอกจำนวนเงินเดือน"
                  />
                </div>

                {/* ไฟล์เรซูเม่ */}
                <div className="mb-4 sm:col-span-2 relative">
                  <label htmlFor="resume" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                    <LucideIcons.FileText className="h-5 w-5 text-red-500" />
                    ไฟล์เรซูเม่
                  </label>
                  <div className="flex items-center relative">
                    <input
                      type="file"
                      id="resume"
                      className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors pr-10 cursor-pointer"
                    />
                    <LucideIcons.File className="text-red-500 absolute right-3" size={30} />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold w-full py-3 rounded-lg hover:from-red-600 hover:to-red-700 transition duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2"
                >
                  <LucideIcons.Briefcase className="h-5 w-5" />
                  สมัครตอนนี้
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-sm mt-4">ข้อมูลของท่านจะถูกเก็บเป็นความลับตามนโยบายความเป็นส่วนตัวของบริษัท</p>
          </div>
        </div>
      </section>
      {/* Form section -------------------------------------------------------------------------------------------------- */}
    </Layout>
  );
};

export default Apply;
