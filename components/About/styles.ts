import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  gap: 4rem;
  width: 100%;
  min-height: calc(100vh - 90px);
  padding: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    gap: 4rem;
  }
`;

export const LeftPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  flex: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const BackCard = styled.div`
  position: absolute;
  top: -48px;
  right: 48px;
  display: flex;
  justify-content: stretch;
  z-index: 1;
  width: 43vw;
  max-width: 1024px;
  height: 300px;
  margin-left: 48px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 8px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 0;
    top: 0;
    display: none;
  }
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  gap: 2rem;
  width: 43vw;
  max-width: 1024px;
  padding: 2rem;
  margin-left: 48px;
  background: ${(props) => props.theme.darkTwo};
  border-radius: 8px;

  & button {
    width: 100%;
    max-width: 350px;
    align-self: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    padding: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    position: relative;
    left: 0;
    margin-left: 0;
  }
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
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  flex: 1;
  margin-left: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 1rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
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
    max-width: 400px;
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
  max-width: 400px;
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
  justify-content: space-evenly;
  flex-direction: row;
  align-self: center;
  gap: 1.25rem;
  width: 100%;
  max-width: 400px;
  height: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    align-self: center;
    width: calc(100vw - 64px);
  }
`;

export const SocialMediaCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.darkTwo};
  border-radius: 8px;
  box-shadow: 0px 1px 4px ${(props) => props.theme.lightness};
  width: 64px;
  height: 64px;
  transition: 0.3s ease;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 2px 8px -1px ${(props) => props.theme.primary};
    background: ${(props) => props.theme.primary}10;

    & path {
      color: ${(props) => props.theme.primary};
    }
  }
`;
