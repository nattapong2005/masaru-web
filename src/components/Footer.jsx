import React from "react";
import {  Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/3">
            <div className="flex items-center mb-4">
              <img src="./img/logo.png" alt="MASARU MARKETING Logo" className="h-20 mr-3" />
            </div>
            <p className="text-white mb-4">Digital Marketing, E-commerce และคลังสินค้าฟูลฟิวเม้นทครบวงจร</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4 text-[#D93327]">เมนู</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-[#D93327]">
                  หน้าหลัก
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#D93327]">
                  เกี่ยวกับ
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-[#D93327]">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 text-[#D93327]">ช่องทางการติดต่อ</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-white" />
                <span className="text-white">092-765-9777</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-white" />
                <span className="text-white">hr.likeshop@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-white" />
                <span className="text-white">475/4-5 ถ.ทหารบก ตำบลบ่อพลับ อำเภอเมืองนครปฐม จังหวัดนครปฐม 73000</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white mb-10 mt-10" />
        <div className=" mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-white text-md mb-4 md:mb-0">© {new Date().getFullYear()} MASARU MARKETING. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
