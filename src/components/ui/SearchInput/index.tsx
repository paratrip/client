import { InputHTMLAttributes, memo, useRef, useState } from 'react';
import style from './SearchInput.module.css';
import { INPUT } from '@constants/texts';
import Icon from '../Icon';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

type InputProps = {
  className?: string;
  onClick?: () => void;
  onSearchResult: (data: any) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = memo(function Input(props: InputProps) {
  const { className = '', onSearchResult, ...rest } = props;
  const fetchSearch = useFetch();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = (form.elements[0] as HTMLInputElement).value;

    try {
      const response = await fetchSearch({
        url: `${END_POINT}/board/search?title=${inputValue}&page=0&size=10`,
        method: 'get',
      });

      console.log(response);

      if (response.status === 200) {
        onSearchResult(response.data); // 검색 결과를 부모 컴포넌트로 전달
        setInputValue('');
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleIconClick = () => {
    formRef.current?.requestSubmit();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      ref={formRef}
      className={`${style.inputContainer} ${className}`}
      onSubmit={handleSubmit}
    >
      <Icon iconType='search' onClick={handleIconClick} />
      <input
        ref={inputRef}
        className={style.input}
        {...rest}
        placeholder={INPUT.COMMUNITY.PLACEHOLDER}
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
});

export default SearchInput;
