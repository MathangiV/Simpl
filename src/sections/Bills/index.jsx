import React from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import Typography from "../../components/Typography";
import SectionWrapper from "../../components/SectionWrapper";
import {
  FaMobileAlt,
  FaRegLightbulb,
  FaRssSquare,
  FaTv,
  FaGasPump,
  FaPhoneAlt,
  FaWater,
  FaSimCard,
} from "react-icons/fa";

const StyledFlexBox = styled.div`
  --gap: 15px;
  display: flex;
  flex-wrap: wrap;
  margin: calc(-1 * var(--gap)) 0 calc(-1 * var(--gap)) 0;
  padding: 0 16px;
`;
const StyledItems = styled.div`
  width: 25%;
  box-sizing: border-box;
  text-align: center;
  margin: var(--gap) 0 var(--gap) 0;
  svg {
    width: 2rem;
    height: 2rem;
    padding-bottom: 0.375rem;
  }
`;

const BillTypes = [
  { type: "Prepaid", icon: FaMobileAlt },
  { type: "Electricity", icon: FaRegLightbulb },
  { type: "Broadband", icon: FaRssSquare },
  { type: "DTH", icon: FaTv },
  { type: "Gas", icon: FaGasPump },
  { type: "Landline", icon: FaPhoneAlt },
  { type: "Water", icon: FaWater },
  { type: "Data Card", icon: FaSimCard },
];

const Bills = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Recharges &amp; pay bills</SectionTitle>
      <StyledFlexBox>
        {BillTypes.map(({ type, icon }) => (
          <StyledItems key={type}>
            <div>{React.createElement(icon)}</div>
            <Typography fontSize="0.875rem">{type}</Typography>
          </StyledItems>
        ))}
      </StyledFlexBox>
    </SectionWrapper>
  );
};

export default Bills;
