import { Link } from 'react-router-dom';

import { transformPrice } from '@utils/helpers/transfrom-price';

import share from '@assets/icons/share.svg';
import heart from '@assets/icons/heart.svg';

import ActionButton from '@components/ui/action-button';

import styles from './detail-header.module.css';
import { useEffect } from 'react';

type DetailHeaderProps = {
  to: string;
  name: string;
  cost: string;
  pageUrl: string;
  address: string;
};

export default function DetailHeader(props: DetailHeaderProps) {
  const { to, name, cost, pageUrl, address } = props;

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.cleanup();
      window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'location',
        address: address,
        addressTitle: name,
        content: {
          title: name,
          imageUrl:
            'https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png',
          imageWidth: 800,
          imageHeight: 400,
          link: {
            mobileWebUrl: pageUrl,
            webUrl: pageUrl,
          },
        },

        buttons: [
          {
            title: '자세히 보기',
            link: {
              mobileWebUrl: pageUrl,
              webUrl: pageUrl,
            },
          },
        ],
        installTalk: true,
      });
    }
  };

  return (
    <header className={styles['detail-header']}>
      <section className={styles.header__section}>
        <Link to={to}>제주</Link>

        <h2>{name}</h2>

        <strong>
          {transformPrice(cost)}
          <span>원</span>
        </strong>
      </section>

      <nav className={styles.header__nav}>
        <ActionButton src={share} onClick={shareKakao} />
        <ActionButton src={heart} />
      </nav>
    </header>
  );
}
