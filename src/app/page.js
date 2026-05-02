import Authors from "@/Components/Authors";
import { Banner } from "@/Components/Banner";
import Body from "@/Components/Body";
import Membership from "@/Components/Membership";
import TopGeneration from "@/Components/TopGeneration";


import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TopGeneration></TopGeneration>
      <Body></Body>
      
      <Membership></Membership>
      <Authors></Authors>
    </div>
  );
}
