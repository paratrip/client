import { useRecoilState } from 'recoil';
import Select from '@components/ui/select/select';
import { signUpGenderState } from '@store/sign-up';

export default function InformationGender() {
  const [gender, setGender] = useRecoilState(signUpGenderState);

  function selectHandler(option: {
    value: 'MALE' | 'FEMALE';
    label: '남자' | '여자';
  }) {
    setGender(option.value);
  }

  return (
    <Select<'MALE', 'FEMALE', '남자', '여자'>
      onChange={selectHandler}
      placeholder='성별'
    >
      <Select.Option value='MALE'>남자</Select.Option>
      <Select.Option value='FEMALE'>여자</Select.Option>
    </Select>
  );
}
