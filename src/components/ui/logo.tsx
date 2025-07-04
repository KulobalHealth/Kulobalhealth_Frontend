import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image alt="Logo" height={100} src="/logo.webp" width={200} />
    </div>
  );
}
