import styled from 'styled-components';

export const AppBarMiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  box-shadow: 0px 2px 4px -1px ${(props) => props.theme.primary}90;
`;

interface MiniMenuContainerProps {
  opened: boolean;
}

export const Container = styled.div<MiniMenuContainerProps>`
  display: flex;
  background: transparent;
  z-index: 10;
  height: ${(props) => (props.opened ? '100vh' : '0')};
  width: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  position: relative;
  left: 0px;
`;

export const MiniAppBar = styled.div<MiniMenuContainerProps>`
  display: flex;
  align-items: center;
  height: 90px;
  width: calc(100vw - 300px);
  background: ${(props) => props.theme.darkness};
  padding-left: 48px;
  position: relative;
  right: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  box-shadow: ${(props) =>
    props.opened ? `0px 2px 4px -1px ${props.theme.primary}90` : 'none'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding-left: 16px;
  }
`;

export const MiniMenuContainer = styled.div<MiniMenuContainerProps>`
  display: flex;
  justify-content: space-between;
  padding-right: 48px;
  background: ${(props) => props.theme.darkness};
  transition:
    height 0.5s ease,
    max-height 0.5s ease;
  width: 300px;
  height: ${(props) => (props.opened ? '100vh' : '100%')};
  overflow: hidden;
  padding-top: 10px;
  z-index: 10;
  max-height: ${(props) => (props.opened ? '100vh' : '90px')};
  position: relative;
  right: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  box-shadow: ${(props) =>
    props.opened ? `0px 2px 4px -1px ${props.theme.primary}90` : 'none'};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding-right: 16px;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

export const MenuBar = styled.div<MiniMenuContainerProps>`
  width: 50px;
  height: 6px;
  background: ${(props) => props.theme.primary};
  transition: 0.6s ease;

  rotate: ${(props) => (props.opened ? '0' : '360deg')};

  &.barOne {
    width: 40px;
    rotate: 45deg;
    position: relative;
    top: 14px;
  }

  &.barTwo {
    width: 0;
  }

  &.barThree {
    width: 40px;
    rotate: -45deg;
    position: relative;
    bottom: 14px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 40px 40px 40px;
  min-height: 80px;
`;
