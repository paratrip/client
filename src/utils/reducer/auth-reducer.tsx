type ReducerInitialValues = {
  email: string;
  password: string;
  phoneNumber: string;
  userId: string;
  birth: string;
  gender: 'MALE' | 'FEMALE';
};

type Action = {
  type: 'email' | 'password' | 'phoneNumber' | 'userId' | 'birth' | 'gender';
  payload: ReducerInitialValues;
};

export const signUpInitialState: ReducerInitialValues = {
  email: '',
  password: '',
  phoneNumber: '',
  userId: '',
  birth: '',
  gender: 'MALE',
};

export function signUpReducer(state: ReducerInitialValues, action: Action) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload.email };
    case 'password':
      return { ...state, password: action.payload.password };
    case 'phoneNumber':
      return { ...state, phoneNumber: action.payload.phoneNumber };
    case 'userId':
      return { ...state, userId: action.payload.userId };
    case 'birth':
      return { ...state, birth: action.payload.birth };
    case 'gender':
      return { ...state, gender: action.payload.gender };
    default:
      return state;
  }
}
