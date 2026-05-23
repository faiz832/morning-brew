"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-coffee text-cream hover:bg-espresso shadow-md hover:shadow-lg",
  secondary:
    "bg-amber text-white hover:bg-gold shadow-md hover:shadow-lg",
  outline:
    "border-2 border-coffee text-coffee hover:bg-coffee hover:text-cream",
  ghost:
    "text-coffee hover:bg-coffee/5",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-8 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
