import React from "react";

interface UnderlinedHeadingProps {
  text: string;
  className?: string;
}

const UnderlinedHeading: React.FC<UnderlinedHeadingProps> = ({
  text,
  className = "",
}) => {
  return (
    <p className={`text-3xl font-bold mb-16 text-center relative ${className}`}>
      <span className="relative inline-block">
        {text}
        <span
          className="absolute bottom-0 left-1/2 h-[2px] bg-current"
          style={{
            transform: "translateX(-50%) translateY(12px)",
            width: "50%",
            textAlign: "center",
          }}
        />
      </span>
    </p>
  );
};

export default UnderlinedHeading;
