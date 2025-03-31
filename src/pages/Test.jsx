import { User, Calendar, Heart, Phone, Mail, MapPin, Briefcase, DollarSign, FileText, AlertCircle } from "lucide-react";

export default function Test() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-5xl w-full border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-8 w-8 text-red-500" />
            <h1 className="text-3xl font-bold text-gray-700">แบบฟอร์มสมัครงาน</h1>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-red-400 to-red-200 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="thaiName" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <User className="h-5 w-5 text-red-500" />
                ชื่อ-นามสกุล (ไทย)
              </label>
              <input
                type="text"
                id="thaiName"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกชื่อ-นามสกุล ไทย"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="englishName" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <User className="h-5 w-5 text-red-500" />
                ชื่อ-นามสกุล (อังกฤษ)
              </label>
              <input
                type="text"
                id="englishName"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกชื่อ-นามสกุล อังกฤษ"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <User className="h-5 w-5 text-red-500" />
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

            <div className="mb-4">
              <label htmlFor="birthdate" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Calendar className="h-5 w-5 text-red-500" />
                วันเกิด
              </label>
              <input
                type="date"
                id="birthdate"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Calendar className="h-5 w-5 text-red-500" />
                อายุ
              </label>
              <input
                type="number"
                id="age"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกอายุ"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="medicalConditions" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Heart className="h-5 w-5 text-red-500" />
                โรคประจำตัว
              </label>
              <input
                type="text"
                id="medicalConditions"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกโรคประจำตัว"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Phone className="h-5 w-5 text-red-500" />
                เบอร์โทร
              </label>
              <input
                type="tel"
                id="phone"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกเบอร์โทร"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Mail className="h-5 w-5 text-red-500" />
                อีเมล
              </label>
              <input
                type="email"
                id="email"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกอีเมล"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <MapPin className="h-5 w-5 text-red-500" />
                ที่อยู่
              </label>
              <input
                id="address"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกที่อยู่"
                rows={3}
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="position" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <Briefcase className="h-5 w-5 text-red-500" />
                ตำแหน่งที่สนใจ
              </label>
              <input
                type="text"
                id="position"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกตำแหน่งที่สนใจ"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <DollarSign className="h-5 w-5 text-red-500" />
                เงินเดือนที่ต้องการ
              </label>
              <input
                type="text"
                id="salary"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกจำนวนเงินเดือน"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="resume" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <FileText className="h-5 w-5 text-red-500" />
                ไฟล์เรซูเม่
              </label>
              <input
                type="file"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="mb-4 sm:col-span-2">
              <label htmlFor="criminalRecord" className="flex items-center gap-2 text-lg font-medium text-gray-700 mb-2">
                <AlertCircle className="h-5 w-5 text-red-500" />
                ประวัติอาชญากรรม (หากมี)
              </label>
              <textarea
                id="criminalRecord"
                className="border-b-2 border-red-300 p-3 w-full rounded-sm focus:border-red-500 focus:outline-none transition-colors"
                placeholder="กรอกประวัติอาชญากรรม (ถ้ามี)"
                rows={1}
              ></textarea>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold w-full py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition duration-300 cursor-pointer shadow-lg flex items-center justify-center gap-2">
              <Briefcase className="h-5 w-5" />
              สมัครตอนนี้
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-4">ข้อมูลของท่านจะถูกเก็บเป็นความลับตามนโยบายความเป็นส่วนตัวของบริษัท</p>
        </div>
      </div>
    </section>
  );
}
