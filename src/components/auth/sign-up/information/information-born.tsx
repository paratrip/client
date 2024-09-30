import { useRecoilState } from 'recoil';
import FunnelInput from '@components/auth/common/funnel-input';

import { getValueHandler } from '@utils/helpers/get-value';
import { signUpBornState } from '@store/sign-up';
import { useEffect } from 'react';

type InformationBornProps = {
  onIsBorn: (parameter: boolean) => void;
};

export default function InformationBorn(props: InformationBornProps) {
  const { onIsBorn } = props;

  const [born, setBorn] = useRecoilState<string>(signUpBornState);

  useEffect(() => {
    if (born.length === 8) {
      onIsBorn(true);
    } else {
      onIsBorn(false);
    }
  }, [born]);

  return (
    <FunnelInput
      inputStyle='default'
      placeholder='생년월일(8자리 입력해주세요. ex.1990101)'
      type='number'
      value={born}
      onChange={e => getValueHandler(e, setBorn)}
    />
  );
}
