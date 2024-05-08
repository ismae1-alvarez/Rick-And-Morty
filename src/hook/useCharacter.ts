import { useState } from "react"
import {  CharacterModels } from "../models/CharacterTypes"
import axios from "axios"

function useCharacter(initialUrl:string) {
  const [characterData, setCharacterData] = useState<CharacterModels>()

  const fetchData = async () => {
    try {
      const result = await axios.get(initialUrl);
      setCharacterData(result.data);
    } catch (error) {
    //   setError(true)
      console.log(error)
    } finally {
    //   setIsLoading(false);
    }
  };

  return {fetchData, characterData}
}
export default useCharacter