import React from "react";
import * as LucideIcons from "lucide-react";

const Test = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-10 lg:py-20">
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 items-center">
          {/* Image container - full width on mobile, responsive on larger screens */}
          <div className="w-full md:w-5/12 mb-8 md:mb-0">
            <img src="./img/home/whyus.jpg" className="w-full max-w-md mx-auto rounded-lg shadow-lg" alt="MASARU" />
          </div>

          {/* Content container - full width on mobile, responsive on larger screens */}
          <div className="w-full md:w-7/12">
            <div className="flex flex-col gap-y-4">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center md:text-left">
                ทำไมต้องเลือก <span className="text-[#D93327]">MASARU</span>
              </h1>
              <p className="text-white text-base lg:text-lg mt-2">
                MASARU คือผู้เชี่ยวชาญด้านการตลาดและสื่อสารออนไลน์ครบวงจร เราช่วยให้ธุรกิจของคุณเติบโตได้อย่างมั่นคง
              </p>
              
              {/* Features list */}
              <div className="mt-4 space-y-3">
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.CircleCheckBig size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>ผลิตสื่อคอนเทนต์ดึงดูดลูกค้า</span>
                </div>
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.ShoppingCart size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>วางกลยุทธ์ E-commerce อย่างมืออาชีพ</span>
                </div>
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.Palette size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>ออกแบบกราฟิกให้โดดเด่น</span>
                </div>
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.Megaphone size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>การตลาดโซเชียลมีเดียครบวงจร</span>
                </div>
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.Store size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>ดูแลร้านค้าออนไลน์ Shopee / Lazada / Titok</span>
                </div>
                <div className="text-white flex items-center gap-2 text-base lg:text-lg">
                  <LucideIcons.Shield size={24} className="text-[#D93327] flex-shrink-0" /> 
                  <span>พาร์ทเนอร์ด้านการตลาดที่คุณวางใจ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;