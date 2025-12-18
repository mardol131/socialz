interface TemplateCardProps {
  template: {
    id: number;
    title: string;
    category: string;
    theme: string;
    price: number;
    originalPrice: number | null;
    image: string;
    rating: number;
    reviews: number;
    colors: string[];
    ratio: string;
    isNew: boolean;
  };
  onViewDetail: () => void;
  onAddToCart: () => void;
}

export default function TemplateCard({
  template,
  onViewDetail,
  onAddToCart,
}: TemplateCardProps) {
  return (
    <div className="group glass rounded-2xl overflow-hidden glass-hover transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative h-64 bg-linear-to-br from-zinc-800 to-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-zinc-700/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="w-20 h-20 text-zinc-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {template.isNew && (
            <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold">
              Nové
            </span>
          )}
          {template.originalPrice && (
            <span className="px-3 py-1 rounded-full bg-red-500/90 text-white text-xs font-semibold">
              Sleva
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute top-4 right-4">
          <div className="glass border border-emerald-500/30 px-3 py-1.5 rounded-full">
            <div className="flex items-center gap-2">
              {template.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  {template.originalPrice} Kč
                </span>
              )}
              <span className="text-sm font-semibold text-emerald-400">
                {template.price} Kč
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">
            {template.category}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-zinc-800/50 text-xs text-zinc-400">
            {template.ratio}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
          {template.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(template.rating)
                    ? "text-emerald-400"
                    : "text-zinc-700"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-zinc-400">({template.reviews})</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onAddToCart}
            className="px-4 py-3 aspect-square rounded-lg glass glass-hover text-white font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button
            onClick={onViewDetail}
            className="px-4 py-3 w-full rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
          >
            Zobrazit detail
          </button>
        </div>
      </div>
    </div>
  );
}
