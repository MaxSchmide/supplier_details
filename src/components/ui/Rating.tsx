import React from "react";

interface RatingProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

const Rating: React.FC<RatingProps> = ({ value, max = 5, size = "md" }) => {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, index) => (
        <img
          key={index}
          loading="lazy"
          src={
            index < value
              ? "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/f8cd47578ad2c716d9a991d58807eb68e018c35472f6bed04d69c1246065f8c8?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/28dedf3e886d42a896f30a619fcfed81/e00508c25c53cf242dce8797f25703b38a6eb091215c0981def561af07d606f4?placeholderIfAbsent=true"
          }
          className={`aspect-[1] object-contain ${sizes[size]} shrink-0`}
          alt={index < value ? "Filled star" : "Empty star"}
        />
      ))}
    </div>
  );
};

export default Rating;
