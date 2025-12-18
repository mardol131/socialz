interface CheckboxFilterProps {
  title: string;
  items: Array<{ id: string; label: string; count: number }>;
  selectedItems: string[];
  onItemChange: (items: string[]) => void;
}

export default function CheckboxFilter({
  title,
  items,
  selectedItems,
  onItemChange,
}: CheckboxFilterProps) {
  const toggleFilter = (value: string) => {
    if (selectedItems.includes(value)) {
      onItemChange(selectedItems.filter((item) => item !== value));
    } else {
      onItemChange([...selectedItems, value]);
    }
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <label
            key={item.id}
            className="flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleFilter(item.id)}
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50"
              />
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
            <span className="text-sm text-zinc-500">{item.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
