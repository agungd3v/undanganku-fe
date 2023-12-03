import { Palanquin } from "next/font/google";
import { FaEnvelopeOpenText  } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setTemplateOpen } from "@/store/reducers/templateSlice";

const font = Palanquin({
  subsets: ["latin"],
  weight: ["400"]
});

interface CProps {
	data: any;
	subject: any;
}

export default function TheWeddingCover({data, subject}: CProps) {
	const dispatch = useDispatch();

	return (
		<main className={`max-w-[420px] ${font.className}`}>
			<div className="h-screen relative" style={{backgroundImage: `url(https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "cover")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
				<div className="absolute w-full h-full top-0 left-0 flex flex-col gap-5 justify-end items-center" style={{backgroundImage: "linear-gradient(180deg, #2A2E2400 55%, #2A2E24 100%)"}}>
					<div className="">
						<h3 className="tracking-[2px] text-center uppercase font-bodoni text-white">The Wedding Of</h3>
						<h2 className="font-bodoni text-white capitalize font-bold text-[32px]">{data.female_nickname} & {data.male_nickname}</h2>
					</div>
					<div className="text-center text-white uppercase font-semibold text-sm tracking-[2px]">Dear</div>
					<h4 className="text-center text-white font-bodoni italic text-xl">{subject}</h4>
					<div className="flex justify-center mb-20 mt-5">
						<button
							type="button"
							className="bg-cyan text-white flex items-center gap-1 px-3 py-2"
							onClick={() => dispatch(setTemplateOpen(true))}
						>
							<FaEnvelopeOpenText />
							Buka Undangan
						</button>
					</div>
				</div>
			</div>
		</main>
	)
}