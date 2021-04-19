import React from 'react' 
import { Link } from 'react-router-dom'
import AlbumShowPage from './AlbumShowPage'

const AlbumIndex = (props) => {
  return(
    <div>Albums
      <ul>
        <AlbumShowPage></AlbumShowPage>
      </ul>
    </div>
  )
}

export default AlbumIndex