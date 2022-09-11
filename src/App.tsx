import { StrictMode, useEffect, useRef } from 'react';
import { useDidMount, useWillUnmount } from 'rooks';
import {
    destroyCanvasPaint,
    initCanvasPaint,
    updateCanvasDimensions,
} from './canvas';
import { useWindowDimensions } from './useWindowDimensions';

export function App() {
    const dimensions = useWindowDimensions();
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        updateCanvasDimensions(dimensions);
    }, [dimensions]);

    useDidMount(() => {
        if (!canvasRef.current)
            return;
        const context = canvasRef.current.getContext('2d');
        if (!context)
            return;
        initCanvasPaint(context, dimensions);
    });

    useWillUnmount(() => {
        destroyCanvasPaint();
    });

    return (
        <StrictMode>
            <canvas
                width={dimensions.width}
                height={dimensions.height}
                style={{
                    width: dimensions.width,
                    height: dimensions.height,
                }}
                ref={canvasRef}
            />
        </StrictMode>
    );
}
