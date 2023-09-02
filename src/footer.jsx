import { useState } from 'react'
import './Middle.css'

function Footer() {

  return (
    <>
      <section className='footer'>
        <div>
        <ul>
          <li>Servicio a cliente</li>
          <li>Sobre nosotros</li>
          <li>Preguntas frecuentes</li>
          <li>Opiniones sobre el sitio</li>
        </ul>
        </div>
        <div>
          <ul>
            <li><a href=""><img className= 'redesSociales' src="src/assets/018.png" alt="iconos RRSS" /></a></li>
            <li>síguenos en Redes Sociales</li><br />
          </ul>
        </div>
        <div>
        <ul>
        <li><input type="text" /></li>
        <li>suscríbete a nuestro newsletter</li>
        </ul>
        </div>
        <div>
          <ul>
            <li><img className="usura" src="src/assets/medios-de-pago.png" alt="medios de pago" /></li>
          </ul>
        </div>
      </section>

    </>
  )
}

export default Footer
