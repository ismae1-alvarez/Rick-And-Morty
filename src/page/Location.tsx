import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hook/useFetch';
import Hader from '../components/NavBar';
import ResidentCard from '../components/ResidentsCard';
import LocationCard from '../components/LocationCard'

function Location() {
    const [locationId, setLocationId] = useState('9');
    const [filter, setFilter] = useState<'Alive' | 'Dead' | 'Unknown' | 'All'>('All')
    const [filterGender, setfilterGender] = useState<'Female'| 'Male' | 'unknown' | 'All'>("All")
    const [speciesFilter, setSpeciesFilter] = useState<'All' | 'Human'|'Humanoid' | 'Poopybutthole' | 'Mythological' | 'Unknown' | 'Animal'|'Disease' |'Planet' |'Robot' 
|'Cronenberg' | 'Alien'>("All")
    const url = `https://rickandmortyapi.com/api/location/${locationId}`;
    const { response: location, fetchData: getLocation, error: hasError } = useFetch(url, filter, filterGender, speciesFilter);
    
    const inputId = useRef<HTMLInputElement>(null);
  
    
    useEffect(() => {
      getLocation();
    }, [locationId]);
  
    const hadleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const valueIput  = inputId.current?.value.trim()
      if(valueIput){
        setLocationId(valueIput);
      }
    };



  
    return (
      <div className='w-full w-max-[1440px] mx-auto  min-h-screen '>
        <Hader/>

        <section className='p-5 flex gap-2 flex-wrap font-thin'>
  
          <form onSubmit={hadleSubmit} className='md:w-fit w-full' >
            <div className='bg-gray-100  md:w-fit rounded-xl relative  border border-gray-500 p-1 flex items-center'>
              <img src="/img/search.svg" className='ml-2 h-7 w-7' alt="" />
              <input ref={inputId} className=' bg-transparent focus:outline-none p-3 font-thin text-xl' placeholder='serching' type="text" />
            </div>
          </form>
            

          <section className='flex flex-wrap w-full md:w-fit justify-between'>
            {/* Status */}
            <div className="relative flex-wrap flex items-center  justify-center text-xl p-3">
              <select  onChange={(e)=> setFilter(e.target.value as typeof filter)}   className="appearance-none border border-gray-300 rounded-xl px-10 bg-white focus:outline-none focus:border-blue-500 h-full py-2">
                <option value="All">All Status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
              <img src="/img/more.svg" className="absolute bottom-4.5 right-5 h-5 w-5 z-0" alt="more" />
            </div>
            
            {/* Gender */}
            <div className="relative flex-wrap flex items-center  justify-center text-xl p-3">
              <select onChange={(e) => setfilterGender(e.target.value as typeof filterGender)} className="appearance-none border border-gray-300 rounded-xl px-10 bg-white focus:outline-none focus:border-blue-500 h-full py-2">
                <option value="All">Alll Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="unknown">Unknown</option>
              </select>
              <img src="/img/more.svg" className="absolute bottom-4.5 right-5 h-5 w-5 z-0" alt="more" />
            </div>

            {/* Species */}
            <div className="relative flex-wrap flex items-center  justify-center text-xl p-3">
              <select  onChange={(e)=> setSpeciesFilter(e.target.value as typeof speciesFilter)}  defaultValue="1" className="appearance-none border border-gray-300 rounded-xl px-10 bg-white focus:outline-none focus:border-blue-500 h-full py-2">
                <option value="All">All Species</option>
                <option value="Human">Human</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Poopybutthole">Poopybutthole</option>
                <option value="Mythological">Mythological</option>
                <option value="Unknown">Unknown</option>
                <option value="Animal">Animal</option>
                <option value="Disease">Disease</option>
                <option value="Planet">Planet</option>
                <option value="Robot">Robot</option>
                <option value="Cronenberg">Cronenberg</option>
                <option value="Alien">Alien</option>
              </select>
              <img src="/img/more.svg" className="absolute bottom-4.5 right-5 h-5 w-5 z-0" alt="more" />
            </div>
          </section>

        </section>
        



          {hasError ? (
            <h3 className='p-5'>Hey! Debes proporcionar un ID entre 1 y 126.</h3>
          ) : (

            <>
              {location ? <LocationCard location={location}/> :  null}
              <div className='flex   justify-center md:justify-between flex-wrap p-5 gap-7 md:gap-6'>
                {location?.residents.map((url) => (
                  <ResidentCard key={url} url={url} filter={filter} filterGender={filterGender} speciesFilter={speciesFilter}/>
                ))}
              </div>
              {/* <IsLogin/> */}
            </>
          )}
      </div>
    );
}
export default Location