import AvatarImg03 from "@/public/avatar-80-03.jpg";
import AvatarImg02 from "@/public/avatar-80-05.jpg";
import AvatarImg01 from "@/public/avatar-80-06.jpg";
import AvatarImg04 from "@/public/avatar-80-07.jpg";
import Image from "next/image";

export default function AvatarDemo() {
  return (
    <div className="flex -space-x-[0.45rem]">
      <Image
        className="rounded-full ring-1 ring-background"
        src={AvatarImg01}
        width={24}
        height={24}
        alt="Avatar 01"
      />
      <Image
        className="rounded-full ring-1 ring-background"
        src={AvatarImg02}
        width={24}
        height={24}
        alt="Avatar 02"
      />
      <Image
        className="rounded-full ring-1 ring-background"
        src={AvatarImg03}
        width={24}
        height={24}
        alt="Avatar 03"
      />
      <Image
        className="rounded-full ring-1 ring-background"
        src={AvatarImg04}
        width={24}
        height={24}
        alt="Avatar 04"
      />
    </div>
  );
}
