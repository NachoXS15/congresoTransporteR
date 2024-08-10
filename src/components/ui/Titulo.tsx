import { TitleProps } from "../../config/types";
  
export default function Title({ text, align = 'left', color = 'black' }: TitleProps) {
    const alignmentClasses = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
    const colorClass = color === 'white' ? 'text-white' : 'text-black';
  
    return (
      <h2 className={`text-2xl mt-3 ml-5 mb-4 relative inline-block ${alignmentClasses} ${colorClass}`}>
        {text}
      </h2>
    );
  };
  
  