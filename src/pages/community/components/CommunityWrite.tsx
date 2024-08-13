import Header from '@components/layouts/Header';
import { useNavigate } from 'react-router-dom';
import style from './CommunityWrite.module.css';
import Icon from '@components/ui/Icon';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { isValidStringLength } from '@utils/validation';

const CommunityWrite = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [contentError, setContentError] = useState('');

  // [x] 뒤로가기
  const backPage = () => {
    navigate('/community');
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

  // [ ] 지역 선택
  const handleLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setLocation(inputValue);
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

        const newPreviewUrls = newFiles.map(file => URL.createObjectURL(file));
        setPreviewUrls(newPreviewUrls);
      }
    },
    [uploadedFiles]
  );

  // [ ] 게시글 작성
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    // 제목, 내용, 지역

    formData.append('title', title);
    formData.append('content', content);
    formData.append('location', location);

    // 이미지 파일들
    uploadedFiles.forEach(file => {
      formData.append('images', file);
    });

    console.log(
      formData.get('title'),
      formData.get('content'),
      formData.get('location'),
      formData.getAll('images')
    );

    // 서버로 전송
    // fetch('서버 주소', {
    //   method: 'POST',
    //   body: formData,
    // }).then(response => {
    //   if (response.ok) {
    //     navigate('/community');
    //   }
    // });
  };

  return (
    <>
      <Header back={true} title='게시글 작성' onClick={backPage} />
      <form className={style.writeForm} onSubmit={handleSubmit}>
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

        <p className={style.locaitonInput}>지역을 선택해주세요!</p>
        <div className={style.fileUpLoadContainer}>
          <label htmlFor='imgFile' className={style.fileUpLoad}>
            <Icon iconType='imgUpload' />
            <p>사진선택 ({uploadedFiles.length}/10)</p>
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
                <img
                  key={index}
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className={style.previewImg}
                />
              ))
            ) : (
              <div className={style.previewExampleImg}>
                <Icon iconType='imgPreview' />
              </div>
            )}
          </div>
        </div>

        <div className={style.centerBox}>
          <button type='submit' className={style.submitBtn}>
            게시하기
          </button>
        </div>
      </form>
    </>
  );
};

export default CommunityWrite;
