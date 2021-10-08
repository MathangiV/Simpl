import PropTypes from "prop-types";
import styled from "styled-components";
import Typography from "../Typography";

const propTypes = {
  children: PropTypes.string,
};

const StyledSection = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 0.0625rem solid #e0e0e0;
  margin-bottom: 1rem;
`;

const SectionTitle = (props) => {
  const { children } = props;

  return (
    <StyledSection>
      <Typography as="h2" $lineHeight="0.879rem" primitive="h2">
        {children}
      </Typography>
    </StyledSection>
  );
};

SectionTitle.propTypes = propTypes;

export default SectionTitle;
