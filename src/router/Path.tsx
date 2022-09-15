import MainLayout from 'components/Layout';
import MainHomePage from 'pages/mainHome/MainHome';
import { lazy } from 'react';
import { RouteObject } from 'react-router';

const IssueListPage = lazy(() => import('pages/issueList'));
const IssueDetailPage = lazy(() => import('pages/issueDetail'));

type RotuerPathType = {
  path?: string;
  element?: React.ReactNode;
  index?: boolean;
  children?: RouteObject[];
};

const routes = (): Array<RotuerPathType> => [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainHomePage />,
      },
      {
        path: 'issue/get-list-issues',
        element: <IssueListPage />,
      },
      {
        path: 'issue/get-list-issues/:issueId',
        element: <IssueDetailPage />,
      },
    ],
  },
];
export default routes;
