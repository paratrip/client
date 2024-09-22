import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const navigate = useNavigate();
  const isLoginTrue = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!isLoginTrue) {
      return navigate('/auth');
    }
    return navigate('/mypage');
  }, [isLoginTrue, navigate]);

  return <Outlet />;
};

export default ProtectedRoute;
