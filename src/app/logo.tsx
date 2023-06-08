import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="icons/icon.png"
      priority
      alt="my personal logo"
      width={48}
      height={48}
    />
  );
}
