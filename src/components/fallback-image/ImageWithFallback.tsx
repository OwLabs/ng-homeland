import  { useState } from "react";
import Image, { ImageProps } from "next/image";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback({
  src,
  alt,
  className,
  fill,
  ...rest
}: ImageProps) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  if (didError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 ${className ?? ""}`}
      >
        <img
          src={ERROR_IMG_SRC}
          alt="Error loading image"
          className="opacity-20"
        />
      </div>
    );
  }

  const needsFill = fill ?? (!rest.width && !rest.height);

  return (
    <div
      className={
        needsFill
          ? `relative overflow-hidden ${className ?? ""}`
          : className ?? ""
      }
    >
      <Image
        src={src}
        alt={alt}
        fill={needsFill}
        onError={handleError}
        className={`${needsFill && !className?.includes("object-") ? "object-cover" : ""} ${className ?? ""}`}
        {...rest}
      />
    </div>
  );
}
