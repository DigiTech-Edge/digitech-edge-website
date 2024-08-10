import CustomBanner from "@/components/global/CustomBanner";
import WhatWeDo from "@/components/pages/what-we-do/WhatWeDo";
import React from "react";

export default function WhatWeDoPage() {
  return (
    <>
      <CustomBanner title="What We Do" imageSrc="/images/banner.png" />
      <WhatWeDo />
    </>
  );
}
