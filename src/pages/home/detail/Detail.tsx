import AuthHeader from '@components/auth/common/auth-header';
import DetailSlider from '@components/home/detail/detail-slider';
import DetailHeader from '@components/home/detail/detail-header';
import DetailContent from '@components/home/detail/detail-content';

// import styles from './Detail.module.css';
import GrayContainer from '@components/ui/gray-container';

export default function Detail() {
  return (
    <>
      <AuthHeader />

      <DetailSlider />
      <GrayContainer>
        <DetailHeader to='/' />

        <DetailContent />
      </GrayContainer>
    </>
  );
}
