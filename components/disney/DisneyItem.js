import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
          src={img ? img : "/noImage.png"}
          onError={() => setImg("/noImage.png")}
        />
      </Link>
      <p>{name}</p>
    </Card>
  );
};
