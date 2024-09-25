import Header from '@components/layouts/Header';
import style from './CommunityWrite.module.css';
import Icon from '@components/ui/Icon';
import React, { useState, useCallback, useEffect } from 'react';
import { isValidStringLength } from '@utils/validation';
import { END_POINT } from '@utils/endpoint/endpoint';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import FilterModal from '@components/tour-course/home/filter-modal/filter-modal';
import { useFetch } from '@hooks/useFetch';

const CommunityWrite = () => {
  const isLocation = useLocation();
  const boardInfo = isLocation.state?.boardInfo;

  const [isModal, setIsModal] = useState<boolean>(false);

  const memberSeq = localStorage.getItem('memberSeq');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [mainTitle, setMainTitle] = useState('게시글 작성');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState<string[]>([]);
  const [locationTag, setLocationTag] = useState([]);
  const [contentError, setContentError] = useState('');
  const [boardSeq, setBoardSeq] = useState<number | null>(null);

  const [isActiveButton, setIsActiveButton] = useState(false);

  const fetchLocation = useFetch();

  // [ ] 지역태그 조회
  const getLocationTag = async () => {
    const response = await fetchLocation({
      url: `${END_POINT}/api/paragliding/region`,
      method: 'get',
    });
    console.log(response);
    if (response.length >= 1) {
      setLocationTag(response);
    }
  };

  useEffect(() => {
    getLocationTag();
  }, []);

  useEffect(() => {
    console.log(boardInfo);
    if (boardInfo?.imageURLs) {
      setMainTitle('게시글 수정');
      setPreviewUrls(boardInfo.imageURLs);
      setUploadedFiles(boardInfo.imageURLs);
      setTitle(boardInfo.title);
      setContent(boardInfo.content);
      setLocation([boardInfo.location]);
      setBoardSeq(boardInfo.boardSeq);
    }
  }, [boardInfo]);

  useEffect(() => {
    const isTitleValid = title.length >= 1;
    const isContentValid = content.length >= 5;
    const isLocationSelected = location.length > 0;

    setIsActiveButton(isTitleValid && isContentValid && isLocationSelected);
  }, [title, content, location]);

  // [ ] 지역 선택 핸들러
  const onSelectLocation = (selectedRegion: string) => {
    setLocation(prevLocations => {
      let newLocations;
      if (prevLocations.includes(selectedRegion)) {
        newLocations = prevLocations.filter(loc => loc !== selectedRegion);
      } else {
        if (prevLocations.length >= 1) {
          alert('1개의 지역만 선택할 수 있습니다.');
          return prevLocations;
        }
        newLocations = [...prevLocations, selectedRegion];
      }
      return newLocations;
    });
  };

  const onClearLocations = () => {
    setLocation([]);
  };

  // [x] 제목 입력
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTitle(inputValue);
  };

  // [x] 내용 입력
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length < 5) {
      setContentError('내용은 최소 5자 이상이어야 합니다.');
    } else if (inputValue.length > 5000) {
      setContentError('내용은 최대 5000자까지 입력 가능합니다.');
    } else {
      setContentError('');
    }
    setContent(inputValue);
  };

  // [ ] 지역 선택 모달 오픈
  const openLocationModal = () => {
    setIsModal(prev => !prev);
  };

  // [x] 파일 업로드
  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files) {
        const fileArray = Array.from(files);
        const totalFiles = uploadedFiles.length + fileArray.length;

        if (totalFiles > 10) {
          alert('최대 10개의 파일만 업로드할 수 있습니다.');
          return;
        }

        const newFiles = [...uploadedFiles, ...fileArray].slice(0, 10);
        setUploadedFiles(newFiles);

        const newPreviewUrls = [
          ...previewUrls,
          ...fileArray.map(file => URL.createObjectURL(file)),
        ].slice(0, 10);
        setPreviewUrls(newPreviewUrls);
      }
    },
    [uploadedFiles, previewUrls]
  );

  // [ ] 파일 삭제
  const handleRemoveFile = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviewUrls = previewUrls.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setPreviewUrls(newPreviewUrls);
  };

  // [ ] 게시글 작성 및 게시하기
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidStringLength(title, 1, 50)) {
      alert('제목은 1자 이상 50자 이하로 작성해주세요.');
      return;
    }
    if (content.length < 5 || content.length > 5000) {
      alert('내용은 5자 이상 5000자 이하로 작성해주세요.');
      return;
    }

    // FormData 생성
    const formData = new FormData();

    // 텍스트 데이터 추가
    if (memberSeq !== null && memberSeq !== '-1') {
      formData.append('memberSeq', memberSeq);
    } else {
      alert('회원 정보를 찾을 수 없습니다.');
      return;
    }
    formData.append('title', title);
    formData.append('content', content);
    if (!location[0]) {
      alert('지역을 선택해주세요.');
      return;
    } else if (location[0]) {
      formData.append('location', location[0]);
    }
    uploadedFiles.forEach(file => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post(`${END_POINT}/board`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('게시글이 작성되었습니다.');
        window.location.replace('/community');
        return;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('게시글 작성 중 오류가 발생했습니다.');
    }
  };

  // [ ] 게시글 수정 핸들러
  const handleModify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidStringLength(title, 1, 50)) {
      alert('제목은 1자 이상 50자 이하로 작성해주세요.');
      return;
    }
    if (content.length < 5 || content.length > 5000) {
      alert('내용은 5자 이상 5000자 이하로 작성해주세요.');
      return;
    }

    // FormData 생성
    const formData = new FormData();

    // 텍스트 데이터 추가
    if (memberSeq !== null && memberSeq !== '-1') {
      formData.append('memberSeq', memberSeq);
    } else {
      alert('회원 정보를 찾을 수 없습니다.');
      return;
    }
    if (boardSeq !== null) {
      formData.append('boardSeq', boardSeq.toString());
    }
    formData.append('title', title);
    formData.append('content', content);
    if (!location[0]) {
      alert('지역을 선택해주세요.');
      return;
    } else if (location[0]) {
      formData.append('location', location[0]);
    }
    uploadedFiles.forEach(file => {
      formData.append('images', file);
    });

    console.log(formData.get('location'));

    try {
      const response = await axios.put(`${END_POINT}/board`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        alert('게시글이 수정되었습니다.');
        window.location.replace('/community');
        return;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('게시글 수정 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <Header type='back' title={mainTitle} />
      <form
        className={style.writeForm}
        onSubmit={mainTitle === '게시글 작성' ? handleSubmit : handleModify}
      >
        <input
          type='text'
          placeholder='제목'
          className={style.title}
          onChange={handleTitle}
          value={title}
          maxLength={50}
        />
        <div className={style.textareaContainer}>
          <textarea
            placeholder='자신만의 여행 정보나, 경험을 공유해보세요!'
            className={style.content}
            onChange={handleContent}
            value={content}
            maxLength={5000}
          />
          <div id='placeholder' className='placeholder'></div>
          {contentError && <p className={style.errorMessage}>{contentError}</p>}
        </div>

        <div className={style.locaitonInput} onClick={openLocationModal}>
          {location.length > 0 ? (
            <div className={style.locationButtonBox}>
              {location.map((item, index) => (
                <div key={index} className={style.tagButton}>
                  {item}
                </div>
              ))}
            </div>
          ) : (
            '지역을 선택해주세요!'
          )}
        </div>
        {isModal && (
          <FilterModal
            closeHandler={openLocationModal}
            data={locationTag}
            onSelectLocation={onSelectLocation}
            onClearLocations={onClearLocations}
            selectedLocations={location}
          />
        )}
        <div className={style.fileUpLoadContainer}>
          <label htmlFor='imgFile' className={style.fileUpLoad}>
            <Icon iconType='imgUpload' />
            <p>사진선택</p>
            <p style={{ color: 'blue' }}>(최대 10장 이내)</p>
            <input
              type='file'
              accept='image/*'
              multiple
              placeholder='사진 선택'
              id='imgFile'
              onChange={handleFileUpload}
            />
          </label>
          <div className={style.previewImgContainer}>
            {previewUrls.length > 0 ? (
              previewUrls.map((url, index) => (
                <div key={index}>
                  <img
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className={style.previewImg}
                  />
                  <div className={style.previewItem}>
                    <button
                      onClick={event => handleRemoveFile(index, event)}
                      className={style.removeBtn}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className={style.previewExampleImg}>
                <Icon iconType='imgPreview' />
              </div>
            )}
          </div>
        </div>

        <div className={style.centerBox}>
          <button
            type='submit'
            className={`${style.submitBtn} ${
              isActiveButton ? style.isActive : ''
            }`}
          >
            {mainTitle === '게시글 작성' ? '게시하기' : '수정하기'}
          </button>
        </div>
      </form>
    </>
  );
};

export default CommunityWrite;
