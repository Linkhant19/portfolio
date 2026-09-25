// src/components/ui/AutoPlayVideo.tsx
// this should handle my videos only playing when the user scroll to that section.

import React from "react";
import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
    src: string;
    className?: string;
};

export default function AutoPlayVideo({
    src,
    className = "",
}: AutoPlayVideoProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.currentTime = 0;
                    video.play();
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            className={`h-full w-full object-cover ${className}`}
        />
    );
}