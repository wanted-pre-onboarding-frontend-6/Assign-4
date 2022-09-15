import { FC, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { useMedia } from 'hooks/useMedia';
import { useNavigate } from 'react-router-dom';
import { IssueType } from 'types/api/api.type';

interface IssueCardProps {
  data: IssueType;
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
    <CardWapper onClick={onLinkLocation}>
      <IssueHeader>
        <IssueNumber>#{data.number}</IssueNumber>
        <IssueTitle>{data.title}</IssueTitle>
        <div>comments({data.comments})</div>
      </IssueHeader>
      <div>
        <ReactMarkdown>{issueBody}</ReactMarkdown>
      </div>
      <IssueDetail>
        <img />
        <IssueUserName>{data.user.login}</IssueUserName>
        <span>{data.created_at}</span>
      </IssueDetail>
    </CardWapper>
  );
};
export default IssueCard;

const CardWapper = styled.div`
  width: 100%;
  padding: 16px 32px;
  margin: 16px;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }

  & img {
    max-width: 100%;
  }
`;
const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const IssueTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
`;
const IssueNumber = styled.span`
  font-weight: 800;
  font-size: 20px;
  padding-right: 15px;
  margin-left: 30px;
`;
const IssueUserName = styled.span`
  margin-right: 5px;
  font-weight: 500;
`;
const IssueDetail = styled.div`
  text-align: right;
  line-height: 40px;
`;
