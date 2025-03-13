import React from "react";
import * as LucideIcons from "lucide-react";

const Footer = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16 mt-16 text-white">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-10">
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold text-xl">MASARU MARKETING</h1>
          <h1>Digital Marketing, E-commerce และคลังสินค้าฟูลฟิวเม้นทครบวงจร</h1>
        </div>
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold text-xl">เมนู</h1>
          <div className="mt-2">
            <div>- หน้าหลัก</div>
            <div>- เกี่ยวกับ</div>
            <div>- ติดต่อเรา</div>
          </div>
        </div>
        <div className="flex flex-col text-sm sm:text-lg md:text-lg">
          <h1 className="font-bold">ช่องทางการติดต่อ</h1>
          <img
            className="w-1/2 sm:w-1/4 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPyRgrNmdWW5YWaengnNR9i1OPTgQlmu2SA&s"
            alt="contact"
          />
        </div>
      </div>

      <div className="container mx-auto">
        <hr className="mt-10 mb-10" />
      </div>

      <div className="flex justify-center items-center text-sm sm:text-lg md:text-lg lg:text-lg gap-2">
        <p className="flex gap-2 font-bold">
          <LucideIcons.Copyright /> Copyright 2025 Masaru Marketing All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
