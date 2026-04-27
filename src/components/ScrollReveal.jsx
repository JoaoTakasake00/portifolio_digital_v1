import { useEffect, useMemo, useRef, useState } from "react";

const EASING_PRESETS = {
  easeOut: "ease-out",
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
};

function ScrollReveal({
  as = "div",
  children,
  className = "",
  style,
  variant = "slide-up",
  duration = 800,
  delay = 0,
  order = 0,
  stagger = 90,
  distance = 28,
  scaleFrom = 0.97,
  easing = "smooth",
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  enableExitFade = true,
  exitFadeDistance = 64,
}) {
  const elementRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef(0);
  const opacityRef = useRef(1);
  const supportsObserver = useMemo(() => {
    if (typeof window === "undefined") return false;
    const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    return !prefersReducedMotion && "IntersectionObserver" in window;
  }, []);
  const [isVisible, setIsVisible] = useState(() => !supportsObserver);
  const [exitOpacity, setExitOpacity] = useState(1);
  const ComponentTag = as;

  const computedDelay = useMemo(() => delay + order * stagger, [delay, order, stagger]);
  const computedEasing = EASING_PRESETS[easing] ?? easing;

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !supportsObserver) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, supportsObserver, threshold]);

  useEffect(() => {
    if (typeof window === "undefined" || !enableExitFade) return undefined;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return undefined;

    const element = elementRef.current;
    if (!element) return undefined;

    const clamp = (value) => Math.max(0, Math.min(1, value));
    const fadeZone = Math.max(50, Math.min(80, exitFadeDistance));

    const updateOpacity = () => {
      rafIdRef.current = 0;

      const currentScrollY = window.scrollY || window.pageYOffset;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (!isVisible || !isScrollingUp) {
        if (opacityRef.current !== 1) {
          opacityRef.current = 1;
          setExitOpacity(1);
        }
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        if (opacityRef.current !== 1) {
          opacityRef.current = 1;
          setExitOpacity(1);
        }
        return;
      }

      const startFadeAt = viewportHeight - fadeZone;
      const isInBottomFadeZone = rect.bottom >= startFadeAt && rect.bottom <= viewportHeight;
      const nextOpacity = isInBottomFadeZone ? clamp((rect.bottom - startFadeAt) / fadeZone) : 1;

      if (Math.abs(nextOpacity - opacityRef.current) > 0.01) {
        opacityRef.current = nextOpacity;
        setExitOpacity(nextOpacity);
      }
    };

    const requestUpdate = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = window.requestAnimationFrame(updateOpacity);
    };

    lastScrollYRef.current = window.scrollY || window.pageYOffset;
    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [enableExitFade, exitFadeDistance, isVisible]);

  return (
    <ComponentTag
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${variant} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{
        ...style,
        "--sr-duration": `${duration}ms`,
        "--sr-delay": `${computedDelay}ms`,
        "--sr-distance": `${distance}px`,
        "--sr-scale-from": scaleFrom,
        "--sr-easing": computedEasing,
        "--sr-exit-opacity": exitOpacity,
      }}
    >
      {children}
    </ComponentTag>
  );
}

export default ScrollReveal;
