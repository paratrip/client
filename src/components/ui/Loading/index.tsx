// Loading 컴포넌트
import { BounceDot } from 'basic-loading';

const Loading = () => {
  const option = {
    size: 12,
    color: '#3434ff',
  };
  return (
    <div>
      <BounceDot option={option} />
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
};

export default Loading;
