import styled from 'styled-components';

export const ServiceTab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: ${(props) => props.theme.primary};
  width: 80px;
  height: 80px;
  border-radius: 7px 0 7px 0;
  transition: 0.3s ease;

  & path {
    transition: 0.3s ease;
    color: ${(props) => props.theme.darkTwo};
  }
`;

export const ServiceArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  position: relative;
  top: -80px;
  z-index: 2;
  transition: 0.3s ease;

  & h2 {
    transition: 0.3s ease;
    position: relative;
    top: 96px;
    max-width: 260px;
    text-align: center;
  }
`;

export const HiddenContainer = styled.div`
  display: contents;

  & p {
    text-align: center;
    color: transparent;
    transition: 0.9s ease;
  }

  & button {
    background: transparent;
    color: transparent;
    border-color: transparent;
  }
`;

export const ServiceCardContainer = styled.div`
  border: 1px solid ${(props) => props.theme.lightness};
  border-radius: 8px;
  width: 100%;
  height: 250px;
  max-width: 500px;

  &:hover ${ServiceTab} {
    width: 100%;
    height: 248px;
    border-radius: 7px;
    justify-content: flex-start;
    align-items: flex-start;
    background: transparent;
    background-image: linear-gradient(
      132deg,
      ${(props) => props.theme.darkTwo} 0%,
      ${(props) => props.theme.primary}20 100%
    );

    & path {
      color: #fff;
    }
  }

  &:hover ${ServiceArea} {
    top: -250px;

    & h2 {
      color: #fff;
      top: 0;
    }
  }

  &:hover ${HiddenContainer} {
    & p {
      color: #fff;
    }

    & button {
      background: #272622;
      color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
    }
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 2px 8px -1px ${(props) => props.theme.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;
