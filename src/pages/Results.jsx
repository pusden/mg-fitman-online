import './Results.scss';

function Results() {
    const results = [
  {
    id: 1,
    title: 'PROMĚNA POSTAVY',
    description: 'Individuální trénink a pravidelná práce na sobě.',
    duration: '6 MĚSÍCŮ',
    image: '/images/promněna.jpg',
  },
  {
    id: 2,
    title: 'SÍLA A KONDICE',
    description: 'Budování síly, lepší kondice a zdravější životní styl.',
    duration: '4 MĚSÍCE',
    image: '/images/promněna%202.jpg',
  },
  {
    id: 3,
    title: 'NOVÝ ŽIVOTNÍ STYL',
    description: 'Pravidelnost, disciplína a dlouhodobé výsledky.',
    duration: '12 MĚSÍCŮ',
    image: '/images/promněna%203.jpg',
  },
];

 return (
    <section className="results">
        <div className="results__header">
            <span>DISCIPLÍNA * VYTRVALOST * VÝSLEDKY</span>
            <h1>VÝSLEDKY MLUVÍ ZA VŠE</h1>
            <p>
                Každá proměna začíná rozhodnutím.
                Každý výsledek je důkazem tvrdé práce.
            </p>
        </div>

        <div className="results__grid">
            {results.map((result) => (
                <article className="results__card" key={result.id}>
                    <span className="results__number">
                        0{result.id}
                    </span>

                    <img 
                    src={result.image}
                    alt={'Promněna postavy - ${result.title}'}
                    className="results__image"
                    />

                    <h2>{result.title}</h2>
                    <p>{result.description}</p>

                    <strong>{result.duration}</strong>
                    </article>
            ))}
            <div className="results__testimonials">
              <h2>ZKUŠENOSTI <span>KLIENTŮ</span></h2>

              <div className="results__testimonials-grid">
                <article className="results__testimonial">
                  <span className="results__quote">"</span>
                  <p>
                    Díky individuálnímu přístupu jsem mohl pracovat na své kondici a postupně překonávat vlastní limity.
                  </p>
                  <strong>UKÁZKOVÁ REFERENCE 01</strong>
                </article>

                <article className="results__testimonial">
                  <span className="results__quote">"</span>
                  <p>
                    Díky Martinovi jsem se naučila správně cvičit, lépe plánovat trénink a být důslednější.
                  </p>
                  <strong>UKÁZKOVÁ REFERENCE 02</strong>
                </article>

                <article className="results__testimonial">
                  <span className="results__quote">"</span>
                  <p>
                    Pravidelnost a disciplína mi pomohly změnit přístup ke cvičení i každodennímu životu.
                  </p>
                  <strong>UKÁZKOVÁ REFERENCE 03</strong>
                </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Results;