import styled from 'styled-components';

export const ServiceTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  background: ${(props) => props.theme.primary};
  width: 80px;
  height: 80px;
  border-radius: 7px 0 7px 0;
  transition: 0.5s ease;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 80px;
  transition: 0.5s ease;

  & path {
    transition: 0.5s ease;
    color: ${(props) => props.theme.darkTwo};
  }
`;

export const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: absolute;
  height: 100%;
  padding: 1rem;
  transition: 10s ease;

  & h2 {
    max-width: calc(100% - 160px - 2rem);
    transition: 0.5s ease;
  }

  & p {
    text-align: center;
    transition: 0.5s ease;
  }
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  width: 100%;
  height: 250px;
  max-width: 500px;
  transition: 0.5s ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 2px 8px -1px ${(props) => props.theme.primary};
    background: ${(props) => props.theme.primary}10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }

  &:hover ${ServiceTab} {
    width: 100%;
    height: 248px;
    border-radius: 7px;
    background: transparent;
    background-image: linear-gradient(
      132deg,
      ${(props) => props.theme.darkTwo} 0%,
      ${(props) => props.theme.primary}20 100%
    );
  }

  &:hover ${IconContainer} {
    & path {
      color: ${(props) => props.theme.primary};
    }
  }

  &:hover ${ActionArea} {
    & h2 {
      color: ${(props) => props.theme.primary};
    }
  }
`;
