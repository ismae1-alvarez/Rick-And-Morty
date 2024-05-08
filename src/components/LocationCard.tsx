import { Fragment } from "react"
import { ApiRickAndMorty } from "../models"

interface Props {
  location :  ApiRickAndMorty  
}



function Location({location}:Props) {



  return (
    <Fragment>
      <article className="mx-auto  md:m-5   flex flex-col items-center  px-10 p-5 rounded-lg bg-black bg-opacity-65 text-white font-thin text-2xl space-y-5 my-5">
      <h2 >{location?.name}</h2>
      <ul className="grid  grid-cols-3 gap-5" >
        <li  className="grid gap-1">
          <span  className="text-opacity-5  text-lg" >Type: </span> <span >{location?.type}</span>
        </li>
        <li className="grid gap-1">
          <span className="text-opacity-5  text-lg">Dimension: </span> <span >{location?.dimension}</span>
        </li>
        <li  className="grid gap-1">
          <span className="text-opacity-5  text-lg">Population: </span> <span >{location?.residents.length}</span>
        </li>
      </ul>
    </article>
    </Fragment>
  )
}
export default Location