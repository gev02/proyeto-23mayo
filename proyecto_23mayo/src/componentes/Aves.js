import React  from "react";

const Aves =() => {

    return(

        <><div class="menu">
        <p>Menu</p>
        <a class="colorLink" href="./aves.html">Aves</a>
        <a class="colorLink" href="./reptiles.html">Reptiles</a>
        <a class="colorLink" href="./mamiferos.html">Mamíferos</a>
        <a class="colorLink" href="./anfibios.html">Anfibios</a>
        <a class="colorLink" href="./peces.html">Peces</a>
    </div>
    <br />
    
    <div class="Aves">
            <h1>Aves</h1>


            <div class="img-container">
            <p>Pájaro Carpintero</p>
            <img src="./imagenes/carpintero.jpg"/>
            </div>


            <div class="img-container">
            <p>Colibri</p>
            <img src="./imagenes/colibri.jpeg"/>
            </div>

            <div class="img-container">
            <p>Gaviota</p>
            <img src="./imagenes/gaviota.jpg"/>
            </div>


            <br />
            <div class="img-container">
            <p>Paloma</p>
            <img src="./imagenes/paloma.jpg"/>
            </div>

            <div class="img-container">
            <p>Canario</p>
            <img src="./imagenes/canario.jpg" />
            </div>


            <div class="img-container">
            <p>Tucán</p>
            <img src="./imagenes/tucan.jpg" />
            </div>

           

        </div>
        <br /><br />
        <footer>
            <a class="volver" href="index.html">Volver</a>
        </footer></>



                    );
                    }
                        export default Aves