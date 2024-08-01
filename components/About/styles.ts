import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  gap: 1rem;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 1rem 0;

  border-right: 1px solid ${(props) => props.theme.primary};
  border-bottom: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  } */
  //
`;

export const LeftPanel = styled.div`
  display: flex;
  justify-content: center;
`;

export const BackCard = styled.div`
  display: none;
  width: calc(100vw - 2rem);
  margin: 0 1rem;
  max-width: 600px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: calc(100vw - 2rem);
  margin: 0 1rem;
  max-width: 600px;
  /* background-image: linear-gradient(
    to right bottom,
    #242a33,
    #1f2b2e,
    #202a28,
    #242823,
    #272622
  ); */
  /* border-right: 1px solid ${(props) => props.theme.primary};
  border-bottom: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px; */
  padding: 1rem;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & p {
    text-align: center;
  }

  & h2 {
    font-size: 9.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
    & h2 {
      font-size: 7rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
    & h2 {
      font-size: 5.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
    & h2 {
      font-size: 4rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    & h2 {
      font-size: 3.25rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    & h2 {
      font-size: 3.25rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    & h2 {
      font-size: 2.75rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    & h2 {
      font-size: 2.25rem;
    }
  }
`;

export const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ImagePanel = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;

  & img {
    display: block;
    position: relative;
    width: calc(100vw - 66px);
    height: auto;
  }
`;

export const RightPanelMask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: calc(100vw - 64px);
  height: 100%;
`;

export type StripPanelsPosition = {
  id: string;
  left: number;
  window: number;
  right: number;
};

export interface StripPosition {
  position: StripPanelsPosition;
}

export const Left = styled.div<StripPosition>`
  background-color: ${(props) => props.theme.darkness};
  width: ${(props) => props.position.left}%;
  transition: 0.3s ease;
`;

export const ImageWindow = styled.div<StripPosition>`
  width: ${(props) => props.position.window}%;
  background: ${(props) => props.theme.primary}40;
  border-top: 2px solid ${(props) => props.theme.darkness};
  border-bottom: 2px solid ${(props) => props.theme.darkness};
  transition: 0.3s ease;
`;

export const Right = styled.div<StripPosition>`
  background-color: ${(props) => props.theme.darkness};
  width: ${(props) => props.position.right}%;
  transition: 0.3s ease;
`;

export const Strip = styled.div`
  display: flex;
  height: 20%;

  &:hover ${Left} {
    width: 0;
  }

  &:hover ${ImageWindow} {
    width: 100%;
    background: transparent;
  }

  &:hover ${Right} {
    width: 0;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

export const SocialMediaCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.darkTwo};
  border-radius: 50%;
  width: 64px;
  height: 64px;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
