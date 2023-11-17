import { Palanquin } from "next/font/google";
import moment from "moment";
import { FaEnvelopeOpenText  } from "react-icons/fa6";
import { useState } from "react";

import "moment/locale/id";
import "react-slideshow-image/dist/styles.css";

import Undanganku from "@/components/Undangan";

moment.locale("id");

const font = Palanquin({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Undangan({to, data}: any) {
	const [open, setOpen] = useState<boolean>(false);

  return (
		<main className={`max-w-[420px] ${font.className}`}>
			{!open && <div className="h-screen relative" style={{backgroundImage: "url(/sample/2.jpg)", backgroundSize: "cover", backgroundPosition: "center"}}>
				<div className="absolute w-full h-full top-0 left-0 flex flex-col gap-5 justify-end items-center" style={{backgroundImage: "linear-gradient(180deg, #2A2E2400 55%, #2A2E24 100%)"}}>
					<div className="">
						<h3 className="tracking-[2px] text-center uppercase font-bodoni text-white">The Wedding Of</h3>
						<h2 className="font-bodoni text-white font-bold text-[32px]">Neneg & Dadang</h2>
					</div>
					<div className="text-center text-white uppercase font-semibold text-sm tracking-[2px]">Dear</div>
					<h4 className="text-center text-white font-bodoni italic text-xl">{to}</h4>
					<div className="flex justify-center mb-20 mt-5">
						<button
							type="button"
							className="bg-cyan text-white flex items-center gap-1 px-3 py-2"
							onClick={() => setOpen(true)}
						>
							<FaEnvelopeOpenText />
							Buka Undangan
						</button>
					</div>
				</div>
			</div>}
			{open && <Undanganku data={data} />}
		</main>
  )
}

export async function getServerSideProps(context: any) {
	const {params, to} = context.query;

	return {
		props: {
			to: to,
			data: params
		}
	}
}