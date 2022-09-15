import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// list type

// menu type

const SidebarContent = () => {
  const pathName = useLocation().pathname.split('/');
  const MenuPathName = useRef(pathName[1]);
  const ListPathName = useRef(pathName[2]);

  const [sideMenuList, setSideMenuList] = useState<any>([
    {
      title: 'Issue',
      path: 'issue',
      toggle: false,
      list: [
        {
          listTitle: '- get list Issues',
          click: false,
          listPath: 'get-list-issues',
        },
        {
          listTitle: '- create Issue',
          click: false,
          listPath: 'create-issue',
        },
        {
          listTitle: '- updtate Issue',
          click: false,
          listPath: 'update-issue',
        },
      ],
    },
  ]);

  useEffect(() => {
    const menuList = [...sideMenuList];
    if (!MenuPathName.current) {
      return;
    }
    const menueSelect = menuList.find((menu: any) => menu.path === MenuPathName.current);
    menueSelect.toggle = true;

    if (!ListPathName.current) {
      return setSideMenuList(menuList);
    }

    const listTitle = menueSelect.list.find((list: any) => list.listPath === ListPathName.current);
    listTitle.click = true;
    setSideMenuList(menuList);
  }, []);

  // menu click handler

  // list click handler

  return (
    <SidebarMenuWrapper>
      {sideMenuList.map((menu: any) => (
        <li key={menu.path}>
          <p>{menu.title}</p>
          <SidebarListWrapper>
            {menu.list.map((list: any) => (
              <li key={list.listTitle}>
                <p>{list.listTitle}</p>
              </li>
            ))}
          </SidebarListWrapper>
        </li>
      ))}
    </SidebarMenuWrapper>
  );
};
export default SidebarContent;

const SidebarMenuWrapper = styled.ul`
  width: 100%;
  & > li {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    & > p {
      padding: 32px 0 0 64px;
    }
  }
`;

const SidebarListWrapper = styled.ul`
  width: 100%;
  & > li {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    font-weight: ${({ theme }) => theme.fontWeight.thin};
    color: ${({ theme }) => theme.palette.fontColor};
    padding: 16px 0;
    cursor: pointer;

    :hover {
      background-color: #f2f2f2;
    }

    & > p {
      padding-left: 112px;
    }
  }
`;
