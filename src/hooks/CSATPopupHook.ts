/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import useCSAT from "./CSATHook"

const useCSATPopup = (ID_FUNC: number) => {


    const [ showCSAT, setShowCSAT ] = useState(true)
    const [showCSATPopup, setShowCSATPopup] = useState(false);
    const { postRating } = useCSAT()

    const alreadyRated = () => {
        const bool = Boolean( localStorage.getItem(`kauan-13.moodify:csat:${ID_FUNC}`) )
        setShowCSAT(!bool)
    }

    const handleSubmit = (e: any, rating: number, id: number, name: string) => {
        e.preventDefault()
        console.log({ rating })
        setShowCSAT(false)
        setShowCSATPopup(false)

        postRating({ function_name: name, function_id: id, rating: rating })

        localStorage.setItem(`kauan-13.moodify:csat:${id}`, 'true')
    }
    return { ID_FUNC, showCSAT, setShowCSAT, postRating, alreadyRated, handleSubmit,showCSATPopup, setShowCSATPopup }

}

export default useCSATPopup