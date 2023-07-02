import React from 'react'
import Videos from './Videos'

const SearchTerm = ({search}) => {

  return (
    <>
     <Videos feed={search}/>
    </>
  )
}

export default SearchTerm
