import { Link } from 'react-router-dom';
import './Hero.scss';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__content">
                <span className="hero__label">
                    FITNESS * DISCIPLÍNA * VÝSLEDKY
                </span>

                <h2 className="hero__slogan">
                    PETARDY BROSKI !
                </h2>

                <h1>
                 TVOJE CESTA
                    <br />
                    <span>TVŮJ VÝSLEDEK</span>
                </h1>

                <p className="hero__description">
                    Překonej svoje limity. Posouvej hranice.
                    Začni pracovat na nejlepší verzi sebe sama.
                </p>

                <Link to="/spoluprace" className="hero__button">
                    NEVÁHEJ A ŠVÍSKEJ!!!
                </Link>
            </div>

            <div className="hero__image">
                <img
            src="/images/Petardy%20Broski.jpg"
            alt="Martin - MG Fitman"
            />
            </div>
        </section>
    );
}

export default Hero;