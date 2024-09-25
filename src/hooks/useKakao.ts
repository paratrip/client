import { useEffect } from 'react';

export function useKakao() {
  useEffect(() => {
    // 카카오 SDK 스크립트를 동적으로 로드
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    kakaoScript.async = true;
    document.body.appendChild(kakaoScript);

    // 스크립트가 로드되면 카카오 SDK 초기화
    kakaoScript.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(import.meta.env.VITE_KAKAO_LOGIN_KEY); // 본인의 카카오 JavaScript 키
      }
    };
  }, []);

  // 로그인 버튼 클릭 시 실행할 함수
  const handleKakaoLogin = () => {
    window.Kakao.Auth.authorize({
      redirectUri: 'https://euics.co.kr/login/oauth2/callback/kakao', // 리다이렉트 URI
    });
  };

  return handleKakaoLogin;
}
