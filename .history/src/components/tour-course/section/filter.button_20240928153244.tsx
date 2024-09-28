type FilterButtonProps = {
  position: string;
  tagName: string;
  tags: string[];
  onToggle: (tag: string) => void;
};

export default function FilterButton(props: FilterButtonProps) {
  const { tagName, onToggle } = props;

  return <button onClick={() => {}}></button>;
}
