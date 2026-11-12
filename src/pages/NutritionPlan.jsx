import './NutritionPlan.scss';
import {Link} from 'react-router-dom';

function NutritionPlan() {
    return (
        <section className="nutrition-plan">
            <div className="nutrition-plan__content">
                <p className="nutrition-plan__tag">MG FITMAN ONLINE</p>

                <h1>
                    VÝŽIVA PRO <span>TVŮJ CÍL</span>
                </h1>

                <h2>Jez chytře. Žij zdravě. Dosahuj výsledků</h2>

                <p>
                    Správně nastavené stravování je důležitou součástí každé cesty za lepší kondicí.
                    Společně najdeme způsob, jak jíst lépe, cítit se dobře a přiblížit se cílům podle tvých očekávání.
                </p>

                <ul>
                    <li>Stravovací doporučení podle tvých cílů</li>
                    <li>Podpora při nabírání svalů i redukci váhy</li>
                    <li>Zdravější stravovací návyky pro každý den</li>
                    <li>Plán, který odpovídá tvému životního stylu</li>
                </ul>

                <Link to="/ceník" className="nutrition-plan__button">
                  CENÍK  
                </Link>
                </div>

                <div className="nutrition-plan__image">
                    <img
                    src="/images/DSC_7222-2.jpg"
                    alt="Zdravé a vyvážené jídlo"
                    />
                    </div>
                    </section>
    );
}

export default NutritionPlan;