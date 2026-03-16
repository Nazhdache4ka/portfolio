import { useLottie } from 'lottie-react';
import { Link } from 'react-router-dom';
import animationData from './bulldog-lottie.json';

export function LottieLogo() {
  const { View } = useLottie({
    animationData,
    loop: true,
  });

  return <Link to="/">{View}</Link>;
}
