import { Fragment, useEffect, useState, useRef } from "react"
import NavBar from "../../components/NavBar"
import useEpisodes from "../../hook/useEpisodes"
import ResidentCard from "../../components/ResidentsCard"
import EpisodesCard from "./EpisodesCard"


function Episodes() {

  const [numberEpisodios, setNumberEpisodios] = useState("1")
  const [filter, setFilter] = useState("All")
  const [filterGender, setfilterGender] = useState('All')
  const [speciesFilter, setSpeciesFilter] = useState('All')


  const url = `https://rickandmortyapi.com/api/episode/${numberEpisodios}`
  const {Episodes : episodes, useDataEpisodes: dataEpisodes}  =  useEpisodes(url)

  const inputId = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dataEpisodes()
  }, [numberEpisodios, filterGender])

  const hadleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valueIput  = inputId.current?.value.trim()
    if(valueIput){
      setNumberEpisodios(valueIput);
    }
  };
  
  console.log(episodes)
  return (
    <Fragment>
      <NavBar/>

      <section className='p-5 flex gap-2 flex-wrap font-thin'>

          <form onSubmit={hadleSubmit} className='md:w-fit w-full' >
            <div className='bg-gray-100  md:w-fit rounded-xl relative  border border-gray-500 p-1 flex items-center'>
              <img src="/img/search.svg" className='ml-2 h-7 w-7' alt="" />
              <input ref={inputId} className=' bg-transparent focus:outline-none p-3 font-thin text-xl' placeholder='serching' type="text" />
            </div>
          </form>

          <section className="flex flex-wrap">
            {/* Status */}
            <div className="relative flex-wrap flex items-center  justify-center text-xl p-3">
              <select  onChange={(e)=> setFilter(e.target.value as typeof filter)}   className="appearance-none border border-gray-300 rounded-xl px-10 bg-white focus:outline-none focus:border-blue-500 h-full py-2">
                {/* <option value="" disabled hidden>Status</option> */}
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
                <option value="All">All Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="unknown">Unknown</option>
              </select>
              <img src="/img/more.svg" className="absolute bottom-4.5 right-5 h-5 w-5 z-0" alt="more" />
            </div>

              {/* Species */}
              <div className="relative  flex-wrap flex items-center  justify-center text-xl p-3">
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

      <div className="p-5 flex flex-col items-center my-5">
        {episodes ? <EpisodesCard episodes={episodes}/> :null }
      </div>
      <div className='flex   justify-center md:justify-between flex-wrap p-5 gap-7 md:gap-6'>

      {
        episodes?.characters.map((url:string)=> {
          return <ResidentCard key={url} url={url} filter={filter} filterGender={filterGender} speciesFilter={speciesFilter}/>
        })
      }
      </div>

    </Fragment>
  )
}
export default Episodes