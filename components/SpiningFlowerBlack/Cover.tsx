import { Prata, Poppins } from "next/font/google";
import { FaEnvelopeOpenText  } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectTemplateOpen, setTemplateOpen } from "@/store/reducers/templateSlice";
import Image from "next/image";

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

export default function SpiningFlowerBlackCover({data, subject}: CProps) {
  const dispatch = useDispatch();

  return (
    <main className={`h-screen bg-black overflow-hidden relative max-w-[420px] ${poppins.className}`}>
			<div className="absolute flex items-center inset-x-0 -top-[8px]">
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="absolute flex items-center justify-end inset-x-0 -top-[8px]">
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="absolute flex items-center inset-y-0 -right-[30%]">
				<Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
			</div>
			<div className="absolute flex items-center inset-y-0 -left-[30%]">
				<Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
			</div>
			<div className="absolute flex items-center inset-x-0 -bottom-[8px] rotate-180">
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="absolute flex items-center justify-end inset-x-0 -bottom-[8px] rotate-180">
				<Image src={"/assets/spinning_flower_black/curtain.png"} width={200} height={200} alt="" />
			</div>
			<div className="h-screen w-full flex flex-col items-center justify-center">
				<div className="relative mt-20">
					<div className="overflow-hidden w-[140px] h-[200px] rounded-t-[53px] rounded-b-[5px] relative" style={{zIndex: 2, backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "cover")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
					</div>
					<div className="absolute flex items-center inset-y-0 -top-[150px]">
						<Image src={"/assets/spinning_flower_black/flower.png"} className="spin" width={200} height={200} alt="" />
					</div>
				</div>
				<h3 className={`text-center text-gold mt-3 text-sm tracking-[1px] ${prata.className}`}>The Wedding Of</h3>
				<h1 className={`text-gold text-3xl mt-1 ${prata.className}`} style={{fontStyle: "italic"}}>{data.female_nickname} & {data.male_nickname}</h1>
				<div className="flex justify-center mb-20 mt-5">
					<button
						type="button"
						className="bg-gold text-black text-sm flex items-center gap-2 rounded px-3 py-2"
						onClick={() => dispatch(setTemplateOpen(true))}
					>
						<FaEnvelopeOpenText className="mb-0.5" />
						Buka Undangan
					</button>
				</div>
			</div>
    </main>
  )
}