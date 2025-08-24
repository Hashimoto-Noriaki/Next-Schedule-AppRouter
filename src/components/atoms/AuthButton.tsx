"use client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export default function AuthButton({ children, onClick, type = "submit" }: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-full bg-teal-500 px-6 py-4 text-white font-semibold shadow-lg 
                 transition hover:bg-teal-600 active:scale-[0.98] focus:outline-none focus:ring-2 
                 focus:ring-teal-300"
    >
      {children}
    </button>
  );
}
