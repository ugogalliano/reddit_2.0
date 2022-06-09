import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  MenuIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className=" sticky top-0 px-4 py-2 shadow-sm flex bg-white items-center   w-full ">
      <div className="relative h-10  w-20 flex-shrink-0  cursor-pointer">
        <Image
          src="https://links.papareact.com/fqy"
          objectFit="contain"
          layout="fill"
        />
      </div>

      <div className="flex items-center mx-3 md:mx-7  gap-4 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className=" hidden md:inline flex-1 ">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className=" w-full flex items-center mx-1 md:mx-4  bg-gray-200  p-2 rounded-md   ">
        <SearchIcon className="h-5 w-5 mr-3 text-gray-500" />
        <input
          type={"text"}
          className=" w-full  bg-gray-200 outline-none  "
          placeholder="Search Reddit "
        />
        <button className="hidden" type="submit" />
      </form>

      <ul className=" hidden lg:inline-flex items-center gap-5 ">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </ul>

      {/**SIGN IN , SIGN OUT */}
      {!session ? (
        <div
          onClick={() => signIn()}
          className="  hidden lg:flex items-center cursor-pointer ml-5 border-2  border-gray-200 p-1 rounded-md min-w-fit "
        >
          <Image
            src="https://links.papareact.com/23l"
            width={25}
            height={25}
            alt="Button Sign In "
          />
          <div className="ml-2">SIGN IN</div>
        </div>
      ) : (
        <div
          onClick={() => signOut()}
          className="  hidden lg:flex items-center cursor-pointer ml-5 border-2  border-gray-200 p-1 rounded-md min-w-fit "
        >
          <Image
            src="https://links.papareact.com/23l"
            width={25}
            height={25}
            alt="Button Sign In "
          />
          <div className="ml-2">SIGN OUT</div>
        </div>
      )}

      <div className="inline lg:hidden">
        <MenuIcon className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
