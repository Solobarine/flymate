"use client";

import React from "react";
import { Calendar, User } from "lucide-react";
import Button from "../button";
import Image from "next/image";

type Props = {
  blog: {
    image: string;
    author: string;
    date: string;
    title: string;
    highlight: string;
  };
};

const Card = ({ blog }: Props) => {
  return (
    <div className="bg-highlight p-5 rounded-xl">
      <Image
        src={blog.image}
        alt=""
        width={500}
        height={300}
        className="bg-foreground aspect-video rounded-xl object-cover"
        loading="lazy"
      />
      <div className="mt-2 mb-3 subtext font-medium flex items-center gap-4">
        <div className="flex itens-center gap-2">
          <User />
          <p>{blog.author}</p>
        </div>
        <div className="flex itens-center gap-2">
          <Calendar />
          <p>{blog.date}</p>
        </div>
      </div>
      <p className="font-semibold mb-2">{blog.title}</p>
      <p className="text-sm subtext mb-5">{blog.highlight}</p>

      <Button>Read More</Button>
    </div>
  );
};

export default Card;
