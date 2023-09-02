import { useState } from 'react'
import './Middle.css'

function Middle() {

  return (
    <>
      <section className='middle'>
        <div>
          <p className='titulo'>¿Cómo funciona?</p>
          <p className="read-the-docs">
        Consectetur adipiscing elit. <br />Sed id accumsan tellus. Maecenas iaculis
        bibendum eros, vitae venenatis ipsum.
        </p>
        </div>
      <div> 
        <img className="tablet" src="src/assets/tablet.jpg" alt="elige" />
      </div>
      <div>
        <img className="tablet" src="src/assets/woman-receiving-parcel.jpg" alt="recibe" />
      </div>
      <div>
        <img className="tablet"src="src/assets/bebiendo-vino.jpg" alt="disfruta" />
      </div>



      </section>

    </>
  )
}

export default Middle
