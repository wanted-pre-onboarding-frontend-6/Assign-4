import { REPO_NAME, REPO_OWNER } from 'conts/repoKeys';

interface ParamsType {
  params: string | object;
  issueId?: string | undefined;
}

class IssueService {
  Api: any;

  constructor(Api: any) {
    this.Api = Api;
  }

  public getIssueList({ params }: ParamsType) {
    return this.Api.get(`/${REPO_OWNER}/${REPO_NAME}/issues`, params);
  }

  public getIssueDetail({ params, issueId }: ParamsType) {
    return this.Api.get(`/${REPO_OWNER}/${REPO_NAME}/issues/${issueId}`, params);
  }
}
export default IssueService;
