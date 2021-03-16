import React from 'react'

const AudioPlayers = (props) => {
  return(
    <div>
      <section>
        <img 
        alt="What is the reason for life EP cover"
        height="400px"
        width="400px"
        src="https://audiofilestorage2.s3.amazonaws.com/Wake+Ghost+Cover_Demo+Fest.jpeg"></img>
      </section>
      <section>
        <audio
          controls
          preload="auto"
          src="https://audiofilestorage2.s3.amazonaws.com/Ghost+Warship.mp3">
              Your browser does not support the
              <code>audio</code> element.
        </audio>
        <section>
          <audio controls 
          preload="auto"
          src="https://audiofilestorage2.s3.amazonaws.com/Not+Now+Madeline.mp3">
              Your browser does not support the
              <code>audio</code> element.
          </audio>
        </section>
        <section>
          <audio 
          controls 
          preload="auto" 
          src="https://audiofilestorage2.s3.amazonaws.com/Le+Uno.mp3">
              Your browser does not support the
              <code>audio</code> element.
          </audio>
        </section>
        <section>
          <audio 
          controls 
          preload="auto" 
          src="https://audiofilestorage2.s3.amazonaws.com/Kill+Me.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </section>
      </section>
    </div>
  )
}
export default AudioPlayers