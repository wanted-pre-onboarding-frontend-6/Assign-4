import { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useMedia } from 'hooks/useMedia';
import { Link, useNavigate } from 'react-router-dom';

interface IssueCardProps {
  data: any;
}

const IssueCard: FC<IssueCardProps> = ({ data }) => {
  const navigate = useNavigate();

  const { isMobile } = useMedia();
  const [issueBody, setIssueBody] = useState<string>('');

  const textLimit = useMemo(() => {
    return isMobile ? 50 : 200;
  }, [isMobile]);

  useEffect(() => {
    if (!data.body) {
      return;
    }
    if (!(data.body.length >= textLimit)) {
      return;
    }
    setIssueBody(data.body.slice(0, textLimit) + ' ......');
  }, [data, textLimit]);

  const onLinkLocation = () => {
    navigate(`/issue/get-list-issues/${data.number}`);
  };

  return (
    <Link to={'/issue/get-list-issues/' + data.number}>
      <CardWapper onClick={onLinkLocation}>
        <div>
          <span>#</span>
          <span>{data.number}</span> {data.title}
          <div>comments({data.comments})</div>
        </div>
        <div>
          <ReactMarkdown>{issueBody}</ReactMarkdown>
          <span>더 보기</span>
        </div>
        <div>
          <img />
          <span>{data.user.login}</span>
          <span>{data.created_at}</span>
        </div>
      </CardWapper>
    </Link>
  );
};
export default IssueCard;

const CardWapper = styled.div`
  width: 100%;
  padding: 16px 32px;
  margin: 16px 0;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
