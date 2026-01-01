import { FaStethoscope } from 'react-icons/fa';

interface LogoProps {
  invert?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export default function Logo({ invert = false, size = 'medium' }: LogoProps) {
  const iconColor = invert ? 'text-white' : 'text-black';
  const textColor = invert ? 'text-white' : 'text-black';
  const subtextColor = invert ? 'text-gray-300' : 'text-gray-600';

  // Size configurations
  const sizeConfig = {
    small: {
      icon: 'w-8 h-8 sm:w-10 sm:h-10',
      mainText: 'text-sm sm:text-base md:text-lg',
      subText: 'text-[8px] sm:text-[9px] md:text-[10px]',
      gap: 'gap-3',
    },
    medium: {
      icon: 'w-8 h-8 sm:w-10 sm:h-10',
      mainText: 'text-sm sm:text-base md:text-lg',
      subText: 'text-[8px] sm:text-[9px] md:text-[10px]',
      gap: 'gap-3',
    },
    large: {
      icon: 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24',
      mainText: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      subText: 'text-xs sm:text-sm md:text-base',
      gap: 'gap-4 sm:gap-6',
    },
    xlarge: {
      icon: 'w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48',
      mainText: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
      subText: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      gap: 'gap-6 sm:gap-8 md:gap-10',
    },
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex items-center ${config.gap} h-full`}>
      {/* Medical Icon */}
      <div className={`${iconColor} flex-shrink-0`}>
        <FaStethoscope className={config.icon} />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className={`${textColor} ${config.mainText} font-bold leading-tight`}>
          DR. BATALOV
        </span>
        <span className={`${subtextColor} ${config.subText} font-semibold leading-tight`}>
          ENDOCRINOLOGY • HORMONES
        </span>
      </div>
    </div>
  );
}

