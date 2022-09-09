import { useState, useEffect } from "react"

export default function useLocalStorage(initialValue, key) {
    const getValue = () => {
        const storage = localStorage.getItem(key) // string || null

        if (storage) {
            return JSON.parse(storage) // "[]"
        }

        return initialValue
    }

    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return [value, setValue]
}