/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export default function useOnScreen(ref, rootMargin = "100px") {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line no-console
        // console.log(ref.current)
        if (ref.current == null) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.observe(ref.current)
        // eslint-disable-next-line consistent-return
        return () => {
            if (ref.current == null) return
            observer.unobserve(ref.current)
        }
    }, [ref.current, rootMargin])

    return isVisible
}