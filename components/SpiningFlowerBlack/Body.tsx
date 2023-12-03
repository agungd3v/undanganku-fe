import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { Prata, Poppins } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { BiMapPin } from "react-icons/bi";
import { FiPlayCircle, FiActivity } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import ReactAudioPlayer from "react-audio-player";

import "moment/locale/id";

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"]
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"]
});

interface CProps {
	data: any;
	subject: any;
}

export default function SpiningFlowerBlackBody({data, subject}: CProps) {
  const [day, setDay] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");
  const [minute, setMinute] = useState<string>("00");
  const [second, setSecond] = useState<string>("00");
  const [gallery, setGallery] = useState<any[]>([]);
  const [greetings, setGreetings] = useState<any[]>([]);
  const [pauseBackSound, setPauseBackSound] = useState<boolean>(false);
  const backSound = useRef<any>(null);

  const toggleBackSound = () => {
    if (!pauseBackSound) {
      setPauseBackSound(true);
      return backSound.current.audioEl.current.pause();
    } else {
      setPauseBackSound(false);
      return backSound.current.audioEl.current.play();
    }
  }

  useEffect(() => {
    const countdownWedding = setInterval(() => {
      const endDate = moment(data.akad_date).valueOf();
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

    setGallery(data.photos.filter((sla: any) => sla.prefix == "slide2" || sla.prefix == "slide1"));
    setGreetings(data.greetings.length > 0 ? data.greetings.sort((a: any, b: any) => b.id - a.id) : data.greetings);
    // setGalleryTop(data.photos.slice(0, chunk));
    // setGalleryBot(data.photos.slice(chunk, chunk + data.photos.length));
    // setSlideFirst(data.photos.filter((sla: any) => sla.prefix == "slide1"));
    // setSlideLast(data.photos.filter((sla: any) => sla.prefix == "slide2"));

    return () => {
      clearInterval(countdownWedding);
    }
  }, [useState]);

  return (
    <main className={`max-w-[420px] relative overflow-hidden bg-black ${poppins.className}`}>
      <div className="fixed flex items-center inset-x-0 -top-[8px]" style={{zIndex: 3}}>
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="fixed flex items-center justify-end inset-x-0 -top-[8px]" style={{zIndex: 3}}>
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
      <div className="fixed flex items-center inset-x-0 -bottom-[8px] rotate-180" style={{zIndex: 3}}>
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="fixed flex items-center justify-end inset-x-0 -bottom-[8px] rotate-180" style={{zIndex: 3}}>
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
      {/* Countdown */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center pt-8">
        <div className="absolute flex items-center inset-y-0 -right-[30%]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="absolute flex items-center inset-y-0 -left-[30%]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
				<div className="relative">
					<div className="overflow-hidden w-[140px] h-[200px] rounded-t-[53px] rounded-b-[5px] relative" style={{zIndex: 2, backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "cover")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
					</div>
					<div className="absolute flex items-center inset-y-0 -top-[150px]">
						<Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
					</div>
				</div>
				<h3 className={`text-center text-gold mt-3 text-sm tracking-[1px] ${prata.className}`}>The Wedding Of</h3>
				<h1 className={`text-gold text-3xl mt-1 ${prata.className}`} style={{fontStyle: "italic"}}>{data.female_nickname} & {data.male_nickname}</h1>
        <div className="text-center text-[13px] text-white px-5 mt-3">
          Kami akan menikah, kami ingin anda menjadi bagian dari hari bahagia kami 
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] border-2 border-gold text-gold rounded">
            <span className="leading-5">{day}</span>
            <span className="text-[11px] font-bold">Hari</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] border-2 border-gold text-gold rounded">
            <span className="leading-5">{hour}</span>
            <span className="text-[11px] font-bold">Jam</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] border-2 border-gold text-gold rounded">
            <span className="leading-5">{minute}</span>
            <span className="text-[11px] font-bold">Menit</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] border-2 border-gold text-gold rounded">
            <span className="leading-5">{second}</span>
            <span className="text-[11px] font-bold">Detik</span>
          </div>
        </div>
        <div className="text-center text-gold font-bold mt-4">{moment(data.akad_date).format("dddd, DD MMMM YYYY")}</div>
			</div>
      {/* Ayat */}
      <div className="relative h-screen">
        <div className="absolute flex items-center top-[120px] right-[20px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={80} height={80} alt="" />
        </div>
        <div className="absolute flex items-center top-[120px] left-[20px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={80} height={80} alt="" />
        </div>
        <div className="gap-5 flex flex-col justify-center items-center h-full w-full px-5 text-gold">
          <h2 className={`text-center text-2xl ${prata.className}`} style={{fontStyle: "italic"}}>Ar-Rum 21</h2>
          <h3 className="text-center text-white">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ</h3>
          <div className="text-center text-xs leading-5">
            "Dan Di Antara Tanda-Tanda (Kebesaran)-Nya Ialah Dia Menciptakan Pasangan-Pasangan Untukmu Dari Jenismu Sendiri, Agar Kamu Cenderung Dan Merasa Tenteram Kepadanya, Dan Dia Menjadikan Di Antaramu Rasa Kasih Dan Sayang. Sesungguhnya Pada Yang Demikian Itu Benar-Benar Terdapat Tanda-Tanda (Kebesaran Allah) Bagi Kaum Yang Berpikir."
          </div>
        </div>
      </div>
      {/* Mempelai Wanita & Pria */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute flex items-center top-[0] right-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="absolute flex items-center top-[0] left-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="relative h-full text-gold py-[100px] px-5">
          <h2 className={`${prata.className} text-center text-xl`} style={{fontStyle: "italic", fontWeight: "700"}}>Assalamu'alaikum Wr. Wb.</h2>
          <div className="text-xs mt-5 text-center">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, insyaaAllah kami akan menyelenggarakan acara pernikahan kami
          </div>
          {/* Mempelai Wanita */}
          <div className="relative flex items-center justify-center mt-10">
            <div className="overflow-hidden w-[140px] h-[200px] rounded-t-[53px] rounded-b-[5px] relative" style={{zIndex: 2, backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "mempelai-wanita")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            </div>
            <div className="absolute flex items-center inset-y-0 -top-[50px]">
              <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className={`mt-5 mb-3 text-2xl ${prata.className}`}>{data.female_name}</div>
            <div className="text-sm">Putri {data.female_children_to} dari</div>
            <div className="text-sm font-bold">Bapak {data.female_father_name} & Ibu {data.female_mother_name}</div>
          </div>
          {/* End Mempelai Wanita */}
          <div className="flex justify-center my-10">
            <div className={`divider divider-warning w-[100px] text-lg ${prata.className}`} style={{gap: 8}}>&</div>
          </div>
          {/* Mempelai Pria */}
          <div className="relative flex items-center justify-center">
            <div className="overflow-hidden w-[140px] h-[200px] rounded-t-[53px] rounded-b-[5px] relative" style={{zIndex: 2, backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "mempelai-pria")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            </div>
            <div className="absolute flex items-center inset-y-0 -top-[50px]">
              <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className={`mt-5 mb-3 text-2xl ${prata.className}`}>{data.male_name}</div>
            <div className="text-sm">Putri {data.male_children_to} dari</div>
            <div className="text-sm font-bold">Bapak {data.male_father_name} & Ibu {data.male_mother_name}</div>
          </div>
          {/* End Mempelai Pria */}
        </div>
      </div>
      {/* Akad & Resepsi */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute flex items-center top-[0] right-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="absolute flex items-center top-[0] left-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="py-[100px] relative">
          <div className="text-center text-sm px-5 text-gold">Dengan segala kerendahan hati kami berharap kehadiran Bapak/Ibu/Saudara/i dalam acara pernikahan kami yang akan diselenggarakan pada :</div>
          {/* Akad */}
          <div className="px-5 mt-10">
            <h2 className={`text-gold text-3xl text-center my-5 ${prata.className}`} style={{fontStyle: "italic"}}>Akad Nikah</h2>
            <div className={`flex gap-2 text-sm items-center justify-center text-gold ${prata.className}`}>
              <div>{moment(data.akad_date).format("dddd")}</div>
              <div className="flex flex-col items-center text-lg">
                <div className="border-x-2 border-gold px-3.5">
                  <span>{moment(data.akad_date).format("D")}</span>
                </div>
                <span>{moment(data.akad_date).format("Y")}</span>
              </div>
              <div>{moment(data.akad_date).format("MMMM")}</div>
            </div>
            <div className={`text-center text-sm text-gold text-sm mt-5 ${prata.className}`} style={{fontWeight: "bold"}}>
              Pukul : {moment(data.akad_date).format("hh:ss")} WIB s/d Selesai
            </div>
            <div className={`text-center text-sm text-gold text-sm mt-5 ${prata.className}`}>
              <span style={{fontWeight: "bold"}}>Bertempat Di,</span>
              <br /><br />
              {data.akad_place}
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link href={`https://maps.google.com/maps/place/${data.akad_place}`} className="flex items-center gap-1 text-xs bg-gold px-3 py-2 rounded" target="_blank">
                <BiMapPin size={18} />
                <span className="mt-0.5">Lihat Lokasi</span>
              </Link>
            </div>
          </div>
          {/* Resepsi */}
          <div className="px-5 mt-24">
            <h2 className={`text-gold text-3xl text-center my-5 ${prata.className}`} style={{fontStyle: "italic"}}>Resepsi</h2>
            <div className={`flex gap-2 text-sm items-center justify-center text-gold ${prata.className}`}>
              <div>{moment(data.resepsi_date).format("dddd")}</div>
              <div className="flex flex-col items-center text-lg">
                <div className="border-x-2 border-gold px-3.5">
                  <span>{moment(data.resepsi_date).format("D")}</span>
                </div>
                <span>{moment(data.resepsi_date).format("Y")}</span>
              </div>
              <div>{moment(data.resepsi_date).format("MMMM")}</div>
            </div>
            <div className={`text-center text-sm text-gold text-sm mt-5 ${prata.className}`} style={{fontWeight: "bold"}}>
              Pukul : {moment(data.resepsi_date).format("hh:ss")} WIB s/d Selesai
            </div>
            <div className={`text-center text-sm text-gold text-sm mt-5 ${prata.className}`}>
              <span style={{fontWeight: "bold"}}>Bertempat Di,</span>
              <br /><br />
              {data.resepsi_place}
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link href={`https://maps.google.com/maps/place/${data.resepsi_place}`} className="flex items-center gap-1 text-xs bg-gold px-3 py-2 rounded" target="_blank">
                <BiMapPin size={18} />
                <span className="mt-0.5">Lihat Lokasi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Our Story */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute flex items-center top-[0] right-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="absolute flex items-center top-[0] left-[-100px]">
          <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
        </div>
        <div className="py-[100px] relative px-3">
          <div className="min-h-screen rounded-lg px-[14px] py-[42px] bg-[#FFFFFF12]">
            <h2 className={`text-center text-gold text-3xl mb-8 ${prata.className}`} style={{fontStyle: "italic"}}>Our Story</h2>
            <div style={{backgroundImage: "url(/assets/spinning_flower_black/story.jpeg)", backgroundSize: "cover"}} className="w-full h-[326px] rounded-lg"></div>
            <div className="mt-5 text-white text-right text-xs mb-5">
              <p className={`text-base text-gold mb-2 ${prata.className}`} style={{fontStyle: "italic"}}>Awal Perkenalan ( Februari - April )</p>
              <p className="leading-5">Perkenalan kedua mempelai berawal dari salah satu platform ta'aruf.  Yudi mulai mengirim pesan kepada Melany sekitar bulan Februari. Namun karena kesibukan, Melany jarang merespon hingga sekitar akhir April barulah merespon pesan-pesan Yudi</p>
            </div>
            <div style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "akad")[0].photo})`, backgroundSize: "cover"}} className="w-full h-[326px] rounded-lg border-4 border-gold"></div>
            <div className="mt-5 text-white text-xs mb-5">
              <p className={`text-base text-gold mb-2 ${prata.className}`} style={{fontStyle: "italic"}}>Awal Bertemu ( 12 Mei 2023 )</p>
              <p className="leading-5">Melany dan Yudi pertama kali bertemu di sebuah coffe shop di Bekasi. Secangkir Hazelnut Latte dan Red Velvet panas menemani perbincangan mereka berdua.</p>
            </div>
            <div style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "resepsi")[0].photo})`, backgroundSize: "cover"}} className="w-full h-[326px] rounded-lg border-4 border-gold"></div>
            <div className="mt-5 text-white text-right text-xs mb-5">
              <p className={`text-base text-gold mb-2 ${prata.className}`} style={{fontStyle: "italic"}}>Mengenalkan ke Keluarga ( Juni - Juli )</p>
              <p className="leading-5">Karena niat awal mereka untuk menikah, maka disela-sela kesibukan Melany dan Yudi mulai memperkenalkan diri ke keluarga masing-masing.</p>
            </div>
            <div style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => !photo.prefix)[0].photo})`, backgroundSize: "cover"}} className="w-full h-[326px] rounded-lg border-4 border-gold"></div>
            <div className="mt-5 text-white text-xs mb-5">
              <p className={`text-base text-gold mb-2 ${prata.className}`} style={{fontStyle: "italic"}}>Bertunangan ( 6 Agustus 2023 )</p>
              <p className="leading-5">Setelah merasa cocok dan keluarga mendukung,  Melany dan Yudi memutuskan untuk mengikat hubungan mereka untuk ke jenjang yang lebih serius</p>
            </div>
            <div style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "slide1")[0].photo})`, backgroundSize: "cover"}} className="w-full h-[326px] rounded-lg border-4 border-gold"></div>
            <div className="mt-5 text-white text-right text-xs">
              <p className={`text-base text-gold mb-2 ${prata.className}`} style={{fontStyle: "italic"}}>Menikah ( {moment(data.resepsi_date).format("DD MMMM YYYY")} )</p>
              <p className="leading-5">InsyaAllah atas Kuasa Allah dan restu dari keluarga besar, Melany dan Yudi memutuskan untuk melaksanakan pernikahan guna menyempurnakan ibadah.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Gallery */}
      <div className="relative h-screen overflow-hidden px-3">
        <div className="px-3 min-h-screen rounded-lg px-[14px] py-[62px] bg-[#FFFFFF12]">
          <h2 className={`text-center text-gold text-3xl mb-8 ${prata.className}`} style={{fontStyle: "italic"}}>Our Gallery</h2>
          <div className="grid grid-cols-3">
            {gallery.length > 0 && gallery.map((g: any, i: number) => {
              if (i < 9) return (
                <div key={i}>
                  <Image src={`https://undangan.loofytech.com/${g.photo}`} width={200} height={200} alt="" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* Gift & RSVP */}
      <div className="relative px-3 overflow-hidden py-[100px]">
        <div className="px-3 rounded-lg px-[14px] py-[62px] bg-[#FFFFFF12]">
          <div className="w-full h-[450px] rounded-lg border-4 border-gold" style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => !photo.prefix)[0].photo})`, backgroundSize: "cover"}}></div>
          <h2 className={`text-center text-gold text-2xl mt-4 ${prata.className}`} style={{fontStyle: "italic"}}>Kirim Hadiah</h2>
          <p className="text-xs text-center text-gold my-5">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
          </p>
          <div className="flex items-center justify-center">
            <label htmlFor="gift" className="cursor-pointer py-[12px] px-[24px] uppercase tracking-[2px] flex items-center bg-gold rounded text-xs font-bold gap-2">
              Klik Disini
            </label>
            <div className="drawer-side">
              <label htmlFor="gift" className="drawer-overlay"></label>
              <div className="menu p-4 w-80 min-h-full text-cyan bg-white">
                <div className="flex items-center gap-5">
                  <label htmlFor="gift">
                    <AiOutlineClose size={24} />
                  </label>
                  <span className="text-lg font-bodoni italic">Gift & Hadiah</span>
                </div>
                <div className="text-center mt-16 mb-10">
                  Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah pernikahan dapat melalui virtual account atau e-wallet di bawah ini:
                </div>
                <div className="flex flex-col items-center justify-center gap-5">
                  {data.gifts.map((gift: any, iter: number) => {
                    return (
                      <div key={iter} className="text-xl text-black flex flex-col justify-center items-center">
                        <Image src={`/assets/${gift.prefix}.png`} width={150} height={100} alt={gift.prefix} />
                        <span className="leading-4 mt-2">{gift.gift_label}</span>
                        <span>{gift.gift}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={`text-center text-gold text-2xl ${prata.className}`} style={{fontStyle: "italic"}}>Ucapan</h2>
          <div className="bg-gold rounded-lg mt-5">
            <div className="p-[15px]">
              <div className="flex flex-col gap-3">
                <input type="text" className="border border-black border-4 text-sm px-3 py-2 rounded outline-none" autoComplete="off" placeholder="Nama" />
                <input type="text" className="border border-black border-4 text-sm px-3 py-2 rounded outline-none" autoComplete="off" placeholder="Hubungan (Saudara, Teman, Rekan Kerja)" />
                <textarea rows={5} className="border border-black border-4 text-sm px-3 py-2 rounded outline-none" autoComplete="off" placeholder="Berikan Ucapan & Doa terbaik untuk kedua mempelai"></textarea>
                <div>
                  <button className="bg-black text-white font-bold rounded text-xs py-2 px-5">Kirim</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="max-h-[300px] overflow-y-auto">
              {greetings.length > 0 && greetings.map((gtr: any, itr: number) => {
                return (
                  <div key={itr} className="border-t-2 border-black p-5">
                    <div className="text-sm text-black font-semibold">{gtr.pronouncer}</div>
                    <div className="flex items-center text-[11px] text-white gap-0.5">
                      <AiOutlineMinus className="mt-0.5" />
                      <span className="capitalize">{gtr.relation}</span>
                    </div>
                    <div className="leading-4 text-black mt-2">{gtr.greeting}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="telative px-3 text-gold overflow-hidden pb-[100px] px-5">
        <h2 className="text-center text-3xl">Protokol Kesehatan</h2>
        <p className="text-sm text-center my-5">Tanpa mengurangi rasa hormat, kami memohon maaf karena acara pernikahan kami diselenggarakan sesuai peraturan dan himbauan pemerintah</p>
        <div className="flex items-center justify-around mt-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={"/assets/cuci-tangan.png"} width={68} height={68} alt="" />
            <span className="text-xs">Cuci Tangan</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={"/assets/pakai-masker.png"} width={68} height={68} alt="" />
            <span className="text-xs">Gunakan Masker</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={"/assets/jaga-jarak.png"} width={68} height={68} alt="" />
            <span className="text-xs">Jaga Jarak</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-24">
          <div className="relative mt-20">
            <div className="overflow-hidden w-[140px] h-[200px] rounded-t-[53px] rounded-b-[5px] relative" style={{zIndex: 2, backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "cover")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            </div>
            <div className="absolute flex items-center inset-y-0 -top-[150px]">
              <Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
            </div>
          </div>
          <h3 className={`text-center text-gold mt-3 text-sm tracking-[1px] ${prata.className}`}>Kami Yang Berbahagia</h3>
          <h1 className={`text-gold text-3xl mt-1 ${prata.className}`} style={{fontStyle: "italic"}}>{data.female_nickname} & {data.male_nickname}</h1>
          <div className="text-gold mt-5">
            <p className="text-center text-sm">Atas kehadiran dan doa restunya kami ucapkan terima kasih</p>
            <p className={`text-center text-lg mt-1 ${prata.className}`}>Wassalamu'alaikum Wr. Wb.</p>
          </div>
        </div>
      </div>
      {/* Toggle Playback */}
      <div
        className={`fixed w-[30px] h-[30px] bg-gold p-0.5 bottom-24 right-3 rounded-full z-20 ${!pauseBackSound ? "spin-backsound" : ""}`}
        onClick={toggleBackSound}
      >
        <div className="w-full text-black h-full rounded-full bg-gold flex items-center justify-center">
          {pauseBackSound ? <FiPlayCircle size={22} /> : <FiActivity size={18} />}
        </div>
      </div>
      {/* Backsound */}
      <div className="hidden">
        <ReactAudioPlayer
          controls
          src={`https://undangan.loofytech.com/${data.backsound_link}`}
          autoPlay={true}
          loop={true}
          ref={backSound}
        />
      </div>
    </main>
  )
}