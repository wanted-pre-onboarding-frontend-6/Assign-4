import { useIssueDispatch, useIssueState } from 'context/IssueContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const IssueDetailPage = () => {
  const { issueId } = useParams();
  const { issueDetail } = useIssueState();
  const { getIssueDetail } = useIssueDispatch();

  useEffect(() => {
    getIssueDetail(issueId);
  }, []);

  console.log(issueDetail);

  return (
    <DetailWrapper>
      <DetailHeader>
        #<span>{issueDetail.data?.number}</span>
        <div>{issueDetail.data?.title}</div>
      </DetailHeader>
      <DetailUserProfile>
        <img src={issueDetail.data?.user?.avatar_url} />
        <span>{issueDetail.data?.user?.login}</span>
      </DetailUserProfile>
      <div>
        <ReactMarkdown>{issueDetail.data?.body}</ReactMarkdown>
      </div>
    </DetailWrapper>
  );
};
export default IssueDetailPage;

const DetailWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 64px;
  word-wrap: break-word;
  white-space: pre-line;

  & img {
    max-width: 100%;
  }
`;

const DetailHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 16px;
  border-bottom: 5px solid #f2f2f2;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xLarge};
  }

  & > div {
    margin-top: 16px;
    font-size: ${({ theme }) => theme.fontSize.xLarge};
    color: ${({ theme }) => theme.palette.fontSubColor};
  }
`;

const DetailUserProfile = styled.div`
  ${flexCenter}
  justify-content: flex-end;
  margin-right: 32px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 32px 0;

  & > img {
    font-size: ${({ theme }) => theme.fontSize.small};
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
`;
