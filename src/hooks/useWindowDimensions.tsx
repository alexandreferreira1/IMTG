import { useIsomorphicLayoutEffect } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function useWindowDimentions() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

    const handleSize = useCallback(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })

    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleSize)

        return () => {
            window.removeEventListener('resize', handleSize)
        }
    }, [handleSize])

    useIsomorphicLayoutEffect(() => {
        handleSize()
    }, [handleSize])

    return windowSize
}