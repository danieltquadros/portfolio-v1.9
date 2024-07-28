import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  height: fit-content;
  max-height: 108px;
  border-radius: 8px;
  padding: 0 1rem;
  z-index: 1;

  position: relative;
  top: -108px;
  transition: top 0.5s ease;
`;

export const CardContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 110px;
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  transition: height 0.5s ease;

  &:hover {
    height: 216px;
  }

  &:hover ${DescriptionContainer} {
    top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const TitleContainer = styled.div`
  padding: 0 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  height: 108px;
  background: ${(props) => props.theme.darkness};
  z-index: 2;

  & h2 {
    color: ${(props) => props.theme.lightness};
    transition: color 0.5s ease;
  }

  &:hover {
    & h2 {
      color: ${(props) => props.theme.primary};
    }
  }
`;
