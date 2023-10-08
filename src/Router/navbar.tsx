import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
        <div className="flex">
            <div className="animacion2">    
            </div>  <h2>El que madruga dios lo ayuda</h2>
            <h2><Link to= {"/home"} >Home</Link></h2>
            <h2><Link to= {"/content"} >Content </Link></h2>
            <h2><Link to= {"/about"} >Musica</Link></h2>
            <h2><Link to= {"/Tienda"} >Tienda</Link></h2>
            <h2><Link to= {"/Juego"} >Juego</Link></h2>
          
            <br />
            <div className="animacion2">    
            </div>


        </div>
    </nav>
  )
}

export default Navbar