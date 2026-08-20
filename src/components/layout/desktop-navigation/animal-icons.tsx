import type { SVGProps } from "react";

type AnimalIconProps = SVGProps<SVGSVGElement>;

export function DogIcon(props: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 10.5C6.1 9.7 5 8.2 5 6.5C5 5.1 6.1 4 7.5 4C8.7 4 9.7 4.8 10 5.9C10.6 5.6 11.3 5.5 12 5.5C12.7 5.5 13.4 5.6 14 5.9C14.3 4.8 15.3 4 16.5 4C17.9 4 19 5.1 19 6.5C19 8.2 17.9 9.7 16.5 10.5C17.1 11.5 17.5 12.7 17.5 14C17.5 17.6 15 20 12 20C9 20 6.5 17.6 6.5 14C6.5 12.7 6.9 11.5 7.5 10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="13" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="13" r="0.8" fill="currentColor" />
      <path
        d="M10 16C11.2 17 12.8 17 14 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CatIcon(props: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9L6.5 4L10 6.5C10.6 6.2 11.3 6 12 6C12.7 6 13.4 6.2 14 6.5L17.5 4L18 9C18.7 10.1 19 11.3 19 12.5C19 16.4 16 19 12 19C8 19 5 16.4 5 12.5C5 11.3 5.3 10.1 6 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="14.5" cy="12" r="0.8" fill="currentColor" />
      <path
        d="M10 15C11.2 16 12.8 16 14 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BirdIcon(props: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 15C5 10.6 8.1 7 12.5 7C16.4 7 19 9.4 19 13C19 17 16 19 12 19H8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11L18 9L16 13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14.5" cy="10.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function RabbitIcon(props: AnimalIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 9C7.8 7.2 7.3 4 8.5 3.5C9.8 3 10.5 6 10.8 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.8 8C15 6 15.7 3 17 3.5C18.2 4 17.7 7.2 16.5 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 12C7 8.8 9.2 7 12 7C14.8 7 17 8.8 17 12C17 15.8 14.8 19 12 19C9.2 19 7 15.8 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.8" cy="12" r="0.8" fill="currentColor" />
      <circle cx="14.2" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}