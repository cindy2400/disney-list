import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/Card";

export const DisneyItem = ({ id, name, image }) => {
  return (
    <Card key={id}>
      <Link href={`/${id}`}>
        <Image alt={name} src={image} width={200} height={200} />
      </Link>
      <p>{name}</p>
    </Card>
  );
};
