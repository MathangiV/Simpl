import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography";
import SectionWrapper from "../../components/SectionWrapper";
import AccountsSlider from "../../components/AccountsSlider";

const StyledAccountSection = styled(SectionWrapper)`
  background: linear-gradient(#00d1c1, #00d1c1 70%, #ededed 30%);
  min-height: 300px;
  margin-bottom: 0rem;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 27px;
    background-color: #02bab0;
  }
  .slick-slide {
    padding-left: 1rem;
    box-sizing: border-box;
  }
  .slick-list,
  .slick-track {
    height: 100%;
  }

  & > p, & > h1 {
    padding: 0.5rem 0rem 0.5rem 1rem;
    display: flex;
    align-items: center;
    img {
      height: 2rem;
      margin-left: 0.25rem;
    }
  }

  padding-top: 3.375rem;
`;

const AccountStatus = () => {
  return (
    <StyledAccountSection>
      <Typography as="h1" color="#ffffff" fontSize="1.125rem" fontWeight={500}>
        Welcome to{" "}
        <img
          src="https://assets.getsimpl.com/images/simpl-white-logo.svg"
          alt="Simpl"
        />
      </Typography>
      <Typography color="#ffffff" fontSize="0.875rem">
        2 Active Accounts{" "}
      </Typography>
      <AccountsSlider />
    </StyledAccountSection>
  );
};

export default AccountStatus;
