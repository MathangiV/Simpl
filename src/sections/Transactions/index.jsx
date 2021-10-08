import React, { Fragment } from "react";
import styled from "styled-components";
import SectionTitle from "../../components/SectionTitle";
import TransactionCard from "../../components/TransactionCard";
import SectionWrapper from "../../components/SectionWrapper";

const RecentTransaction = [
  {
    merchantName: "Zomato",
    logo: "https://assets.getsimpl.com/images/merchant-icons/zomato.png",
    amount: 250,
    date: "May 24",
    time: "6:12 PM",
    additionalInfo: "Simpl pay later",
  },
  {
    merchantName: "Practo",
    logo: "https://assets.getsimpl.com/images/merchant-icons/practo.png",
    amount: 250,
    date: "May 24",
    time: "6:10 PM",
    contact: "Home - 0090887667",
    status: "processing",
    isAutoPay: true,
  },
  {
    merchantName: "Big basket",
    logo: "https://assets.getsimpl.com/images/merchant-icons/bigbasket.png",
    amount: 300,
    date: "May 23",
    time: "6:10 PM",
    offer: "₹100 Cashback!",
    offerAdditionalInfo: " Will be  credited after repayment",
  },
];

const StyledRule = styled.hr`
  border-bottom: none;
  margin: 1rem 0;
`;

const StyledSectionWrapper = styled(SectionWrapper)`
  margin-bottom: 2rem;
`;

const Transactions = () => {
  return (
    <StyledSectionWrapper>
      <SectionTitle>Recent transactions</SectionTitle>
      {RecentTransaction.map((transaction, index) => (
        <Fragment key={index + transaction.merchantName}>
          <TransactionCard {...transaction} />{" "}
          {RecentTransaction.length - 1 !== index && (
            <StyledRule color="#E0E0E0" />
          )}
        </Fragment>
      ))}
    </StyledSectionWrapper>
  );
};

export default Transactions;
