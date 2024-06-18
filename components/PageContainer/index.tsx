// React
import { ReactNode, useEffect, useState } from 'react';

// Global components
import { linkList } from '../AppBar';

// Styles
import { PageContainerComponent } from './styles';

type BackgroundType = 'dark' | 'darkness';

interface PageContainerProps {
  children: ReactNode;
  id: string;
}

const PageContainer = ({ children, id }: PageContainerProps) => {
  const [backgroundColor, setBackgroundColor] =
    useState<BackgroundType>('darkness');

  const handleBackgroundColor = () => {
    const pagePosition = linkList.findIndex((ll) => ll.link === `/#${id}`);
    console.log(pagePosition);
    if (pagePosition >= 0) {
      if (pagePosition % 2 === 0) {
        setBackgroundColor('darkness');
      } else {
        setBackgroundColor('dark');
      }
    }
  };

  useEffect(() => {
    handleBackgroundColor();
  }, [id]);

  return (
    <PageContainerComponent id={id} className={backgroundColor}>
      {children}
    </PageContainerComponent>
  );
};

export default PageContainer;
