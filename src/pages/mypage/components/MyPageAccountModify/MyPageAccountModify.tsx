import Header from '@components/layouts/Header';
import React, { useRef, useState, useEffect } from 'react';
import style from './MyPageAccountModify.module.css';
import Icon from '@components/ui/Icon';
import { isValidBirth, isValidId } from '@utils/validation';

const MyPageAccountModify = () => {
  const [isDuplicateCheckActive, setIsDuplicateCheckActive] = useState(false);
  const [isModifyActive, setIsModifyActive] = useState(false);

  const [idValue, setIdValue] = useState(''); // 아이디 인풋값
  const [isCheckedId, setIsCheckedId] = useState(''); // 아이디 중복확인 체크된 값
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복확인된 아이디
  const [birthValue, setBirthValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);

  // NOTE: 임시 API 결과
  const apiResult = {
    status: 200,
    data: { userId: 'qwerasdf1234', birth: '19990909', gender: 'female' },
  };

  useEffect(() => {
    setIdValue(apiResult.data.userId);
    setBirthValue(apiResult.data.birth);
    setGenderValue(apiResult.data.gender);
  }, []);

  useEffect(() => {
    console.log(idValue, birthValue, genderValue);
  }, [idValue, birthValue, genderValue]);

  // 아이디 input 핸들러
  const handleInputId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setIdValue(newValue); // 아이디 인풋값 업데이트
    setIsDuplicateCheckActive(newValue.length > 0); // 아이디 입력시 중복확인 버튼 활성화
    setIsCheckedId(''); // 아이디가 변경되면 중복확인 초기화
  };

  // [ ] 아이디 중복확인 핸들러
  const handleDuplicateCheck: React.MouseEventHandler<
    HTMLButtonElement
  > = e => {
    e.preventDefault();
    // [ ] 여기에 중복확인 로직 추가

    const { status, data } = apiResult;
    if (status === 200) {
      alert('사용 가능한 아이디입니다.');
      setIsDuplicate(false);
      setIsCheckedId(idValue);
    } else {
      setIsDuplicate(true);
      setIsCheckedId('');
    }
  };

  // [ ] 생년월일 input 핸들러
  const handleInputBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setBirthValue(newValue);
  };

  // [ ] select 변경 핸들러
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (selectRef.current) {
      selectRef.current.blur();
    }
    setGenderValue(e.target.value);
  };

  // [ ] 계정 수정 핸들러
  const handleAccountModify: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    if (isModifyActive) {
      console.log(isCheckedId, birthValue, genderValue);
      // [ ] 여기에 계정 수정 로직 추가
    }
  };

  // [x] 저장 버튼 활성화 상태 업데이트
  useEffect(() => {
    const isValidBirthValue = isValidBirth(birthValue);
    setIsModifyActive(!!isCheckedId && isValidBirthValue && !!genderValue);
  }, [isCheckedId, birthValue, genderValue]);

  return (
    <>
      <Header type='back' title='계정 관리' />
      <div className={style.container}>
        <div className={style.accountContainer}>
          <div className={style.userInfo}>
            <Icon iconType='userDefaultImg' />
            <div className={style.userTextBox}>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>email@email.com</div>
                <Icon iconType='kakaoTalk' />
              </div>
              <div className={style.userPhoneNumber}>010-0000-0000</div>
            </div>

            <form className={style.infoModifyContainer}>
              <div className={style.infoModifyInputs}>
                <section className={style.inputLabel}>
                  <label>아이디</label>
                  <div className={style.idBox}>
                    <div className={style.idInputBox}>
                      <input
                        className={
                          !isDuplicate
                            ? style.idInput
                            : `${style.idInput} ${style.idInputWarning}`
                        }
                        type='text'
                        placeholder='아이디를 입력해 주세요.'
                        onChange={handleInputId}
                        value={idValue}
                      />
                    </div>

                    <button
                      className={
                        isDuplicateCheckActive
                          ? style.checkBtnAbled
                          : style.checkBtnDisabled
                      }
                      onClick={handleDuplicateCheck}
                      disabled={!isDuplicateCheckActive}
                    >
                      중복확인
                    </button>
                  </div>
                  {isDuplicate && (
                    <p className={style.wraningText}>
                      중복된 아이디입니다. 다른 아이디를 입력해 주세요.
                    </p>
                  )}
                </section>
                <section className={style.inputLabel}>
                  <label>생년월일</label>
                  <input
                    type='text'
                    name='userBirth'
                    className={style.birthInput}
                    placeholder='생년월일을 입력해주세요. YYYYMMDD'
                    onChange={handleInputBirth}
                    value={birthValue}
                  />
                </section>
                <section className={style.inputLabel}>
                  <label>성별</label>
                  <select
                    name='userGender'
                    value={genderValue}
                    onChange={handleSelectChange}
                    ref={selectRef}
                  >
                    <option value='' disabled>
                      성별을 선택해주세요.
                    </option>
                    <option value='male'>남자</option>
                    <option value='female'>여자</option>
                  </select>
                </section>
              </div>
              <button
                className={
                  isModifyActive
                    ? style.submitBtnAbled
                    : style.submitBtnDisabled
                }
                onClick={handleAccountModify}
                disabled={!isModifyActive}
              >
                저장하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageAccountModify;
