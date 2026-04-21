interface FaqSearchProps {
  value: string;
  placeholder: string;
  srLabel: string;
  onChange: (value: string) => void;
}

export function FaqSearch({
  value,
  placeholder,
  srLabel,
  onChange,
}: FaqSearchProps) {
  return (
    <label className="marketing-faq__search">
      <span className="marketing-sr-only">{srLabel}</span>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
