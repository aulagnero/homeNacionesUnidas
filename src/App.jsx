import { useState } from 'react'
import nacionesLogo from './assets/logo-naciones.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <section className='header'>
          <aside>
            <a href="http://localhost:5173/">
              <img className="logo" src={nacionesLogo} alt="Naciones Unidas" />
            </a>
          </aside>
          <nav>
            <ul className='menu'>
              <li><a href="">suscribirse</a></li>
              <li><a href="">cajas</a></li>
              <li><a href="">educación</a></li>
              <li><a><img className="iconosUsabilidad" src="src/assets/carrito.png" alt="carro de compras" /></a></li>
              <li><a><img className="iconosUsabilidad" src="src/assets/usuario.png" alt="cuenta de usuario" /></a></li>
            </ul>
          </nav>
        </section>
        <h1>Cajas de vinos y snacks <br />con nuestra curatoría <br />todos los meses <br />directamente a tu hogar.</h1>
        <div className="card">
        <p className="read-the-docs">
        Consectetur adipiscing elit. <br />Sed id accumsan tellus. Maecenas iaculis <br />
        bibendum eros, vitae venenatis ipsum. <br />
        Fusce dictum molestie venenatis.
        </p>
          <button>
            Cómo funciona
          </button>
        </div>
        
    </>
  )
}

export default App
