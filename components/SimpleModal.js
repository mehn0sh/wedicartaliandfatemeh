import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Home.module.css";
import { MdOutlineDateRange } from "react-icons/md";
import { PiClockAfternoonFill } from "react-icons/pi";
import { ImLocation } from "react-icons/im";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function SimpleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* دکمه باز کردن */}
      <div className="flex justify-center flex-col my-12 items-center m-auto max-w-xl mx-auto p-4 ">
        <img src="/img/flower2.png" className="w-[180px] md:w-[240px] " />
        <div className=" gap-2.5 flex flex-col items-center w-full p-3 mt-5 border-double border-4 border-gray-300 rounded-md shadow-md ">
          <MdOutlineDateRange className="text-2xl  text-blue-300" />
          <p
            className={`${styles.textFont} text-xl font-bold text-center md:text-2xl text-gray-800`}
          >
            4 فروردین 1405
          </p>
          <PiClockAfternoonFill className="text-2xl  text-blue-300" />
          <p
            className={`${styles.textFont} text-xl font-bold text-center md:text-2xl  text-gray-800`}
          >
            از ساعت 19:30 الی 12 بامداد
          </p>
          <ImLocation className="text-2xl text-blue-300 " />
          <p
            className={`${styles.textFont} text-balance text text-xl font-bold text-center md:text-2xl  text-gray-800`}
          >
            فلکه بیمارستان امیرالمومنین به سمت منازل صنایع فولاد ، عمارت ونوس
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-gray-800 text-gray-100 rounded-md shadow-lg hover:scale-105 transition text-xl curs my-3 font-thin cursor-pointer"
          >
            مسیر یابی{" "}
          </button>
        </div>
      </div>

      {/* مودال */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* بک دراپ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* باکس مودال */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <div className="bg-white w-full max-w-md rounded-2xl p-8 relative shadow-2xl">
                {/* دکمه بستن */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>

                {/* محتوا */}
                <div className="flex flex-col items-center gap-6">
                  <h2 className="text-xl font-semibold">
                    برنامه مورد نظر خود را انتخاب کنید
                  </h2>

                  <div className="flex gap-3 text-4xl  items-center">
                    <Link
                      target="_blank"
                      href={
                        "https://maps.app.goo.gl/gCV6dY7YLsALzoQv5?g_st=atm"
                      }
                    >
                      <button>
                        <img
                          src="/img/gmap.png"
                          className="hover:scale-110 transition cursor-pointer "
                        />
                      </button>
                    </Link>
                    <Link target="_blank" href={'https://nshn.ir/d8rbk4abOB8icg'}>
                      <button>
                        <img
                          src="/img/neshan.png"
                          className="hover:scale-110 transition cursor-pointer w-[120px] mt-1.5"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
