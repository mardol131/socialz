interface CheckboxFilterProps {
  title: string;
  items: CheckboxItem[];
  selectedItems: CheckboxItem[];
  onItemChange: (items: CheckboxItem[]) => void;
}

export type CheckboxItem = {
  id: string;
  label: string;
  count?: number;
};

export default function CheckboxFilter({
  title,
  items,
  selectedItems,
  onItemChange,
}: CheckboxFilterProps) {
  const toggleFilter = (item: CheckboxItem) => {
    if (selectedItems.includes(item)) {
      onItemChange(selectedItems.filter((i) => i.id !== item.id));
    } else {
      onItemChange([...selectedItems, item]);
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
                checked={selectedItems.some(
                  (selected) => selected.id === item.id
                )}
                onChange={() => toggleFilter(item)}
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-emerald-500 focus:ring-emerald-500/50"
              />
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
            {item.count && item.count > 0 && (
              <span className="text-sm text-zinc-500">{item.count}</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
}
