import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

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
          <HiOutlinePhotograph className="w-20 h-20 text-zinc-700" />
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
            {[...Array(5)].map((_, i) => {
              const Icon =
                i < Math.floor(template.rating) ? AiFillStar : AiOutlineStar;
              return (
                <Icon
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(template.rating)
                      ? "text-emerald-400"
                      : "text-zinc-700"
                  }`}
                />
              );
            })}
          </div>
          <span className="text-sm text-zinc-400">({template.reviews})</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onAddToCart}
            className="px-4 py-3 aspect-square rounded-lg glass glass-hover text-white font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <FiShoppingCart className="w-5 h-5" />
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
