import { useMedia } from 'hooks/useMedia';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MainLayoutHeader from './header/Header';
import MainLayoutSidebar from './side/Sidebar';

const MainLayout = () => {
  const { isPc } = useMedia();

  return (
    <MainLayoutWrapper>
      {isPc && <MainLayoutSidebar />}
      <MainLayoutContainer>
        <MainLayoutHeader />
        <Outlet />
      </MainLayoutContainer>
    </MainLayoutWrapper>
  );
};
export default MainLayout;

const MainLayoutWrapper = styled.div`
  display: flex;
`;

const MainLayoutContainer = styled.div`
  width: calc(100% - 420px);
  min-height: calc(100vh);
  max-height: calc(100vh);
  overflow-y: auto;
`;
