import { useImageCycle } from '@/hooks/useImageCycle';

type FadeImageProps = {
  images: string[];
  intervalMs?: number;
  className?: string;
  alt?: string;
};

export default function FadeImage({
  images,
  intervalMs = 4000,
  className = '',
  alt = '',
}: FadeImageProps) {
  const currentIndex = useImageCycle(images.length, intervalMs);

  return (
    <>
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${className} ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  );
}
