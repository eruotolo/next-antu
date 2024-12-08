'use client';

import { useState } from 'react';
import Image from 'next/image';

const HoverImage = ({ defaultSrc, hoverSrc, alt, width, height }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Image
                src={isHovered ? hoverSrc : defaultSrc}
                alt={alt}
                width={width}
                height={height}
                className="cursor-pointer"
            />
        </div>
    );
};

export default HoverImage;
