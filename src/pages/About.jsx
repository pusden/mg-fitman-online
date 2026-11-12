import './About.scss';

function About() {
    return (
        <section className="about">
            <div className="about__content">
                <span className="about__label">
                    DISCIPLÍNA * ODHODLÁNÍ * VÝSLEDKY
                </span>

                <h1>
                    KDO JSEM,
                    <br />
                    A CO MĚ <span>POHÁNÍ VPŘED?</span>
                </h1>

                <h2>Martin Gabko - pocházím z Mělníka</h2>
                
                <p>
                    Pohyb byl součástí mého života už od dětství, ale svou cestu ke kulturistice jsem naplno našel až později. Ve 20 letech jsem se rozhodl změnit svůj život a začít se naplno věnovat tomu, co mě baví.
                </p>

                <p>
                    Postupně jsem se učil správně cvičit, poznával svět fitness a výživy a získával zkušenosti, které dnes chci předávat dál.
                </p>

                <p>
                    Mým cílem je motivovat ostatní, pomáhat jim překonávat vlastní limity a ukázat, že s disciplínou a odhodláním může každý udělat krok ke své vysněné postavě. 
                </p>

                <strong>PETARDY BROSKI !!!</strong>
                </div>

                <div className="about__image">
                    <img
                    src="/images/Petardy%20Broski.jpg"
                    alt="Martin Gabko - MG Fitman"
                    />
                </div>
                </section>
          );
     }
     
     export default About;