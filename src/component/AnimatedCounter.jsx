
import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

export const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = from;

    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = to;
      return;
    }

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};
