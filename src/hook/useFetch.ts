import { useState } from 'react';
import axios from 'axios';
import { ApiRickAndMorty, Result } from '../models';

const useFetch = (initialUrl:string, filter : string, filterGender:string, speciesFilter:string) => {
  // Type state ApiRickAndMorti
  const [response, setResponse] = useState<ApiRickAndMorty>();
  // Type state Endpint Resident
  const [resident, setResident] = useState<Result | null>()

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // GetApi
  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const result = await axios.get(initialUrl);
      setResponse(result.data);
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResident = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const result = await axios.get(initialUrl);
      if ((filter === 'All' || result.data.status === filter) &&
      (filterGender === 'All' || result.data.gender === filterGender) &&
      (speciesFilter === 'All' || result.data.species === speciesFilter)) {
    setResident(result.data);
      } else {
        setResident(null);
      }
   
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
  };

  return { response,resident,  error, isLoading, fetchData, fetchResident };
};

export default useFetch;
