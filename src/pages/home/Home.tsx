import react from '@assets/icons/heart_s.svg';
import CountContainer from '@components/ui/count-container';

export default function Home() {
  return (
    <>
      <CountContainer src={react} count={5} />
    </>
  );
}
