// React
import React from 'react';

// Global components
import PageContainer from '../PageContainer';
import {
  LeftPanel,
  RightPanel,
  TitleContainer,
  WelcomePageContainer,
} from './styles';

const WelcomePage = () => {
  return (
    <PageContainer id="welcome">
      <WelcomePageContainer>
        <LeftPanel>
          <TitleContainer>
            <span className="myName">Elisiane Quadros</span>
            <br />
            <span className="myPosition">Desenvolvedora Web</span>
          </TitleContainer>
        </LeftPanel>
        <RightPanel />
      </WelcomePageContainer>
    </PageContainer>
  );
};

export default WelcomePage;
