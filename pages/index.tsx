import Image from "next/image";
import { Palanquin } from "next/font/google";
import { Slide } from "react-slideshow-image";
import moment from "moment";
import { FaQuoteRight } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

import "moment/locale/id";
import "react-slideshow-image/dist/styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";

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
      <div className="pt-[5em]">
        <div className="flex">
          <div className="flex-1 relative">
            <div className="absolute rotate-[270deg] uppercase text-xs text-cyan tracking-[4px] top-[130px] right-[-30px]">The Bride</div>
          </div>
          <div className="w-[60%] h-[300px] relative" style={{backgroundImage: `url(/testing/7.jpg)`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute flex items-center left-0 top-0 justify-center w-16 h-16 bg-cyan text-white font-bodoni text-2xl font-bold">N</div>
          </div>
        </div>
        <div className="p-[32px]">
          <div className="font-bodoni text-cyan text-right text-2xl pb-3">Neneng Spakbor Ngabers</div>
          <div className="text-sm font-bold text-[#757575] text-right">Putri Pertama Dari</div>
          <div className="text-sm text-[#757575] text-right">Bapak Komarudin dan Ibu Paijem</div>
          <div className="mt-10 flex justify-end">
            <Link href={"https://instagram.com"} className="flex items-center font-bold text-xs text-cyan uppercase tracking-[3px]" target="_blank">
              Instagram
              <BsArrowRight size={12} className="mt-0.5 ml-1"  />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-[2em]">
        <div className="flex">
          <div className="w-[60%] h-[300px] relative" style={{backgroundImage: `url(/testing/8.jpg)`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="absolute flex items-center right-0 top-0 justify-center w-16 h-16 bg-cyan text-white font-bodoni text-2xl font-bold">D</div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute rotate-[90deg] uppercase text-xs text-cyan tracking-[4px] top-[130px] left-[-35px]">The Groom</div>
          </div>
        </div>
        <div className="p-[32px]">
          <div className="font-bodoni text-cyan text-left text-2xl pb-3">Dadang Kopling Matic</div>
          <div className="text-sm font-bold text-[#757575] text-left">Putra Pertama Dari</div>
          <div className="text-sm text-[#757575] text-left">Bapak Karni Ilyas dan Sulastri</div>
          <div className="mt-10 flex justify-start">
            <Link href={"https://instagram.com"} className="flex items-center font-bold text-xs text-cyan uppercase tracking-[3px]" target="_blank">
              Instagram
              <BsArrowRight size={12} className="mt-0.5 ml-1"  />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[2em] bg-cyan p-[1.5em]">
        <div className="w-[120px] mx-auto h-1 rounded-full bg-white mb-14"></div>
        <div className="relative">
          <div className="h-[280px] overflow-hidden">
            <Image src={"/testing/2.jpg"} width={327} height={280} alt="" />
          </div>
          <div className="relative flex items-end top-[-70px]">
            <div className="flex-1 pr-4">
              <div className="text-right text-white text-3xl font-bodoni">{moment("2023-12-12 09:00").format("DD")}</div>
              <div className="text-right text-white text-3xl font-bodoni my-4">{moment("2023-12-12 09:00").format("MM")}</div>
              <div className="text-right text-white text-3xl font-bodoni">{moment("2023-12-12 09:00").format("YY")}</div>
            </div>
            <div className="w-[80%] bg-white py-[2em] px-[1em]">
              <h2 className="text-2xl text-cyan uppercase text-right font-[500] tracking-[2px]">Akad Nikah</h2>
              <div className="mt-5 text-sm text-[#757575] font-semibold text-right">{moment("2023-12-12 09:00").format("dddd, DD MMMM YYYY")}</div>
              <div className="mb-4 text-sm text-[#757575] font-semibold text-right">Pukul {moment("2023-12-12 09:00").format("hh:mm")} WIB</div>
              <div className="text-xs tracking-[1px] text-cyan text-right leading-4">Jl. H. Merin, No 28, RT 001 / RW 004 Meruya Selatan, Kembangan, Jakarta Barat</div>
              <div className="mt-8 flex justify-end">
                <Link href={"https://maps.google.com"} className="flex items-center font-bold text-xs text-cyan uppercase" target="_blank">
                  <span>Google Maps</span>
                  <BsArrowRight size={12} className="mt-0.5 ml-2"  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-[280px] overflow-hidden">
            <Image src={"/testing/2.jpg"} width={327} height={280} alt="" />
          </div>
          <div className="relative flex items-end top-[-70px]">
            <div className="w-[80%] bg-white py-[2em] px-[1em]">
              <h2 className="text-2xl text-cyan uppercase text-left font-[500] tracking-[2px]">Resepsi</h2>
              <div className="mt-5 text-sm text-[#757575] font-semibold text-left">{moment("2023-12-12 10:00").format("dddd, DD MMMM YYYY")}</div>
              <div className="mb-4 text-sm text-[#757575] font-semibold text-left">Pukul {moment("2023-12-12 10:00").format("hh:mm")} WIB</div>
              <div className="text-xs tracking-[1px] text-cyan text-left leading-4">Jl. H. Merin, No 28, RT 001 / RW 004 Meruya Selatan, Kembangan, Jakarta Barat</div>
              <div className="mt-8 flex justify-start">
                <Link href={"https://maps.google.com"} className="flex items-center font-bold text-xs text-cyan uppercase" target="_blank">
                  <span>Google Maps</span>
                  <BsArrowRight size={12} className="mt-0.5 ml-2"  />
                </Link>
              </div>
            </div>
            <div className="flex-1 pl-4">
              <div className="text-left text-white text-3xl font-bodoni">{moment("2023-12-12 10:00").format("DD")}</div>
              <div className="text-left text-white text-3xl font-bodoni my-4">{moment("2023-12-12 10:00").format("MM")}</div>
              <div className="text-left text-white text-3xl font-bodoni">{moment("2023-12-12 10:00").format("YY")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[4em] px-[1em]">
        <div className="relative">
          <div className="relative top-0 w-[80%] h-[250px]" style={{backgroundImage: "url(/testing/6.jpg)", backgroundSize: "cover"}}></div>
          <div className="absolute bottom-[-160px] right-0 w-[55%] h-[230px] border-[9px] border-r-0 border-white" style={{backgroundImage: "url(/testing/2.jpg)", backgroundSize: "cover"}}></div>
        </div>
        <div className="relative mt-10">
          <div className="font-bodoni leading-10 italic text-6xl text-cyan">
            Love
            <br />
            Story
          </div>
          <div className="px-[2em] mt-24">
            <div className="mt-10">
              <h2 className="text-cyan uppercase tracking-[2px] text-xl font-semibold">Pertemuan</h2>
              <p className="italic text-[#757575] text-[13px] mt-3">Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapih oleh sang maha kuasa, kita tidak bisa memilih kepada siapa kita akan jatuh cinta, kami bertemu pada tahun 2021, tepatnya saat kami sedang bekerja di kantor yang sama, tidak ada yang pernah menyangka bahwa pertemuan itu membawa kami pada suatu ikatan cinta suci hari ini.</p>
            </div>
            <div className="mt-10">
              <h2 className="text-cyan uppercase tracking-[2px] text-right text-xl font-semibold">Pendekatan</h2>
              <p className="italic text-[#757575] text-[13px] text-right mt-3">Katanya cinta dapat tumbuh dengan kebersamaan, seiring berjalannya waktu kami semakin dekat, berada di kantor yang sama membuat kami cukup sering bertemu, memang tidak ada kata pacaran diantara kami tapi alam seakan terus berkonspirasi untuk menyatukan kami berdua.</p>
            </div>
            <div className="mt-10">
              <h2 className="text-cyan uppercase tracking-[2px] text-xl font-semibold">Lamaran</h2>
              <p className="italic text-[#757575] text-[13px] mt-3">Kehandak-Nya menuntun kami pada sebuah pertemuan yang tak pernah di sangka hingga akhirnya membawa kami pada sebuah ikatan suci yang dicintai-Nya, kami melangsungkan acara lamaran di bulan Februari 2023 lalu.</p>
            </div>
            <div className="mt-10">
              <h2 className="text-cyan uppercase tracking-[2px] text-right text-xl font-semibold">Menikah</h2>
              <p className="italic text-[#757575] text-[13px] text-right mt-3">Percayalah, bukan karna bertemu lalu berjodoh tapi karna berjodoh lah maka kami dipertemukan, kami memutuskan untuk mengikrarkan janji suci pernikahan kami di bulan November ini insya allah Sebagai mana yang pernah dikatakan oleh saydina Ali bin abi thalib : " Apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu."</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[5em] bg-cyan p-[1em]">
        <div className="bg-white px-[1.5em] py-[5em]">
          <h2 className="text-3xl font-bodoni italic text-cyan text-center">Our Gallery</h2>
        </div>
        <div className="py-[4em] px-[2em]">
          <h2 className="text-3xl font-bodoni italic text-white text-center">Wedding Gift</h2>
          <p className="text-white text-[13px] leading-4 text-center mt-4">Mungkin karna jarak, waktu, ataupun keadaan yang menghalangi untuk ikut hadir dalam acara pernikahan kami, silahkan klik tombol dibawah untuk mengirimkan hadiah secara cashless</p>
          <div className="flex items-center justify-center mt-14 mb-10">
            <div className="cursor-pointer border-y-2 py-[12px] px-[24px] uppercase tracking-[2px] flex items-center text-white text-xs font-bold gap-2">
              Klik Disini
              <div className="mt-1">
                <BsArrowRight />
              </div>
            </div>
          </div>
          <Image src={"/testing/3.jpg"} width={420} height={200} alt="" />
        </div>
      </div>
    </main>
  )
}
