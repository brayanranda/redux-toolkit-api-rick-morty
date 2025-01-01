import React from 'react'
import { cssBtn } from '../../../utils/cssUtil'
import { useSelector } from 'react-redux'

interface CharacterPaginatorProps { 
  handlePrevious: () => void
  handleNext: () => void
}

export default function CharacterPaginator({ handlePrevious, handleNext }: CharacterPaginatorProps) {
  const { page } = useSelector((state) => state.characters)

  return (
    <div className='flex justify-between items-center mb-10'>
      <p className='text-3xl font-bold'>List characters | {page}</p>
      <div className="flex gap-2">
        <button
          onClick={handlePrevious}
          className={cssBtn}
          disabled={page === 1}
        >Previous</button>
        <button
          onClick={handleNext}
          className={cssBtn}
        >Next</button>
      </div>
    </div>
  )
}
