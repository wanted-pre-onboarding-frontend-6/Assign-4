import { ReactNode, useReducer, createContext, useContext, Context } from 'react';

// type
type StateType = {
  loading: boolean;
  done: boolean;
  data: any;
  error: any;
};

type ServiceType = {
  getIssueList: (page: number, sort: string, direction: string) => Promise<void>;
  getIssueDetail: (issueId: string | undefined) => Promise<void>;
  resetIssueList: () => Promise<void>;
};

interface InitailStateType {
  issueList: StateType;
  issueDetail: StateType;
}

// state
const initialState = {
  issueList: {
    loading: false,
    done: false,
    data: [],
    error: null,
  },
  issueDetail: {
    loading: false,
    done: false,
    data: null,
    error: null,
  },
};

// context
const IssueStateContext = createContext<InitailStateType>({} as InitailStateType);
const IssueDispatchContext = createContext<ServiceType>({} as ServiceType);

export const useIssueState = () => useContext<InitailStateType>(IssueStateContext);
export const useIssueDispatch = () => useContext<ServiceType>(IssueDispatchContext);

// action name
const ISSUE_LIST_LOADING = 'ISSUE_LIST_LOADING';
const ISSUE_LIST_SUCCESS = 'ISSUE_LIST_SUCCESS';
const ISSUE_LIST_FAILURE = 'ISSUE_LIST_FAILURE';
const ISSUE_LIST_RESET = 'ISSUE_LIST_RESET';

const ISSUE_DETAIL_LOAINDG = 'ISSUE_DETAIL_LOAINDG';
const ISSUE_DETAIL_SUCCESS = 'ISSUE_DETAIL_SUCCESS';
const ISSUE_DETAIL_FAILURE = 'ISSUE_DETAIL_FAILURE';

// loading, success, failure handler

const reset = {
  loading: false,
  done: false,
  data: [],
  error: null,
};

const success = (data: any) => ({
  loading: false,
  done: true,
  data,
  error: null,
});

const failure = (error: any) => ({
  loading: false,
  done: true,
  data: null,
  error: error,
});

// reducer
const reducer = (state = initialState, action: any): InitailStateType => {
  switch (action.type) {
    // list
    case ISSUE_LIST_LOADING:
      return {
        ...state,
        issueList: { ...state.issueList, loading: true, done: false, error: null },
      };
    case ISSUE_LIST_SUCCESS: {
      const issueList = { ...state.issueList };
      const newIssueList = issueList.data.concat(action.payload);
      return { ...state, issueList: success(newIssueList) };
    }
    case ISSUE_LIST_FAILURE:
      return { ...state, issueList: failure(action.err) };
    case ISSUE_LIST_RESET:
      return { ...state, issueList: reset };
    // detail
    case ISSUE_DETAIL_LOAINDG:
      return { ...state, issueDetail: reset };
    case ISSUE_DETAIL_SUCCESS:
      return { ...state, issueDetail: success(action.payload) };
    case ISSUE_DETAIL_FAILURE:
      return { ...state, issueDetail: failure(action.err) };
    default:
      throw new Error('Unhandled action');
  }
};

// provider
const IssueProvider = ({ IssueService, children }: { IssueService: any; children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // service
  const getIssueList = async (page: number, sort: string, direction: string) => {
    dispatch({ type: ISSUE_LIST_LOADING });
    try {
      const params = {
        page: page,
        sort: sort,
        direction: direction,
      };

      const response = await IssueService.getIssueList({ params });
      dispatch({ type: ISSUE_LIST_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: ISSUE_LIST_FAILURE, err: err });
    }
  };

  const getIssueDetail = async (issueId: string | undefined) => {
    dispatch({ type: ISSUE_DETAIL_LOAINDG });
    try {
      const response = await IssueService.getIssueDetail({ issueId });
      dispatch({ type: ISSUE_DETAIL_SUCCESS, payload: response.data });
    } catch (err) {
      dispatch({ type: ISSUE_DETAIL_FAILURE, err: err });
    }
  };

  const resetIssueList = async () => {
    dispatch({ type: ISSUE_LIST_RESET });
  };

  const service = {
    getIssueList,
    getIssueDetail,
    resetIssueList,
  };

  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={service}>{children}</IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};
export default IssueProvider;
