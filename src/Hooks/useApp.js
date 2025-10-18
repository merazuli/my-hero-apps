import axios from "axios";
import { useEffect, useState } from "react"

const useApp = () => {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setErr] = useState(null);

    useEffect(() => {
        setLoading(true)
        axios('../appData.json')
            .then(data => setApps(data.data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false))

    }, [])
    return { apps, loading, error }
}



export default useApp