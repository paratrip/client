import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function () {
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      (async function () {
        const response = await axios.get(
          'https://euics.co.kr/login/oauth2/callback/kakao?code=' + code
        );

        localStorage.setItem('memberSeq', await response.data.memberSeq);
        localStorage.setItem('accessToken', await response.data.accessToken);
        localStorage.setItem('refreshToken', await response.data.refreshToken);
      })();
    }
  }, [code]);

  return <></>;
}
