import { Fragment, useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import useCharacter from "../../hook/useCharacter";
function Characters() {
  const [characters, setCharacters] = useState("40")
  
  const url =`https://rickandmortyapi.com/api/character/?page=${characters}`

  const {fetchData: getLocation, characterData:respon} = useCharacter(url)
  // console.log(url)

  useEffect(() => {
  
    getLocation()
  }, [characters])


  const changeValue= (operacion : 'sumar' | 'restar')=>{
    if(operacion === 'sumar'){
      setCharacters(e=> {
        console.log(e)

        return e === '42' ?e : (parseInt(e)+ 1).toString()   
      })
    }else if(operacion === 'restar'){
      setCharacters(e=> (parseInt(e)- 1).toString())
    }
  }


  return (
    <Fragment>
      <NavBar/>
      <section className='p-5 flex gap-2 flex-wrap font-thin'>
          <form className='md:w-fit w-full' >
            <div className='bg-gray-100  md:w-fit rounded-xl relative  border border-gray-500 p-1 flex items-center'>
              <img src="/img/search.svg" className='ml-2 h-7 w-7' alt="" />
              <input  className=' bg-transparent focus:outline-none p-3 font-thin text-xl' placeholder='serching' type="text" />
            </div>
          </form>
      </section> 
      <div>
      <button onClick={()=> changeValue("restar")} className="px-5 py-3 bg-gray-400  rounded ">
        page 1
      </button>
      <button onClick={()=> changeValue("sumar")} className="px-5 py-3 bg-gray-400  rounded ">
        page 1
      </button>
      </div>
      <div className='flex   justify-center md:justify-between flex-wrap p-5 gap-7 md:gap-6'>
        {
          respon?.results.map(resident => {
            return(
              <article key={resident.id} className='rounded-xl bg-[#062226] overflow-hidden text-white font-thin relative  transition-all duration-400 ease-linear hover:-translate-y-3'>
              <header>
                <img src={resident?.image} alt="" />
                <div className='bg-[#062226] py-1 px-3  flex gap-1 items-center absolute rounded-r-lg top-5'>
                  <span className={`bg-gray-600 rounded-full h-4 w-4 ${resident?.status === 'Alive' ? 'bg-green-600' : resident?.status === 'Dead' ? 'bg-red-600' : ''}`}></span>
                  <div className='text-gray-100'>{resident?.status}</div>
                </div>
              </header>
              <h3 className='text-xl text-center py-2 border-b-red-900 '>{resident?.name}</h3>
              <ul className='pl-5 py-3'>
                <li className='flex flex-col'>
                  <span className='text-lg  opacity-20 ml-3'>Species</span> <span className='text-xl '>{resident?.species}</span>
                </li>
                <li className='flex flex-col'>
                  <span className='text-lg  opacity-20 ml-3'>Origin</span> <span className='text-xl'>{resident?.origin.name}</span>
                </li>
                <li className='flex flex-col'>
                  <span className='text-lg  opacity-20 ml-3'>Episodes where appear</span> <span className='text-xl'>{resident?.episode.length}</span>
                </li>
              </ul>
              <hr />
            </article>
            )}
          )
        }
      </div> 

    </Fragment>
  )
}
export default Characters