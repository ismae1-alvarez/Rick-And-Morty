import { useState } from "react"
import { Episodes } from "../models/EpisodesTypes"
import axios from "axios";

function useEpisodes(url:string) {
    const [Episodes, setEpisodes] = useState<Episodes>();
    
    const useDataEpisodes = async() =>{
        try {
            const result = await axios.get(url);
            setEpisodes(result.data);
        } catch (error) {
          //   setError(true)
            console.log(error)
          } finally {
          //   setIsLoading(false);
          }
    }

    return {Episodes, useDataEpisodes} 
}
export default useEpisodes