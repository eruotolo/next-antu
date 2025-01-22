'use client'; // Importante porque usamos useEffect

import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

const VimeoVimeo = ({ videoId }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Verificamos que estamos en el cliente
        if (!containerRef.current) return;

        // Creamos la instancia del reproductor
        const player = new Player(containerRef.current, {
            id: videoId,
            width: 1920,
            height: 1080,
            responsive: true,
            controls: true,
        });

        // Opcional: Manejo de eventos
        player.on('play', () => {
            console.log('Video reproduciendo');
        });

        player.on('pause', () => {
            console.log('Video pausado');
        });

        // Limpieza al desmontar
        return () => {
            player.destroy();
        };
    }, [videoId]);

    return <div ref={containerRef} />;
};

export default VimeoVimeo;
