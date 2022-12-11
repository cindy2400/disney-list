import Image from "next/image";
import Link from "next/link";
import NoImage from "../../public/noImage.PNG";
import { Card } from "../ui/Card";

export const DisneyItem = ({ id, name, image }) => {
  return (
    <Card key={id}>
      <Link href={`/${id}`}>
        {image === (null || undefined) ? (
          <Image alt={name} src={NoImage} width={200} height={200} />
        ) : (
          <Image alt={name} src={image} width={200} height={200} />
        )}
      </Link>
      <p>{name}</p>
    </Card>
  );
};
