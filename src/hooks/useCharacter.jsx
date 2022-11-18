import axios from "axios"
import { useEffect, useState } from "react"

const useCharacter = (url) => {
    const [character, setCharacter] = useState([])
    useEffect(()=>{
        getData()
    }, [])

    function getData (){
        axios.get(url)
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    }
    return [character, getData]
}

export default useCharacter