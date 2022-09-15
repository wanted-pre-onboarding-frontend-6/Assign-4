import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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

  return (
    <SidebarMenuWrapper>
      {sideMenuList.map((menu: any) => (
        <li key={menu.path}>
          <p>{menu.title}</p>
          <SidebarListWrapper>
            {menu.list.map((list: any) => (
              <Link to={'/' + menu.path + '/' + list.listPath} key={list.listTitle}>
                <li>
                  <p>{list.listTitle}</p>
                </li>
              </Link>
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
  & > a > li {
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
