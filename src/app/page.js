import Authors from "@/Components/Authors";
import { Banner } from "@/Components/Banner";
import Body from "@/Components/Body";
import Membership from "@/Components/Membership";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Body></Body>
      <Membership></Membership>
      <Authors></Authors>
    </div>
  );
}
