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
        <header className='hd'>
            <h1 className='txc'>FilmFinder</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Livros</a>
                <a href="/register">Register</a>
            </nav>
        </header>
        <main>
            <section class="highlight">
                <div class="movie-poster" > </div>
                <div class="movie-info">
                    <h2>Filmes API</h2>
                    <div className='audience'><p><strong>Favoritos:</strong> -</p></div>
                    <br />
                    <div><p><strong>Categoria:</strong>-</p></div>

                    <div className='text-container'>
                        <p>
                            Sinopse 1
                        </p>
                        <p>
                            Sinopse 2
                     </p>
                    </div>

                </div>
               
            </section>
            <section class="recommendations">
                <h3 className='txc'>Recomendações:</h3>
                <h3 className='txc'> Generos:</h3>
                <div class="recommendations-container">

                    
                        <div className="movie" id="movie1"></div>
                        <div className="movie" id="movie2"></div>
                        <div className="movie" id="movie3"></div>
                        <div className="movie" id="movie4"></div>
                        <div className="movie" id="movie5"></div>
                        <div className="movie" id="movie6"></div>
                        <div className="movie" id="movie7"></div>
                        <div className="movie" id="movie8"></div>
                        <div className="movie" id="movie9"></div>
                        <div className="movie" id="movie10"></div>
                        <div className="movie" id="movie11"></div>
                    

                </div>
            </section>
        </main>
    </div>

        </div>

    )

}
export default PrincipalPage;