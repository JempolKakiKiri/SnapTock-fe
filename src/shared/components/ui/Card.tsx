import type { ReactNode } from "react";

interface cardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: cardProps) => {
  return (
    <div
      className={`rounded-4xl border border-gray-200 bg-white drop-shadow-lg p-4 px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
