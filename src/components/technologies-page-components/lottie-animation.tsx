import { useLottie } from 'lottie-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LottieAnimation({ animationData }: { animationData: any }) {
  const { View } = useLottie({
    animationData,
    loop: true,
  });

  if (!View) return null;

  return View;
}
