'use client';

import { useEffect, useState, useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';

interface SplitTextProps {
    text?: string;
    className?: string;
    delay?: number;
    animationFrom?: Record<string, string | number>;
    animationTo?: Record<string, string | number>;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right';
    onLetterAnimationComplete?: () => void;
    style?: React.CSSProperties;
}

export default function SplitText({
    text = '',
    className = '',
    delay = 40,
    animationFrom = { opacity: 0, transform: 'translate3d(0,60px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    threshold = 0.1,
    rootMargin = '-50px',
    textAlign = 'left',
    onLetterAnimationComplete,
    style,
}: SplitTextProps) {
    const words = text.split(' ').map(word => word.split(''));
    const letters = words.flat();
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(el);
                }
            },
            { threshold, rootMargin }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        letters.length,
        letters.map((_, i) => ({
            from: animationFrom,
            to: inView
                ? async (next: (val: Record<string, string | number>) => Promise<void>) => {
                    await next(animationTo);
                    animatedCount.current += 1;
                    if (
                        animatedCount.current === letters.length &&
                        onLetterAnimationComplete
                    ) {
                        onLetterAnimationComplete();
                    }
                }
                : animationFrom,
            delay: i * delay,
            config: { tension: 80, friction: 20 },
        }))
    );

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign,
                display: 'inline',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                ...style,
            }}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.map((letter, letterIndex) => {
                        const index =
                            words.slice(0, wordIndex).reduce((acc, w) => acc + w.length, 0) + letterIndex;
                        return (
                            <animated.span
                                key={index}
                                style={{
                                    ...springs[index],
                                    display: 'inline-block',
                                    willChange: 'transform, opacity',
                                }}
                            >
                                {letter}
                            </animated.span>
                        );
                    })}
                    <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
                </span>
            ))}
        </p>
    );
}
