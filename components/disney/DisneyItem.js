import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NoImage from "../../public/noImage.PNG";
import { Card } from "../ui/Card";

export const DisneyItem = ({ id, name, image }) => {
  const [img, setImg] = useState(image);

  return (
    <Card key={id}>
      <Link href={`/${id}`}>
        <Image
          alt={name}
          width={200}
          height={200}
          src={img ? img : NoImage}
          onError={() => setImg(NoImage)}
        />
      </Link>
      <p>{name}</p>
    </Card>
  );
};
