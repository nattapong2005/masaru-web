import React from 'react'

const ApplyForm = () => {
  return (
        <section className="p-5" id="apply">
        <h1 data-aos="fade-up" data-aos-delay="50"  className=" text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 ">สมัครร่วมทีมกับเรา</h1>
        <div data-aos="fade-up" data-aos-delay="50"  className=" px-4 py-8 flex justify-center items-center">
          <form className="p-10 rounded-xl w-full max-w-4xl shadow-lg bg-gray-950" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-lg mb-2">
                ชื่อ
              </label>
              <input
                required
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                placeholder="กรุณากรอกชื่อ"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-lg mb-2">
                อีเมล
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="กรุณากรอกอีเมล"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-lg mb-2">
                ช่องทางการติดต่อ
              </label>
              <textarea
                required
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="กรุณากรอกช่องทางการติดต่อ"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D93327] text-white px-4 py-3 rounded-full hover:bg-red-700  transition duration-300"
            >
              ส่งใบสมัคร
            </button>
          </form>
        </div>
      </section>
  )
}

export default ApplyForm
