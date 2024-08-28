type Setter<T> = (parameter: T) => void;

export function getValueHandler<T>(
  e: React.ChangeEvent<HTMLInputElement>,
  setter: Setter<T>
) {
  setter(e.target.value as T);
}
