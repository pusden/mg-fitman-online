import './OnlineCoaching.scss';
import { Link } from 'react-router-dom';

function OnlineCoaching() {
    return (
        <section className="online-coaching">
            <div className="online-coaching__content">
                <span className="online-coaching__label">
                    TVÁ CESTA ZAČÍNÁ TADY
                </span>

                <h1>
                    ONLINE <span>COACHING</span>
                </h1>

                <h2>
                    Tréninkový plán. Osobní vedení. Skutečné výsledky.
                </h2>

                <p>
                    Získej individuální tréninkový plán, pravidelnou kontrolu pokroku a podporu na cestě za svou nejlepší verzí.
                </p>

                <h3>Co všechno získáš?</h3>

                <ul>
                    <li>Tréninkový plán podle tvých cílů</li>
                    <li>Pravidelnou kontrolu pokroku</li>
                    <li>Úprava tréninku podle výsledku</li>
                    <li>Podporu a motivaci během spolupráce</li>
                </ul>

                <Link to="/ceník" className="online-coaching__button">
                   CENÍK
                </Link>
                </div>

                <div className="online-coaching__image">
                    <img
                    src="/images/images.jpg"
                    alt="MG Fitman při tréninku s klientem"
                    />
                    </div>
                    </section>
    );
}

export default OnlineCoaching;