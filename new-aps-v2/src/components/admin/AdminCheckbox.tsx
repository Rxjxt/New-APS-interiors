interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export default function AdminCheckbox({
  checked,
  onChange,
  label,
}: Props) {
  return (
    <label className="flex items-center gap-3">

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) =>
          onChange(e.target.checked)
        }
      />

      <span>{label}</span>

    </label>
  );
}