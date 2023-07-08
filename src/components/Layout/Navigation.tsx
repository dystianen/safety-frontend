import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { BiHome, BiPin } from "react-icons/bi";
import { BsFillPenFill } from "react-icons/bs";

export default function Navigation() {
  const router = useRouter();

  const handleClick = (href: string) => {
    router.push(href);
  };

  return (
    <div className="absolute bottom-0 w-full h-16 bg-white flex justify-around items-center">
      <Button type="text" onClick={() => handleClick("/")}>
        <BiHome className="text-2xl" />
      </Button>
      <Button type="text" onClick={() => handleClick("/report")}>
        <BsFillPenFill className="text-xl" />
      </Button>
      <Button type="text" onClick={() => handleClick("/see-maps")}>
        <BiPin className="text-2xl" />
      </Button>
    </div>
  );
}
