import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from 'react';
import styles from './select.module.css';

interface SelectContextType<T, U, V, W> {
  selectedOption: { value: T | U; label: V | W } | null;
  setSelectedOption: (option: { value: T | U; label: V | W }) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SelectContext = createContext<
  SelectContextType<any, any, any, any> | undefined
>(undefined);

interface SelectProps<T, U, V, W> {
  children: ReactNode;
  placeholder?: string;
  onChange?: (option: { value: T | U; label: V | W }) => void;
}

interface OptionProps<T, U, V, W> {
  value: T | U;
  children: V | W;
}

function Select<T, U, V, W>({
  children,
  placeholder = '선택하세요',
  onChange,
}: SelectProps<T, U, V, W>): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<{
    value: T | U;
    label: V | W;
  } | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSetSelectedOption = (option: { value: T | U; label: V | W }) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <SelectContext.Provider
      value={{
        selectedOption,
        setSelectedOption: handleSetSelectedOption,
        isOpen,
        setIsOpen,
      }}
    >
      <div className={styles.selectContainer} ref={selectRef}>
        <div className={styles.selectHeader} onClick={handleToggle}>
          {selectedOption ? String(selectedOption.label) : placeholder}
          <span
            className={`${styles.arrow} ${isOpen ? styles.up : styles.down}`}
          ></span>
        </div>
        {isOpen && <div className={styles.optionsContainer}>{children}</div>}
      </div>
    </SelectContext.Provider>
  );
}

function Option<T, U, V, W>({
  value,
  children,
}: OptionProps<T, U, V, W>): JSX.Element {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('Option must be used within a Select component');
  }
  const { selectedOption, setSelectedOption, setIsOpen } = context;

  const handleSelect = () => {
    setSelectedOption({ value, label: children });
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.option} ${
        selectedOption?.value === value ? styles.selected : ''
      }`}
      onClick={handleSelect}
    >
      {String(children)}
    </div>
  );
}

Select.Option = Option;

export default Select;
