import ActionButton from '@components/ui/action-button';
import { ButtonHTMLAttributes } from 'react';

type SliderButtonProps = {
  src: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SliderButton(props: SliderButtonProps) {
  return <ActionButton {...props} />;
}
