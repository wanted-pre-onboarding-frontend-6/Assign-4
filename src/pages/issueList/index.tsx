import { useIssueDispatch, useIssueState } from 'context/IssueContext';
import useObServe from 'hooks/useObserve';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import IssueCard from './components/card/IssueCard';

const IssueListPage = () => {
  const { issueList } = useIssueState();
  const { getIssueList } = useIssueDispatch();

  // infinite hook
  const observTarget = useRef(null);
  const page = useObServe(observTarget, issueList.loading);

  useEffect(() => {
    getIssueList(page, 'comments', 'desc');
  }, [page]);

  console.log(page);

  return (
    <IssueListPageWrapper>
      {issueList.data.map((list: any) => (
        <IssueCard key={list.id} data={list} />
      ))}
      <div ref={observTarget}></div>
    </IssueListPageWrapper>
  );
};
export default IssueListPage;

const IssueListPageWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
`;
