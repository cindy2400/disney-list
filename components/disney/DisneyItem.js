import Image from "next/image";
import { Card } from "../ui/Card";

export const DisneyItem = ({ name, image }) => {
  return (
    <Card>
      <Image alt={name} src={image} width={200} height={200} />
      <p>{name}</p>
    </Card>
  );
};
