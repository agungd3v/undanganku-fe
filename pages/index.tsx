import Image from "next/image";
import { Palanquin } from "next/font/google";
import { Slide } from "react-slideshow-image";
import moment from "moment";
import { FaQuoteRight } from "react-icons/fa6";

import "moment/locale/id";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";

moment.locale("id");

const font = Palanquin({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Home() {
  const [day, setDay] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");
  const [minute, setMinute] = useState<string>("00");
  const [second, setSecond] = useState<string>("00");

  const images = [
    "/testing/1.jpg",
    "/testing/2.jpg",
    "/testing/3.jpg",
    "/testing/4.jpg",
    "/testing/5.jpg",
  ];

  useEffect(() => {
    const countdownWedding = setInterval(() => {
      const endDate = moment("2023-12-12").valueOf();
      const dateNow = new Date().getTime();
      const timeLeft = endDate - dateNow;

      if (endDate > dateNow) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setDay(days < 10 ? "0" + days.toString() : days.toString());
        setHour(hours < 10 ? "0" + hours.toString() : hours.toString());
        setMinute(minutes < 10 ? "0" + minutes.toString() : minutes.toString());
        setSecond(seconds < 10 ? "0" + seconds.toString() : seconds.toString());
      } else {
        setDay("00");
        setHour("00");
        setMinute("00");
        setSecond("00");
      }
    }, 1000);

    return () => {
      clearInterval(countdownWedding);
    }
  }, [useState]);

  return (
    <main className={`max-w-[420px] ${font.className}`}>
      <div className="h-screen">
        <div className="flex items-start">
          <div className="flex-1 relative overflow-hidden">
            <div className="h-[460px] relative">
              <Slide arrows={false} indicators={false} transitionDuration={4000} autoplay={true} infinite={true} canSwipe={false}>
                {images.map((d: any, i: number) => {
                  return (
                    <div className="each-slide-effect" key={i}>
                      <div className="h-[460px]" style={{backgroundImage: `url(${d})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                          <span></span>
                      </div>
                    </div>
                  )
                })}
              </Slide>
              <div className="absolute z-10 bottom-0 w-full py-3" style={{backgroundImage: "linear-gradient(transparent, rgba(0, 0, 0, 0.4))"}}>
                <h1 className="text-white text-center font-bold font-bodoni text-5xl">Wedding</h1>
              </div>
            </div>
            <div className="bg-cyan py-[10px]">
              <h3 className="text-center text-white tracking-[4px] font-bold uppercase text-sm">Neneng & Dadang</h3>
            </div>
          </div>
          <div className="w-[20%] h-[460px] relative">
            <div className="rotate-90 whitespace-nowrap absolute top-[70px] left-[-50px] text-cyan uppercase text-xs tracking-[5px]">
              The Wedding
            </div>
            <div className="absolute bottom-[-45px] left-1 font-bodoni text-cyan font-bold text-3xl">{moment("2023-12-12").format("MMM")}</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-[65%] mt-6">
            <div className="border-b-2 border-cyan relative">
              <div className="absolute scale-x-[-1] opacity-10 top-2 left-2"><FaQuoteRight size={60} color="#95A682" /></div>
            </div>
            <div className="relative text-cyan top-[36px] left-3 italic text-sm leading-4">
              Love is when imperfection being perfection.
            </div>
          </div>
          <div className="flex-1 flex flex-col text-cyan font-bodoni font-bold mt-2 pr-3">
            <div className="text-6xl">{moment("2023-12-12").format("DD")}</div>
            <div className="mt-1 text-3xl flex justify-end">{moment("2023-12-12").format("YYYY")}</div>
          </div>
        </div>
      </div>
      <div className="py-[5em] px-[1.5em] bg-cyan">
        <div className="flex items-center gap-4">
          <div className="border-b border-white w-[48px]"></div>
          <div className="text-white font-bodoni italic text-2xl">QS Ar-rum 21</div>
        </div>
        <div className="italic text-white text-sm mt-8">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </div>
        <div className="flex items-center justify-around border-t border-b border-white py-5 mt-16">
          <div className="flex flex-col items-center font-bodoni text-white">
            <span className="text-2xl">{day}</span>
            <span className="text-sm">Hari</span>
          </div>
          <div className="flex flex-col items-center font-bodoni text-white">
            <span className="text-2xl">{hour}</span>
            <span className="text-sm">Jam</span>
          </div>
          <div className="flex flex-col items-center font-bodoni text-white">
            <span className="text-2xl">{minute}</span>
            <span className="text-sm">Menit</span>
          </div>
          <div className="flex flex-col items-center font-bodoni text-white">
            <span className="text-2xl">{second}</span>
            <span className="text-sm">Detik</span>
          </div>
        </div>
      </div>
    </main>
  )
}
