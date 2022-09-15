import { useIssueDispatch, useIssueState } from 'context/IssueContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const IssueDetailPage = () => {
  const { issueId } = useParams();
  const { issueDetail } = useIssueState();
  const { getIssueDetail } = useIssueDispatch();

  useEffect(() => {
    getIssueDetail(issueId);
  }, []);

  return (
    <div>
      #<span>{issueDetail.data?.number}</span>
      <ReactMarkdown>{issueDetail.data?.body}</ReactMarkdown>
    </div>
  );
};
export default IssueDetailPage;
