import { useState } from "react"


const useRandom = (max, min) => {
    const [random, setRandom] = useState(randomNumber()) 
    function randomNumber() {
        return Math.floor(Math.random() * (max - min) + min)
    }
    return [random]
}

export default useRandom