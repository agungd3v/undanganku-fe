import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import TheWedding from "@/components/TheWedding";
import SpiningFlowerBlack from "@/components/SpiningFlowerBlack";

export default function CatalogSample() {
  const [data, setData] = useState<any>(null);
  const [dataTemplate, setDataTemplate] = useState<any>(null);

  const rts = useRouter();

  const getData = async () => {
    try {
      const http = await fetch("/datasample.json");
      if (http.status == 200) {
        const response = await http.json();
        setData(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    if (rts.query.cid) {
      setDataTemplate(rts.query.cid);
    }
  }, [rts]);

  return data ? (
    <>
      <NextSeo
        title={`Pernikahan ${data.female_nickname} & ${data.male_nickname}`}
        description={`Love is when imperfection being perfection.`}
        canonical={`https://nikahanku.co.id`}
        openGraph={{
          title: `Pernikahan ${data.female_nickname} & ${data.male_nickname}`,
          description: `Love is when imperfection being perfection.`,
          url: `https://nikahanku.co.id`,
          images: [
            {url: `https://undangan.loofytech.com/${data.photos.filter((photo: any) => photo.prefix == "cover")[0].photo}`}
          ],
          siteName: `Pernikahan ${data.female_nickname} & ${data.male_nickname}`
        }}
        additionalMetaTags={[{
          property: "keywords",
          content: "pernikahan, nikahanku, undangan digital, undangan, undanganku"
        }, {
          name: "application-name",
          content: `Pernikahan ${data.female_nickname} & ${data.male_nickname}`
        }, {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1"
        }]}
      />
      {dataTemplate && dataTemplate == 1 && <TheWedding data={data} subject={"Jhon & Partner"} />}
      {dataTemplate && dataTemplate == 2 && <SpiningFlowerBlack data={data} subject={"Jhon & Partner"} />}
      <div></div>
    </>
  ) : (
    <div></div>
  )
}