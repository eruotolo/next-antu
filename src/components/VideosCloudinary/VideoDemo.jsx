'use client';

import { useId, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'next-cloudinary/dist/cld-video-player.css';

const CldVideoPlayer = dynamic(() => import('next-cloudinary').then((mod) => mod.CldVideoPlayer), {
    ssr: false,
});

export default function VideoDemo({ urlVideo }) {
    const uniqueId = useId();
    const [isMounted, setIsMounted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="video-container">
            {error && <p>Error al cargar el video: {error.message}</p>}
            <CldVideoPlayer
                id={`video-${uniqueId}`}
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                apiKey={process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY}
                apiSecret={process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET}
                src={urlVideo}
                width="1920"
                height="1080"
                className="absolute left-0 top-0 h-full w-full"
                transformation={{
                    opacity: 80,
                }}
                onError={(event) => {
                    setError(event.error);
                }}
            />
        </div>
    );
}
