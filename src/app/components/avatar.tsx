import Image from "next/image";

export default function Avatar({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style?: string;
}) {
  return (
    <Image
      className={`rounded-full w-14 h-14 lg:w-20 lg:h-20 object-cover ${style}`}
      alt={alt}
      width={500}
      height={500}
      src={src}
    />
  );
}
