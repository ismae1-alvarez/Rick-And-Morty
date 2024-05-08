import { Fragment } from "react"
import { Episodes } from "../../models/EpisodesTypes"

interface Props {
  episodes  : Episodes
}

function EpisodesCard({episodes}:Props) {
  return (
    <Fragment>  
      <article className="bg-black font-thin text-xl bg-opacity-55 px-10 py-5 rounded-lg text-gray-200 w-fit">
          <h2 className="text-center text-3xl py-2 font-bold">
            {episodes.name}
          </h2>

          <ul className="grid grid-cols-2 gap-10 justify-center w-full">
            <li className="grid gap-3">
              <span>Date trasnmition : </span> <span>{episodes.air_date}</span>
            </li>
            <li className="grid gap-3">
              <span>Episode:</span> <span>{episodes.episode}</span>
            </li>
            <li>
              {/* <span>Create Date</span> <span>{episodes.created}</span> */}
            </li>
          </ul>
      </article>
    </Fragment>
  )
}
export default EpisodesCard