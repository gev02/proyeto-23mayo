import React  from "react";

const Reptiles =() => {

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
        
        <div class="reptiles">
                <h1>Reptiles</h1>

                <div class="reptiles">
                <p>Lacerta agilis</p>
                <img src="./imagenes/zauneidechse1.jpg"/>
                 </div>


                <div class="reptiles">
                    <p> Lycaenops</p>
                    <img src="./imagenes/lycaenops.jpg"/>
                </div>


                <div class="reptiles">
                <p>Bradysaurus</p>
                <img src="./imagenes/bradysaurus.jpg"/>
                </div>


                <div class="reptiles">
                <p>Hylonomus</p>
                <img src="./imagenes/hylonomus.jpg"/>
                </div>


                <br />



                <div class="reptiles">
                <p>Gavialis gangeticus</p>
                <img src="./imagenes/indianGharial.jpg"/>
                </div>

                
                <div class="reptiles">
                <p>Varan</p>
                <img src="./imagenes/varan.jpg"/>
                </div>
                
            </div>
            <br /><br />
            <footer>
                <a class="volver" href="index.html">Volver</a>
            </footer></>



                        );
                        }
                export default Reptiles