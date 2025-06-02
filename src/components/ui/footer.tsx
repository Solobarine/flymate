"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 px-4 sm:px-20 pt-10 text-white">
      <div className="sm:flex sm:items-start gap-3 justify-between sm:flex-wrap">
        <div>
          <h2 className="text-3xl font-semibold">Join Our Newsletter</h2>
          <p className="mt-1 text-sm">
            Sign Up and we&apos;ll keep you upto date
          </p>
        </div>
        <div className="border-b border-neutral-200 flex items-center p-2 mt-4 sm:mt-0">
          <input
            type="email"
            name="email"
            id=""
            placeholder="your email address"
            className="grow p-2 bg-transparent outline-none"
          />
          <button className="p-2 rounded-full bg-neutral-200 text-neutral-900">
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="grid sm:flex items-start justify-between gap-4 flex-wrap py-10 sm:py-0">
        <div className="sm:pt-16">
          <p className="font-semibold">Contact</p>
          <p className="mt-2 text-sm text-neutral-200">(+1) 123 456 7890</p>
          <p className="mt-2 text-sm text-neutral-200">info@example.com</p>
          <p className="mt-2 text-sm text-neutral-200">
            No 7 Nothing Avenue, Carlisle Estate <br /> Florida USA 4502
          </p>
        </div>
        <div>
          <Image
            src="/logo.avif"
            alt="Product Logo"
            width={120}
            height={120}
            loading="lazy"
            className="object-cover mx-auto"
          />
          <span className="flex items-center gap-4 text-sm">
            <Link href="#" className="hover:underline cursor-pointer">
              About Us
            </Link>
            <Link href="#" className="hover:underline cursor-pointer">
              Hotels
            </Link>
            <Link href="#" className="hover:underline cursor-pointer">
              Flights
            </Link>
            <Link href="#" className="hover:underline cursor-pointer">
              Car Rentals
            </Link>
          </span>
        </div>
        <div className="sm:pt-16">
          <p className="font-semibold sm:text-right">Social Links</p>
          <p className="mt-2 text-sm text-neutral-200 sm:text-right">
            Facebook
          </p>
          <p className="mt-2 text-sm text-neutral-200 sm:text-right">
            Instagram
          </p>
          <p className="mt-2 text-sm text-neutral-200 sm:text-right">
            Pinterest
          </p>
        </div>
      </div>
      <hr className="mt-8 mb-4" />
      <div className="py-3">
        <p className="text-sm text-center">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="text-sm text-center mt-2">
          Designed By{" "}
          <Link
            href="https://solobarine.netlify.app"
            className="cursor-pointer text-primary-100 hover:underline"
          >
            Solobarine
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
