import './PrincipalPage.css'

import Inter from '../Imgs/Inter.jpeg';
import Cooper from '../Imgs/Cooper.jpeg';
import Brand from '../Imgs/Brand.jpeg';
import Tom from '../Imgs/Tom.jpeg';
import Murphy from '../Imgs/Murphy.jpeg';

function PrincipalPage(){

    return(

        <div className='bodyM'>
        
        <div class="container">
        <header>
            <h1>FilmFinder</h1>
            <nav>
                <a href="#">Filmes</a>
                <a href="#">Livros</a>
                <a href="/register">Register</a>
            </nav>
        </header>
        <main>
            <section class="highlight">
                <div class="movie-poster" ><img src={Inter} className='Inter'></img> </div>
                <div class="movie-info">
                    <h2>Interestelar</h2>
                    <div className='audience'><p><strong>Avaliação da audiência:</strong> 86%</p></div>

                    <div className='text-container'>
                        <p>
                            As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão
                            de verificar possíveis planetas para receberem a população mundial,
                            possibilitando a continuação da espécie.
                        </p>
                        <p>
                            Cooper é chamado para liderar o grupo e aceita a missão sabendo
                             que pode nunca mais ver os filhos.
                            Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
                     </p>
                    </div>

                </div>
                <div class="cast">
                    <h3>Cast:</h3>
                    <div class="actor" id="actor1"> <img src={Cooper} className='ac1'></img></div>
                    <div class="actor" id="actor2"> <img src={Brand} className='ac2'></img></div>
                    <div class="actor" id="actor3"> <img src={Tom} className='ac3'></img></div>
                    <div class="actor" id="actor4"> <img src={Murphy} className='ac4'></img></div>
                </div>
            </section>
            <section class="recommendations">
                <h3>Recomendações:</h3>
                <div class="recommendations-container">

                    
                        <div class="movie" id="movie1"></div>
                        <div class="movie" id="movie2"></div>
                        <div class="movie" id="movie3"></div>
                        <div class="movie" id="movie4"></div>
                        <div class="movie" id="movie5"></div>
                    

                </div>
            </section>
        </main>
    </div>

        </div>

    )

}
export default PrincipalPage;