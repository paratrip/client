type FilterButtonProps = {
  position: string;
  tagName: string;
  onToggle: (tag: string) => void;
};

export default function FilterButton(props: FilterButtonProps) {
  const { tagName, onToggle } = props;

  return <button onClick={() => onToggle(tagName)}>{tagName}</button>;
}
