"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Reviews = () => {
  const [isCurrent, setIsCurrent] = useState(0);

  const reviews = [
    {
      image: "/users/profile_1.avif",
      name: "John Doe",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsa quia rerum consequuntur enim omnis sunt totam ducimus corrupti voluptas!",
      role: "CEO at Nothing",
      color: "bg-red-500",
    },
    {
      image: "/users/profile_2.avif",
      name: "Anna Stefan",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam soluta officia maxime doloribus minima assumenda aliquam laudantium voluptatem neque autem ut, harum debitis beatae ea molestias iusto? Totam, consectetur.",
      role: "Marketing Director at ToFu Foods",
      color: "bg-sky-500",
    },
    {
      image: "/users/profile_3.avif",
      name: "Julia Roberts",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In similique culpa assumenda ducimus dolore, ullam rem!",
      role: "Head of Animations REAlly",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-foreground my-20 p-6 sm:p-20">
      <div className="grid place-content-center">
        <h2 className="text-4xl font-semibold">
          What Our Clients Say About Us
        </h2>
      </div>
      <div className="p-4 rounded-xl bg-background overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="relative h-14 grow">
            {reviews.map((review, index) => (
              <Image
                key={index}
                src={review.image}
                alt="image"
                width={100}
                height={100}
                loading="lazy"
                className={`w-14 aspect-square rounded-full absolute object-cover ${
                  review.color
                } ${isCurrent == index ? "scale-125" : "scale-100"}`}
                style={{
                  zIndex:
                    isCurrent == index
                      ? reviews.length
                      : reviews.length - index,
                  left: index * 25,
                }}
              />
            ))}
          </div>
          <div>
            <button
              className="text-xl font-semibold px-3 cursor-pointer"
              onClick={() => {
                if (isCurrent == 0) {
                  return setIsCurrent(reviews.length - 1);
                }

                setIsCurrent(isCurrent - 1);
              }}
            >
              <ArrowLeft />
            </button>
            <button
              className="text-xl font-semibold px-3 cursor-pointer"
              onClick={() => {
                if (isCurrent == reviews.length - 1) {
                  return setIsCurrent(0);
                }

                setIsCurrent(isCurrent + 1);
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="relative h-64">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-3 absolute top-6 w-full transition-all duration-1000 ${
                isCurrent == index
                  ? "left-0 opacity-100"
                  : "-left-[100vw] opacity-0"
              }`}
            >
              <p className="text-sm overflow-y-auto h-32">{review.message}</p>
              <p className="mt-6 text-xl font-semibold">{review.name}</p>
              <p className="mt-2 subtext">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
