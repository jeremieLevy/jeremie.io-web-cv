import { useEffect, useState } from 'react';

export function useImageCycle(itemCount: number, intervalMs = 4000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (itemCount <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % itemCount);
    }, intervalMs);

    return () => clearInterval(id);
  }, [itemCount, intervalMs]);

  return index;
}
