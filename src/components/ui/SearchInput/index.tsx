import { InputHTMLAttributes, memo, useRef, useState } from 'react';
import style from './SearchInput.module.css';
import { INPUT } from '@constants/texts';
import Icon from '../Icon';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

type InputProps = {
  className?: string;
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput = memo(function Input(props: InputProps) {
  const { className = '', ...rest } = props;
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
        setInputValue(''); // input 값을 빈 문자열로 초기화
        if (inputRef.current) {
          inputRef.current.value = ''; // input 요소의 값을 직접 초기화
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
