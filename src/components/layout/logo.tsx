import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="موپت"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src="/mopet-logo.svg"
        alt="موپت"
        width={178}
        height={50}
        priority
        className="block h-auto w-[130px] md:w-[178px]"
      />
    </Link>
  );
}
