import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
  fontSize: "0.75rem",
  fontWeight: 400,
  color: "#888888",
  fontFamily: "Roboto",
};

const StyledTypography = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-family: ${({ fontFamily }) =>
    fontFamily + ", Helvetica, Ariel, Sans-serif"};
  color: ${({ color }) => color};
  margin: 0;
`;

const Typography = (props) => {
  const { children } = props;

  return <StyledTypography {...props}>{children}</StyledTypography>;
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
