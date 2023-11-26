import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffectOnce } from "usehooks-ts";
import { useDispatch, useSelector } from "react-redux";
import TheWedding from "@/components/TheWedding";
import { selectTemplateUsed, setTemplateUsed } from "@/store/reducers/templateSlice";

export default function Undangan({to, data}: any) {
	const rts = useRouter();
	const {undangan} = data;
	const templateUsed = useSelector(selectTemplateUsed);
	const dispatch = useDispatch();

	useEffectOnce(() => {
		dispatch(setTemplateUsed(parseInt(undangan.id)));
	});

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
			{templateUsed === 1 && <TheWedding data={undangan} subject={to} />}
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