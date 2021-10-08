import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "../Typography";

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["primary", "accent", "default"]),
};

const defaultProps = {
  children: null,
};

const StyledTag = styled.span`
  display: flex;
  background: ${({ bgColor }) => bgColor};
  padding: 0.25rem;
  display: inline-block;
  text-transform: uppercase;
  margin-left: 0.5rem;
`;

const _getBgColor = (type) => {
  switch (type) {
    case "primary":
      return "#e6faf9";
    case "accent":
      return "#FBE2E1";
    default:
      return "#EDEDED";
  }
};

const _getColor = (type) => {
  switch (type) {
    case "primary":
      return "#00A699";
    case "accent":
      return "#E34036";
    default:
      return "#888888";
  }
};

const Tag = (props) => {
  const { children, type } = props;

  return (
    <StyledTag bgColor={_getBgColor(type)}>
      <Typography color={_getColor(type)} {...props}>
        {children}
      </Typography>
    </StyledTag>
  );
};

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default Tag;
