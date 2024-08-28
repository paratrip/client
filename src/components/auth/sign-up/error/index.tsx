import AuthContainer from '@components/auth/common/auth-container';
import { Link } from 'react-router-dom';

export default function SignUpError() {
  return (
    <AuthContainer type='default'>
      <h2>오류가 발생했습니다.</h2>
      <Link to='/sign-up?0=email'>회원가입으로 돌아가기</Link>
    </AuthContainer>
  );
}
