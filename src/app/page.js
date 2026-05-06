  import { Suspense } from "react";
  import Authors from "@/Components/Authors";
  import { Banner } from "@/Components/Banner";
  import Body from "@/Components/Body";
  import Membership from "@/Components/Membership";
  import TopGeneration from "@/Components/TopGeneration";
export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div className="text-center py-20">Loading books...</div>}>
        <TopGeneration />
      </Suspense>
      <Body />
      <Membership />
      <Authors />
      </div>
  );
}