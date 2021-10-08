import React from "react";
import SectionTitle from "../../components/SectionTitle";
import MerchantSlider from "../../components/MerchantSlider";
import SectionWrapper from "../../components/SectionWrapper";

const Merchants = () => {
  return (
    <SectionWrapper>
      <SectionTitle>You can also use Simpl on</SectionTitle>
      <MerchantSlider />
    </SectionWrapper>
  );
};

export default Merchants;
