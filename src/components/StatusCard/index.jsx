import styled from "styled-components";
import Tag from "../Tag";
import Typography from "../Typography";
import Button from "../Button";
import { FaLock, FaRegQuestionCircle } from "react-icons/fa";

const StyledInnerWrapper = styled.div`
  padding: 1rem;
  height: 180px;
  background-color: #ffffff;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 0.4px 3.2px;
`;
const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const StyledRightContent = styled.div`
  text-align: right;
`;

const StyledNotification = styled.div`
  display: flex;
  border: 0.0625rem solid #e0e0e0;
  background-color: #f6f6f6;
  padding: 0.75rem;
  border-radius: 0.3125rem;
`;

const StyledLogo = styled.img`
  height: 2rem;
`;

const StyledLinks = styled.a`
  text-decoration: underline;
  color: #00a699;
`;

const StatusCard = (props) => {
  const { due, status, spentInfo, amount, dueDate, notification } = props;

  return (
    <StyledInnerWrapper>
      <StyledRow>
        <StyledLogo
          src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Simpl_Logo.png"
          alt="Simpl"
        />
        {status && (
          <Tag type="accent" fontSize="0.5rem">
            {status}
          </Tag>
        )}
      </StyledRow>
      <StyledRow>
        <div>
          <Typography
            fontWeight={600}
            fontFamily="Source Sans Pro"
            fontSize="0.875rem"
            $lineHeight="1.1rem"
          >
            {spentInfo}
          </Typography>
          <Typography
            fontWeight={700}
            fontFamily="Source Sans Pro"
            fontSize="1.5rem"
            color="#000000"
            $lineHeight="1.75rem"
          >
            {" "}
            &#8377; {amount}
          </Typography>
        </div>
        {dueDate ? (
          <StyledRightContent>
            <Typography fontWeight={600}>DUE DATE</Typography>
            <Typography fontSize="1rem" color="#000000" $lineHeight="1.257rem">
              {dueDate}
            </Typography>
          </StyledRightContent>
        ) : (
          <div>
            <FaRegQuestionCircle color="#00A699" size="0.875rem" />{" "}
            <StyledLinks as="a">FAQ</StyledLinks>
          </div>
        )}
      </StyledRow>
      {due ? (
        <Button>
          <FaLock color="#FFFFFF" /> Pay &#8377;{due}
        </Button>
      ) : (
        <StyledNotification>
          <Typography>
            {notification} <StyledLinks as="a">Manage Accounts</StyledLinks>
          </Typography>
        </StyledNotification>
      )}
    </StyledInnerWrapper>
  );
};

export default StatusCard;
