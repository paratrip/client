import ActionButton from '@components/ui/action-button';

type SliderButtonProps = {
  src: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SliderButton(props: SliderButtonProps) {
  return <ActionButton {...props} />;
}
