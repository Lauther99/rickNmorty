import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (id) => {
    const [residentsUrl, setResidentsUrl] = useState([])

    useEffect(() => {
        getLocation(id);
    }, [])

    const getLocation = (number) => {
        axios.get(`https://rickandmortyapi.com/api/location/${number}`)
            .then(res => {
                setResidentsUrl(res.data);
            })
    }

    return [residentsUrl,getLocation]
}

export default useApi