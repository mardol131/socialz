interface ColorFilterProps {
  colors: Array<{ id: string; label: string; hex: string }>;
  selectedColors: string[];
  onColorChange: (colors: string[]) => void;
}

export default function ColorFilter({
  colors,
  selectedColors,
  onColorChange,
}: ColorFilterProps) {
  const toggleFilter = (value: string) => {
    if (selectedColors.includes(value)) {
      onColorChange(selectedColors.filter((item) => item !== value));
    } else {
      onColorChange([...selectedColors, value]);
    }
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Barvy</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => toggleFilter(color.id)}
            className={`relative w-8 h-8 rounded-md transition-all ${
              selectedColors.includes(color.id)
                ? "ring-2 ring-emerald-500 scale-110"
                : "hover:scale-105"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.label}
          >
            {selectedColors.includes(color.id) && (
              <svg
                className="absolute inset-0 m-auto w-5 h-5 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
