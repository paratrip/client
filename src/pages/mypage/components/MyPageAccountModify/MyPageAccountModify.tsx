import Header from '@components/layouts/Header';
import React, { useRef, useState, useEffect } from 'react';
import style from './MyPageAccountModify.module.css';
import Icon from '@components/ui/Icon';
import { isValidBirth } from '@utils/validation';
import { useLocation, useNavigate } from 'react-router-dom';
import { END_POINT } from '@utils/endpoint/endpoint';
import { useFetch } from '@hooks/useFetch';
import axios from 'axios';

interface User {
  memberSeq: number;
  email: string;
  phoneNumber: string;
  userId: string;
  birth: string;
  gender: string;
}

interface RouteState {
  state: User;
}

interface Request {
  data: {
    userId: string;
  };
}

interface ModifyUser {
  memberSeq: number;
  userId: string;
  birth: string;
  gender: string;
  profileImage: string;
}

interface ServiceText {
  title: string;
  style: string;
}

const MyPageAccountModify = () => {
  const navigate = useNavigate();
  const userData = (useLocation() as RouteState).state;

  const fetchVerifyUserId = useFetch<{ userId: string }, Request>();
  const fetchModifyUser = useFetch<ModifyUser, ModifyUser>();

  const [isDuplicateCheckActive, setIsDuplicateCheckActive] = useState(false);
  const [isModifyActive, setIsModifyActive] = useState(false);

  const [idValue, setIdValue] = useState(''); // 아이디 인풋값
  const [isCheckedId, setIsCheckedId] = useState(''); // 아이디 중복확인 체크된 값
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복확인된 아이디

  const [wraningText, setWraningText] = useState<ServiceText | null>(null);
  const [birthValue, setBirthValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const selectRef = useRef<HTMLSelectElement>(null);

  // 이미지
  const [imgPreview, setImgPreview] = useState('');
  const [imgValue, setImgValue] = useState('');
  const [isImageChanged, setIsImageChanged] = useState(false);

  useEffect(() => {
    setIdValue(userData.userId);
    setBirthValue(userData.birth);
    setGenderValue(userData.gender);
    setImgPreview(userData.profileImage);
  }, []);

  useEffect(() => {
    console.log(idValue, birthValue, genderValue);
  }, [idValue, birthValue, genderValue]);

  // [ ] 아이디 input 핸들러
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
    const fetchData = async () => {
      try {
        const response = await fetchVerifyUserId({
          url: `${END_POINT}/member/verify-userId`,
          method: 'post',
          data: {
            userId: idValue,
          },
        });
        const { status, data } = response;
        if (status === 200) {
          setWraningText({
            title: '사용 가능한 아이디입니다.',
            style: 'success',
          });
          setIsDuplicate(false);
          setIsCheckedId(idValue);
        } else {
          setIsDuplicate(true);
          setIsCheckedId('');
        }
      } catch (error) {
        setWraningText({
          title: '중복된 아이디입니다. 다른 아이디를 입력해 주세요.',
          style: 'fail',
        });
        console.error(error);
      }
    };
    fetchData();
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

  // [ ] 이미지 변경 핸들러
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
        setImgValue(file);
        setIsImageChanged(true); // 이미지가 변경되었음을 표시
      };
      reader.readAsDataURL(file);
    }
  };

  // [ ] 계정 수정 핸들러
  const handleAccountModify: React.MouseEventHandler<
    HTMLButtonElement
  > = async e => {
    e.preventDefault();
    if (isModifyActive) {
      const formData = new FormData();
      formData.append('memberSeq', userData.memberSeq);
      formData.append('userId', isCheckedId || idValue);
      formData.append('birth', birthValue);
      formData.append('gender', genderValue);
      if (isImageChanged) {
        formData.append('profileImage', imgValue);
      }

      try {
        const response = await axios.put(`${END_POINT}/member`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('수정되었습니다.');
          navigate('/mypage');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  // 저장 버튼 활성화 상태 업데이트
  useEffect(() => {
    const isValidBirthValue = isValidBirth(birthValue);
    const isIdChanged = isCheckedId !== userData.userId;
    const isBirthChanged = birthValue !== userData.birth;
    const isGenderChanged = genderValue !== userData.gender;

    setIsModifyActive(
      (isIdChanged && !!isCheckedId && isValidBirthValue) ||
        isBirthChanged ||
        isGenderChanged ||
        isImageChanged
    );
  }, [isCheckedId, birthValue, genderValue, isImageChanged, userData]);

  return (
    <>
      <Header type='back' title='계정 관리' />
      <div className={style.container}>
        <div className={style.accountContainer}>
          <div className={style.userInfo}>
            <div className={style.userImgBox}>
              {imgPreview ? (
                <img
                  src={imgPreview}
                  alt='프로필 미리보기'
                  className={style.profilePreview}
                  onClick={() => document.getElementById('modifyImg')?.click()}
                />
              ) : (
                <Icon
                  iconType='mypageUserDefaultImgBig'
                  onClick={() => document.getElementById('modifyImg')?.click()}
                />
              )}
              <Icon
                iconType='userModifyImg'
                onClick={() => document.getElementById('modifyImg')?.click()}
              />
              <input
                id='modifyImg'
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>

            <div className={style.userTextBox}>
              <div className={style.userEmailBox}>
                <div className={style.userEmail}>{userData.email}</div>
                {/* <Icon iconType='kakaoTalk' /> */}
              </div>
              <div className={style.userPhoneNumber}>
                {userData.phoneNumber}
              </div>
            </div>

            <form className={style.infoModifyContainer}>
              <div className={style.infoModifyInputs}>
                <section className={style.inputLabel}>
                  <label>아이디</label>
                  <div className={style.idBox}>
                    <div className={style.idInputBox}>
                      <input
                        className={
                          wraningText?.style === 'fail'
                            ? `${style.idInput} ${style.idInputWarning}`
                            : style.idInput
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
                {wraningText && (
                  <p
                    className={
                      wraningText.style === 'success'
                        ? style.successText
                        : style.warningText
                    }
                  >
                    {wraningText.title}
                  </p>
                )}
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
                    <option value='MALE'>남자</option>
                    <option value='FEMALE'>여자</option>
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
