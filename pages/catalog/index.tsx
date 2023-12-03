import Image from "next/image";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Catalog() {
  const rts = useRouter();

  return (
    <>
      <NextSeo
        title={`Nikahanku - Catalog Undangan`}
        description={`Love is when imperfection being perfection.`}
        canonical={`https://nikahanku.co.id${rts.asPath}`}
        openGraph={{
          title: `Nikahanku - Catalog Undangan`,
          description: `Love is when imperfection being perfection.`,
          url: `https://nikahanku.co.id${rts.asPath}`,
          images: [
            {url: `https://nikahanku.co.id/favicon.ico`}
          ],
          siteName: `Nikahanku - Catalog Undangan`
        }}
        additionalMetaTags={[{
          property: "keywords",
          content: "pernikahan, nikahanku, undangan digital, undangan, undanganku, aku nikah, catalog undangan, pernikahanku"
        }, {
          name: "application-name",
          content: `Nikahanku - Catalog Undangan`
        }, {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1"
        }]}
      />
      <div className={`h-screen flex flex-col overflow-hidden ${roboto.className}`}>
        <div className="h-[150px] md:h-[300px] relative catalog-cover">
          <div className="relative flex flex-col justify-center items-center h-full text-white">
            <h1 className="uppercase text-center font-bold text-3xl md:text-5xl">Nikahanku</h1>
            <h3 className="text-center uppercase text-sm md:text-xl">Catalog</h3>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto"></div>
      </div>
    </>
  )
}