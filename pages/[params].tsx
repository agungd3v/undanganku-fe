import { Palanquin } from "next/font/google";
import moment from "moment";
import { FaEnvelopeOpenText  } from "react-icons/fa6";
import { useState } from "react";
import { NextSeo } from "next-seo";

import "moment/locale/id";
import "react-slideshow-image/dist/styles.css";

import Undanganku from "@/components/Undangan";
import { useRouter } from "next/router";

moment.locale("id");

const font = Palanquin({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Undangan({to, data}: any) {
	const rts = useRouter();

	const [open, setOpen] = useState<boolean>(false);
	const {undangan} = data;

  return (
		<>
			<NextSeo
        title={`Pernikahan ${undangan.female_nickname} & ${undangan.male_nickname}`}
        description={`Love is when imperfection being perfection.`}
        canonical={`https://nikahanku.co.id`}
        openGraph={{
          title: `Pernikahan ${undangan.female_nickname} & ${undangan.male_nickname}`,
          description: `Love is when imperfection being perfection.`,
          url: `https://nikahanku.co.id${rts.asPath}`,
          images: [
            {url: `https://undangan.loofytech.com/${undangan.photos.filter((photo: any) => photo.prefix == "cover")[0].photo}`}
          ],
          siteName: `Pernikahan ${undangan.female_nickname} & ${undangan.male_nickname}`
        }}
        additionalMetaTags={[{
          property: "keywords",
          content: "pernikahan, nikahanku, undangan digital, undangan, undanganku"
        }, {
          name: "application-name",
          content: `Pernikahan ${undangan.female_nickname} & ${undangan.male_nickname}`
        }, {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1"
        }]}
      />
			<main className={`max-w-[420px] ${font.className}`}>
				{!open && <div className="h-screen relative" style={{backgroundImage: `url(https://undangan.loofytech.com/${undangan.photos.filter((photo: any) => photo.prefix == "cover")[0].photo})`, backgroundSize: "cover", backgroundPosition: "center"}}>
					<div className="absolute w-full h-full top-0 left-0 flex flex-col gap-5 justify-end items-center" style={{backgroundImage: "linear-gradient(180deg, #2A2E2400 55%, #2A2E24 100%)"}}>
						<div className="">
							<h3 className="tracking-[2px] text-center uppercase font-bodoni text-white">The Wedding Of</h3>
							<h2 className="font-bodoni text-white capitalize font-bold text-[32px]">{undangan.female_nickname} & {undangan.male_nickname}</h2>
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
				{open && <Undanganku data={undangan} />}
			</main>
		</>
  )
}

export async function getServerSideProps(context: any) {
	try {
		const {params, to} = context.query;

		const http = await fetch(`https://undangan.loofytech.com/api/mempelai/${params}`);

		if (http.status == 200) {
			const response = await http.json();

			return {
				props: {
					to: to,
					...response
				}
			}
		}
		
		return {
			redirect: {
				permanent: false,
				destination: "/404",
			},
			props: {}
		}
	} catch (error) {
		console.log(error);
		return {
			redirect: {
				permanent: false,
				destination: "/500",
			},
			props: {}
		}
	}

}