import styled from "styled-components";
import Typography from "../Typography";
import Tag from "../Tag";
import { FaClock, FaCheck } from "react-icons/fa";

const StyledCardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const StyledLogo = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2rem);
`;

const StyledRightContent = styled.div`
  text-align: right;
`;

const StyledTypography = styled(Typography)`
  padding-top: 0.5rem;
`;

const StyledTagWrapper = styled.div`
  padding-top: 0.25rem;
`;

const TransactionCard = (props) => {
  const {
    merchantName,
    amount,
    date,
    time,
    additionalInfo,
    contact,
    offer,
    offerAdditionalInfo,
    logo,
    status,
    isAutoPay,
  } = props;

  return (
    <StyledCardContainer>
      <StyledLogo src={logo} />
      <StyledContent>
        <div>
          <Typography
            color="#000000"
            fontFamily="Source Sans Pro"
            fontWeight={600}
            $lineHeight="1.1rem"
          >
            {merchantName}{" "}
            {isAutoPay && (
              <Tag
                as="span"
                type="primary"
                fontSize="0.5625rem"
                fontWeight={700}
                fontFamily="Source Sans Pro"
                $lineHeight="0.675rem"
              >
                <FaCheck /> Autopay
              </Tag>
            )}
          </Typography>
          <Typography $lineHeight=".9875rem">
            <Typography as="span" color="#000000">
              {date}
            </Typography>
            , {time}
            {additionalInfo && ` | ${additionalInfo}`}{" "}
          </Typography>
          {contact && <StyledTypography>{contact}</StyledTypography>}
          {offer && (
            <StyledTypography>
              <Typography as="span" color="#fd8906">
                {offer}
              </Typography>
              <Typography as="span" color="#000000">
                {offerAdditionalInfo}
              </Typography>
            </StyledTypography>
          )}
        </div>
        <StyledRightContent>
          <Typography
            as="span"
            fontFamily="Source Sans Pro"
            fontWeight={600}
            color="#000000"
          >
            {" "}
            &#8377; {amount}
          </Typography>
          {status && (
            <StyledTagWrapper>
              <Tag
                fontSize="0.5rem"
                fontWeight={700}
                fontFamily="Source Sans Pro"
                $lineHeight="0.675rem"
              >
                <FaClock /> {status}
              </Tag>
            </StyledTagWrapper>
          )}
        </StyledRightContent>
      </StyledContent>
    </StyledCardContainer>
  );
};

export default TransactionCard;
