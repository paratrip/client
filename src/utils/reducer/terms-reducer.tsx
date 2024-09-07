// 약관 상태를 위한 인터페이스
interface TermsState {
  all: boolean;
  service: boolean;
  privacy: boolean;
  location: boolean;
}

// 액션 인터페이스
interface ToggleAllAction {
  type: 'TOGGLE_ALL';
  payload: boolean;
}

interface ToggleTermAction {
  type: 'TOGGLE_TERM';
  payload: keyof Omit<TermsState, 'all'>;
}

type TermsAction = ToggleAllAction | ToggleTermAction;

const INITIAL_TERMS: TermsState = {
  all: false,
  service: false,
  privacy: false,
  location: false,
};

const termsReducer = (state: TermsState, action: TermsAction): TermsState => {
  switch (action.type) {
    case 'TOGGLE_ALL':
      return {
        all: action.payload,
        service: action.payload,
        privacy: action.payload,
        location: action.payload,
      };
    case 'TOGGLE_TERM':
      const newState = {
        ...state,
        [action.payload]: !state[action.payload],
      };
      newState.all = newState.service && newState.privacy && newState.location;
      return newState;
    default:
      return state;
  }
};

export { INITIAL_TERMS, termsReducer };
export type { TermsState, TermsAction };
