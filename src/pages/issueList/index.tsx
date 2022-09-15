import { LoadingSpinner } from 'components/Spiner/Spiner';
import { useIssueDispatch, useIssueState } from 'context/IssueContext';
import useObServe from 'hooks/useObserve';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from 'styles/media';
import IssueCard from './components/card/IssueCard';
import ThinksFlowLogo from 'assets/img/thingsflow.png';
import { Link } from 'react-router-dom';

const IssueListPage = () => {
  const { issueList } = useIssueState();
  const { getIssueList, resetIssueList } = useIssueDispatch();

  // infinite hook
  const observTarget = useRef(null);
  const page = useObServe(observTarget, issueList.loading);

  useEffect(() => {
    return () => {
      resetIssueList();
    };
  }, []);

  useEffect(() => {
    getIssueList(page, 'comments', 'desc');
  }, [page]);

  return (
    <IssueListPageWrapper>
      {issueList.data.map((list: any, index: number) => (
        <div key={list.id}>
          <a href="https://thingsflow.com/ko/home" target={'_blink'}>
            <LogoImageContainer>
              {index === 4 && <LogoImage src={ThinksFlowLogo} />}
            </LogoImageContainer>
          </a>
          <IssueCard data={list} />
        </div>
      ))}
      <div ref={observTarget}>{issueList.loading && <LoadingSpinner />}</div>
    </IssueListPageWrapper>
  );
};
export default IssueListPage;

const IssueListPageWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 32px 0;
`;

const LogoImageContainer = styled.div`
  text-align: center;
  margin: 16px 0;
`;

const LogoImage = styled.img`
  width: 128px;
  height: 128px;
  cursor: pointer;
`;
