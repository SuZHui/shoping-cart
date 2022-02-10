import { useState } from 'react';

export default function useShadow() {
  const [elevation, setElevation] = useState(0);

  return {
    elevation,
    onMouseEnter: () => setElevation(3),
    onMouseLeave: () => setElevation(0),
  };
}
