import React, { useState } from "react";
import Layout from "../components/Layout";
import * as LucideIcons from "lucide-react";
import welfareData from "../data/utils.json";
import axios from "axios";
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
      <div className="border border-white/10 rounded-lg overflow-hidden">
        <button
          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer ${
            isExpanded ? "bg-[#D93327]/20" : "bg-white/5 hover:bg-white/10"
          }`}
          onClick={() => toggleCategory(index)}
        >
          <div className="flex items-center gap-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0 p-4 bg-white/5">
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
    navigate("/");
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("file", formData.file);

    try {
      const res = await axios.post(
        "https://script.google.com/macros/s/AKfycbxPG2e4woi2WiV5IfxQTc58-HJ8C2oWkyqweBApgwsl-sKZT8WNycqTPTlDtRAytXc/exec",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      {/* Hero Section -------------------------------------------------------------------------------------------------- */}
      <section className="relative min-h-screen bg-[url('./img/apply/a.jpg')] bg-center bg-cover flex items-center">
        {/* Overlay ทำให้ภาพจางลง */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold  mb-3">ร่วมงานกับเรา</h1>
              <p className="text-base md:text-lg text-gray-200 mb-5">
                เราใส่ใจในการพัฒนาและยกระดับคุณภาพชีวิตของบุคลากร <br></br> พร้อมสร้างสภาพแวดล้อมที่เต็มไปด้วยโอกาส และความท้าทาย
                <br></br>เพื่อให้ทุกคนเติบโตไปพร้อมกับธุรกิจ ที่ขับเคลื่อนด้วยนวัตกรรมและความร่วมมือ
              </p>
              <a
                href="#apply"
                className="text-white px-6 w-fit py-3 rounded-full cursor-pointer font-semibold hover:opacity-90 transition flex gap-2"
                style={{ backgroundColor: "#D93327" }}
              >
                <LucideIcons.ClipboardPlus /> สมัครตอนนี้
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section -------------------------------------------------------------------------------------------------- */}

      {/* Welfare section -------------------------------------------------------------------------------------------------- */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 data-aos="fade-up" data-aos-delay="50" className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10 text-white">
            สวัสดิการสำหรับพนักงาน <span className="text-[#D93327]">MASARU</span>
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
      <section  data-aos="fade-up" data-aos-delay="50" className="w-full mt-10 mb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">ขั้นตอนการสมัครงาน</h2>
            <p className="mt-2 text-white mb-16">ทำความเข้าใจกระบวนการสมัครงานของเราได้ง่ายๆ ด้วย 3 ขั้นตอนต่อไปนี้</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center sm:text-left">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-primary text-red-500">
                  <LucideIcons.FileText className="h-6 w-6" />
                </div>
                <div className="absolute top-1/2 left-[calc(50%+35px)] h-[2px] w-[calc(50%-35px)] hidden md:block bg-muted-foreground/30" />
              </div>
              <h3 className="text-lg font-medium text-white">กรอกใบสมัคร</h3>
              <p className="mt-1 text-sm text-gray-400">กรอกข้อมูลส่วนตัว และทักษะความสามารถให้ครบถ้วน</p>
            </div>
            <div className="flex flex-col items-center text-center sm:text-left">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-foreground/30 text-red-500">
                  <LucideIcons.Send className="h-6 w-6" />
                </div>
                <div className="absolute top-1/2 left-[calc(50%+35px)] h-[2px] w-[calc(50%-35px)] hidden md:block bg-muted-foreground/30" />
              </div>
              <h3 className="text-lg font-medium text-white">ส่งใบสมัครและรอการตอบกลับ</h3>
              <p className="mt-1 text-sm text-gray-400">ตรวจสอบข้อมูลให้ถูกต้อง กดส่งใบสมัคร และรอทีมงานของเราตรวจสอบคุณสมบัติ</p>
            </div>
            <div className="flex flex-col items-center text-center sm:text-left">
              <div className="relative mb-4 flex w-full justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-foreground/30 text-red-500">
                  <LucideIcons.MessageSquare className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-medium text-white">สัมภาษณ์และประกาศผล</h3>
              <p className="mt-1 text-sm text-gray-400">หากผ่านการคัดกรอง คุณจะได้รับการติดต่อเพื่อนัดสัมภาษณ์</p>
            </div>
          </div>
        </div>
      </section>
      {/* Apply step section -------------------------------------------------------------------------------------------------- */}
    </Layout>
  );
};

export default Apply;
