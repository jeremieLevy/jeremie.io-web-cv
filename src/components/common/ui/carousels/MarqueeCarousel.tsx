import clsx from 'clsx';
import './MarqueeCarousel.css';

type Props = {
  type: 'img' | 'text';
  items: string[];
  hasBlur?: boolean;
};
export default function MarqueeCarousel({ type, items, hasBlur }: Props) {
  return (
    <div
      className={clsx('marquee-carousel', {
        'marquee-carousel--blur': hasBlur,
      })}
    >
      <div
        className={clsx('marquee-item-group', {
          'gap-16! pr-16!': type === 'text',
        })}
      >
        {type === 'img'
          ? items.map((item, index) => (
              <img src={item} key={`a-${index}`} alt="" className="image" />
            ))
          : items.map((item, index) => (
              <div
                className="py-4 text-light/50 font-mono-alt font-bold text-6xl whitespace-nowrap"
                key={index}
              >
                {item}
              </div>
            ))}
      </div>
      <div
        aria-hidden
        className={clsx('marquee-item-group', {
          'gap-16! pr-16!': type === 'text',
        })}
      >
        {type === 'img'
          ? items.map((item, index) => (
              <img src={item} key={`a-${index}`} alt="" className="image" />
            ))
          : items.map((item, index) => (
              <div
                className="py-4 text-light/50 font-mono-alt font-bold text-6xl whitespace-nowrap"
                key={index}
              >
                {item}
              </div>
            ))}
      </div>
    </div>
  );
}
