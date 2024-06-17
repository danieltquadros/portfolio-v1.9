import styled from 'styled-components';

export const AppBarMiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    bottom: 0;
    align-items: flex-end;
    flex-direction: column;
  }
`;

interface MiniMenuContainerProps {
  opened: boolean;
}

export const Container = styled.div<MiniMenuContainerProps>`
  display: flex;
  background: transparent;
  z-index: 3;
  height: ${(props) => (props.opened ? '100vh' : '0')};
  width: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  position: relative;
  left: 0px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: ${(props) => (props.opened ? '100vw' : '0')};
    left: 0;
  }
`;

export const MiniAppBar = styled.div<MiniMenuContainerProps>`
  display: flex;
  align-items: center;
  height: 90px;
  width: calc(100vw - 300px);
  background: #886c2c;
  padding-left: 4vw;
  position: relative;
  right: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    bottom: 0;
    right: 0;
    width: ${(props) => (props.opened ? '0' : 'calc(100vw - 300px)')};
    padding-left: ${(props) => (props.opened ? '0' : '4vw')};
  }
`;

export const MiniMenuContainer = styled.div<MiniMenuContainerProps>`
  display: flex;
  justify-content: space-between;
  padding-right: 4vw;
  background: #886c2c;
  width: 300px;
  height: ${(props) => (props.opened ? '100vh' : '100%')};
  overflow: hidden;
  padding-top: 10px;
  z-index: 1;
  transition: max-height 0.5s ease;
  max-height: ${(props) => (props.opened ? '100vh' : '90px')};
  position: relative;
  right: ${(props) => (props.opened ? 'calc(100vw - 300px)' : '0')};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    align-items: flex-end;
    width: ${(props) => (props.opened ? '100vw' : '300px')};
    height: 100%;
    right: 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding-bottom: 18px;
  }
`;

export const MenuBar = styled.div`
  width: 50px;
  height: 6px;
  background: ${(props) => props.theme.darkness};
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px 40px 40px 40px;
  min-height: 80px;
`;

// @media (max-width: ${({ theme }) => theme.breakpoints.fk}) {
//   padding: 0 12vw;
//   height: 120px;
// }
// @media (max-width: ${({ theme }) => theme.breakpoints.tk}) {
//   padding: 0 10vw;
// }
// @media (max-width: ${({ theme }) => theme.breakpoints.hd}) {
//   padding: 0 8vw;
//   height: 90px;
// }
// @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
//   padding: 0 0 0 4vw;
// }
