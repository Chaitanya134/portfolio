import { useLayoutEffect, useRef } from 'react';

const Cursor: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            cursorRef.current!.style.left = clientX + "px"
            cursorRef.current!.style.top = clientY + "px"
        }

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [])

    return (
        <div ref={cursorRef} className='fixed rounded-full h-8 w-8 backdrop-invert top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50'>
        </div>
    )
}

export default Cursor;