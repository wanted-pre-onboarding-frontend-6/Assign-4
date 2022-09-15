import styled from 'styled-components';
import SidebarHeader from './header/Header';
import SidebarContent from './content/Content';

const MainLayoutSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader />
      <SidebarContent />
    </SidebarWrapper>
  );
};
export default MainLayoutSidebar;

const SidebarWrapper = styled.div`
  width: 420px;
  height: 100vh;
  border-right: 2px solid #999;
`;
