import { useState } from "react";
import toast from "react-hot-toast";
export default function SoftWeddingInvite() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const isComing = attendance === "yes";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          attendance,
          guest_count: attendance === "yes" ? guestCount : 0,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        toast.success("ممنون که حضورتون رو اعلام کردید");
        setIsOpen(false);
        setFullName("");
        setAttendance("");
        setGuestCount(1);
      } else {
        toast.error("خطا در ثبت فرم");;
        console.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("خطا در ثبت فرم");;
    }
  };

  return (
    <div className="invite-card flex items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-white p-6">
      <div className="perspective w-full max-w-2xl h-[600px] relative">
        <div
          className={`card-wrapper relative w-full h-full ${isOpen ? "open" : ""}`}
        >
          {/* جلد کارت */}
          <div className="card-face absolute w-full h-full bg-gradient-to-br from-pink-100 via-rose-100 to-rose-200 rounded-[40px] shadow-xl flex flex-col items-center justify-center text-rose-700">
            <div className="text-center space-y-6 px-10">
              <h2 className="text-3xl font-playfair tracking-wide drop-shadow-sm text-rose-800">
                دعوت‌نامه مراسم عروسی
              </h2>
              <p className="text-lg text-rose-600">
                با افتخار شما را به جشن آغاز زندگی مشترکمان دعوت می‌کنیم
              </p>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-6 px-8 py-3 bg-white text-rose-500 rounded-full shadow-md hover:bg-rose-50 hover:scale-105 transition duration-500"
              >
                باز کردن دعوت‌نامه
              </button>
            </div>
          </div>

          {/* داخل کارت */}
          <div className="card-face card-back absolute w-full h-full bg-white rounded-[40px] shadow-xl p-12 overflow-y-auto text-right">
            <h3 className="text-3xl font-playfair text-center text-rose-500 mb-10">
              فرم اعلام حضور
            </h3>

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <label>
                  میهمان عزیزمان <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="نام و نام خانوادگی"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border-b border-rose-200 focus:border-rose-400 outline-none py-2 transition bg-transparent"
                />
              </div>

              <div className="space-y-3 text-rose-600">
                <label>
                  آیا افتخار پذیرایی از شما خواهیم داشت؟{" "}
                  <span className="text-rose-400">*</span>
                </label>
                <label className="flex justify-end gap-3">
                  <span>در این روز زیبا کنارتان خواهیم بود</span>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    onChange={(e) => setAttendance(e.target.value)}
                    className="accent-rose-400"
                  />
                </label>
                <label className="flex justify-end gap-3">
                  <span>متاسفانه نمی‌توانیم همراهیتان کنیم</span>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    onChange={(e) => setAttendance(e.target.value)}
                    className="accent-rose-400"
                  />
                </label>
              </div>

              {isComing && (
                <div className="space-y-4 transition-all duration-500 text-rose-600">
                  <label>تعداد میهمانان</label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full accent-rose-400"
                  />
                  <div className="text-center text-xl font-playfair text-rose-500">
                    {guestCount} نفر
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 mt-6 rounded-full bg-gradient-to-r from-rose-300 to-pink-300 text-white shadow-md hover:scale-[1.03] transition duration-500"
              >
                ثبت تشریف فرمایی
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 text-rose-400 hover:text-rose-500 transition"
              >
                بستن دعوت‌نامه
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
