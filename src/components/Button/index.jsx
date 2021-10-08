import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  font-family: Roboto, Helvetica, Ariel, Sans-serif;
  color: #ffffff;
  width: 100%;
  text-transform: uppercase;
  background: linear-gradient(90deg, #00d1c1 0%, #00d1dc 100%);
  border: none;
  border-radius: 0.25rem;
`;

const Button = (props) => {
  const { children } = props;

  return <StyledButton>{children}</StyledButton>;
};

export default Button;
