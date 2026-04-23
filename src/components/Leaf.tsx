import type { SVGProps } from "react";

// Stylised four-petal leaf mark inspired by Julie Bauza's logo.
export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <g transform="translate(60 60)">
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={angle}
            transform={`rotate(${angle})`}
            d="M0 0 C 8 -14, 28 -26, 44 -20 C 32 -10, 22 6, 4 6 C 2 4, 1 2, 0 0 Z"
          />
        ))}
        <circle r="4" />
      </g>
    </svg>
  );
}
