import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

// export type StartupCardType = {
//   _createdAt: string;
//   views: number;
//   author: { _id: number };
//   _id: number;
//   description: string;
//   category: string;
//   title: string;
//   image: string;
// };

const StartupCard = ({ post }: { post: StartTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    _id,
    description,
    category,
    title,
    image,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="gap-1.5 flex">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/${authorId}`}>
            <p className="line-clamp-1 text-16-medium">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <p className="line-clamp-1 text-26-semibold">{title}</p>
          </Link>
        </div>

        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>

        <img src={image} alt={"placeholder"} className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
