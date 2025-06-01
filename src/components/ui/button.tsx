"use client";

import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={
        "bg-primary-100 dark:bg-primary-300 hover:bg-primary-200 hover:shadow-xl rounded-md px-4 py-2 text-sm font-semibold text-white" +
        " " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
