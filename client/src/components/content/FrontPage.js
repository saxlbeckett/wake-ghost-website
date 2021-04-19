import React from 'react'
import { Link } from 'react-router-dom'


const FrontPage = () => {
  const wakeGhostObject = {
    albums: [
      {
        title: "What is the Reason for Life?",
        tracks: [
          {
            one: "Ghost Warship",
            audioFile: "https://audiofilestorage2.s3.amazonaws.com/Ghost+Warship.mp3",
            lyrics: "",
            image: "https://audiofilestorage2.s3.amazonaws.com/Wake+Ghost+Cover_Demo+Fest.jpeg"
          },
          {
            two: "Not Now Madeline"
          }
        ],

      }
    ]
  }
  return(
    <div>
      <h1>Wake Ghost</h1>
      <section>
        
      </section>
      <section>
        <h3><Link to="/releases">Releases</Link></h3>
      </section>
    </div>
  )
}
export default FrontPage