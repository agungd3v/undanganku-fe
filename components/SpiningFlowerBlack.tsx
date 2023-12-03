import Cover from "@/components/SpiningFlowerBlack/Cover";
import Body from "@/components/SpiningFlowerBlack/Body";
import { useSelector } from "react-redux";
import { selectTemplateOpen } from "@/store/reducers/templateSlice";

interface CProps {
	data: any;
  subject: string;
}

export default function SpiningFlowerBlack({data, subject}: CProps) {
  const templateOpen = useSelector(selectTemplateOpen);

  return (
    <>
      {!templateOpen && <Cover data={data} subject={subject} />}
      {templateOpen && <Body data={data} subject={subject} />}
    </>
  )
}