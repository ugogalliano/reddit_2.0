import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

type Props = {
  seed?: string;
  large?: boolean;
};

const Avatar = ({ seed, large }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`relative w-10 h-10 rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        src={`https://avatars.dicebear.com/api/adventurer/${
          session?.user?.name || "placeholder"
        }.svg`}
        objectFit="contain"
        layout="fill"
      />
    </div>
  );
};

export default Avatar;
