import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import Movie from './Movie';

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios.get(fetchURL).then(res => {
      setMovies(res.data.results)
    })
  }, [fetchURL])
  console.log(movies)

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft 
        onClick={slideLeft}
        className='text-white bg-opacity-50 h-full bg-gradient-to-r from-black left-0 absolute opacity-75 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={60}/>
        <div 
          id={'slider' + rowId} 
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight 
        onClick={slideRight}
        className='text-white bg-opacity-50 h-full bg-gradient-to-l from-black right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={60}/>
      </div>
    </>
  )
}

export default Row