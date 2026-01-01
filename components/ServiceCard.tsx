import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  monthlyPrice: string;
  totalPrice: string;
  description: string;
  imageUrl?: string;
}

export default function ServiceCard({
  title,
  monthlyPrice,
  totalPrice,
  description,
  imageUrl,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Price badge */}
      <div className="bg-gray-100 px-4 py-2 text-right">
        <span className="text-lg font-semibold" style={{ color: '#0a0a0a' }}>{monthlyPrice}</span>
      </div>

      {/* Image */}
      <div className="relative h-64 bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#0a0a0a' }}>{title}</h3>
        
        <button className="w-full bg-black text-white py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-base font-semibold hover:bg-gray-800 transition-colors mb-3 sm:mb-4">
          BUY NOW
        </button>

        {/* Total price */}
        <div className="flex items-baseline mb-3 sm:mb-4">
          <span className="text-base sm:text-lg" style={{ color: '#0a0a0a' }}>$</span>
          <span className="text-2xl sm:text-3xl font-bold" style={{ color: '#0a0a0a' }}>{totalPrice}</span>
        </div>

        {/* Description */}
        <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          <div className="mb-3 sm:mb-4 whitespace-pre-line">{description}</div>
          <p className="text-xs italic text-gray-500">
            *Payment plans available through Affirm, Klarna, and Afterpay. Monthly payment dependent upon plan. Continue to checkout to see payment options.
          </p>
        </div>
      </div>
    </div>
  );
}

