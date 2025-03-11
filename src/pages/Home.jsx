import React from "react";
import Layout from "./../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="container flex flex-wrap items-center justify-center mx-auto md:px-12 md:flex-grow mt-20 lg:mt-0">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.9rem] leading-none text-white font-extrabold font-sans text-center lg:text-5xl lg:text-left lg:leading-tight ">
            MASARU MARKETING
          </h1>
          <p className="max-w-xl text-xl text-center text-white lg:text-left lg:max-w-md">Digital Marketing E-commerce</p>
          <p className="max-w-xl text-xl text-center text-white lg:text-left lg:max-w-md">และคลังสินค้าฟูลฟิวเม้นท์ครบวงจร</p>
          <div className="flex justify-center mt-2 lg:justify-start">
            <button className="cursor-pointer bg-red-600 hover:bg-red-700 transition px-10 py-3 rounded-lg  text-white mt-4 shadow-lg">
              อ่านเพิ่มเติม
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 ">
          <img src="./img/home/1.png" />
        </div>
      </section>

      <section className="container mx-auto">
        <h1 className="text-xl text-white">TEST</h1>
      </section>
    </Layout>
  );
};

export default Home;
