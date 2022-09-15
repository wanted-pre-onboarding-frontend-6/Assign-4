import Http from 'api/base';
import IssueService from 'api/issueServcie';
import IssueProvider from 'context/IssueContext';
import { ThemeProvider } from 'styled-components';
import Routers from 'router/Router';
import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

function App() {
  const TokenHttpClinet = new Http(
    process.env.REACT_APP_BASE_URL,
    process.env.REACT_APP_ACCESS_TOKEN,
  );

  const issueService = new IssueService(TokenHttpClinet);

  return (
    <IssueProvider IssueService={issueService}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routers />
      </ThemeProvider>
    </IssueProvider>
  );
}

export default App;
