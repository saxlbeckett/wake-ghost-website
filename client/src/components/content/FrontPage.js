import React from 'react'
import { Link } from 'react-router-dom'


const FrontPage = () => {

  return(
    <div>
      <h1>Wake Ghost</h1>
      <section>
        <h2>Members:</h2>
        <h4>Yams, Queen Thickems:</h4>
        <img></img>
        <p>Yams was born in 1793 where her elegance wasn't celebrated enough,<br/>
        so she looked coldly upon them all and they froze</p>
        <h4>Snot Bucket</h4>
        <img></img>
        <p>Snot Buckett was born in 2748 and knows about all the cool shit and is not even old.<br/>
        He is reverse old actually and on top of all music trends.</p>
      </section>
      <section>
        <h3><Link to="/releases">Releases</Link></h3>
      </section>
    </div>
  )
}
export default FrontPage