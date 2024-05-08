import { Fragment, useEffect } from 'react';
import useFetch from '../hook/useFetch';


interface Props {
  url  :  string;
  filter : string;
  filterGender : string, 
  speciesFilter :  string
}


const ResidentCard = ({ url, filter , filterGender, speciesFilter}:Props) => {

  const { resident: resident, fetchResident: getPerson } = useFetch(url, filter, filterGender, speciesFilter );

  useEffect(() => {
    getPerson();

  }, [filter, filterGender, speciesFilter]);
  return (
    <Fragment>
      {resident && 
      <article className='rounded-xl bg-[#062226] overflow-hidden text-white font-thin relative  transition-all duration-400 ease-linear hover:-translate-y-3'>
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
    </article>}
    </Fragment>
    
  );
};

export default ResidentCard;
