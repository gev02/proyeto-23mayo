
import './App.css';

function App() {
  return (
    <>
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/reptiles">Reptiles</Link> |{" "}
        <Link to="/aves">Aves</Link>
        <Link to="/mamiferos">Mamíferos</Link>
      </nav>
      <h1>Estas son las familias de animales</h1>
    </div>
    <br/>
        <div class="animales">
          <a href="./aves.html">Aves</a>
        </div>

        <div class="animales">
          <a href="./reptiles.html">Reptiles</a>
        </div>

        <div class="animales">
          <a href="./mamiferos.html">Mamíferos</a>
        </div> 

        <div class="animales">
          <a href="./anfibios.html">Anfibios</a>
        </div>

        <div class="animales">
          <a href="./peces.html">Peces</a>
        </div> 
        </>

        
        );
        }

        export default App;
      

