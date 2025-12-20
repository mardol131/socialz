import { FiCheck } from "react-icons/fi";

interface ColorFilterProps {
  colors: ColorItem[];
  selectedColors: ColorItem[];
  onColorChange: (colors: ColorItem[]) => void;
}

export type ColorItem = {
  id: string;
  label: string;
  hex: string;
};

export default function ColorFilter({
  colors,
  selectedColors,
  onColorChange,
}: ColorFilterProps) {
  const toggleFilter = (item: ColorItem) => {
    if (selectedColors.includes(item)) {
      onColorChange(selectedColors.filter((i) => i !== item));
    } else {
      onColorChange([...selectedColors, item]);
    }
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Barvy</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => toggleFilter(color)}
            className={`relative w-8 h-8 rounded-md transition-all ${
              selectedColors.includes(color)
                ? "ring-2 ring-emerald-500 scale-110"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.label}
          >
            {selectedColors.some((selected) => selected.id === color.id) && (
              <FiCheck className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow-lg" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
