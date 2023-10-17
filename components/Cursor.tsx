import { useRef } from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';

const getHoveringTextScale = (cursor: HTMLDivElement) => {
    const interactable = cursor.closest(".text-container");
    let scale = 1;
    if (interactable) {
        scale = interactable.clientHeight / 32;
        scale *= 1.5;
    }
    return scale;
}

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = cursorRef.current!;

            const x = clientX - offsetWidth / 2, y = clientY - offsetHeight / 2;
            const scale = getHoveringTextScale(e.target as HTMLDivElement);
            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
            }
            cursorRef.current!.animate(keyframes, {
                duration: 1000,
                fill: "forwards"
            })
        }
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [])

    return (
        <div ref={cursorRef}
            className='fixed top-0 left-0 h-6 aspect-square backdrop-invert pointer-events-none z-50
            blob-animation'
        >
        </div>
    )
}

export default Cursor;