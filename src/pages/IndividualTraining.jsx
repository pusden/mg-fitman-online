import'./IndividualTraining.scss';
import { Link } from 'react-router-dom';

function IndividualTraining() {
  return (
    <section className="individual-training">
        <div className="individual-training__content">
            <p className="individual-training__tag">MG FITMAN ONLINE</p>

            <h1>
                INDIVIDUÁLNÍ <span>TRÉNINK</span>
            </h1>

            <h2>Makej naplno. Upgradejduj se. Překonávej své limity.</h2>

            <p>
                Každý máme jiné cíle, možnosti a tempo. 
                Individuální trénink přizpůsobíme právě tobě.
                Zaměříme se na správnou techniku, postupné zlepšování a cestu k výsledkům.
            </p>

            <ul>
                <li>Trénink přizpůsobený tvým cílům a zkušenostem</li>
                <li>Důraz na správnou techniku provedení cviků</li>
                <li>Postupné zvyšování síly a kondice</li>
                <li>Motivace a podpora při každém tréninku</li>
            </ul>

            <Link to="/ceník" className="individual-training__button">
              CENÍK
            </Link>
            </div>

            <div className="individual-training__image">
                <img
                src="/images/images%20(1).jpg"
                alt="Společná fotka z fitness prostředí"
                />
                </div>
                </section>
     );
}

export default IndividualTraining;