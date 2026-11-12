import './Ceník.scss';

function Ceník() {
    const prices = [
{

number: '01',
title: 'ONLINE COACHING',
price: '1 490 Kč',
unit: '/měsíc',
description: 'Individuální tréninkový plán, pravidelná kontrola a vedení,',
features: ['Tréninkový plán na míru', 'Pravidelná kontrola', 'Individuální přístup'],
},
{
    number:'02',
    title:'VÝŽIVOVÝ PLÁN',
    price:'990 Kč',
    unit:'/plán',
    description: 'Stravovací plán přispůsobený tvému životnímu stylu.',
    features: ['Jídelní plán na míru', 'Přehledné doporučení', 'Zohlednění tvých cílů'],
},
{
    number:'03',
    title:'INDIVIDUÁLNÍ TRÉNINK',
    price:'490 Kč',
    unit: '/lekce',
    description: 'Osobní přístup, správná technika a motivace',
    features: ['Osobní vedení', 'Kontrola techniky', 'Motivace a podpora'],
},
    ];

    return (
        <section className="ceník">
            <div className="ceník__container">
                <p className="ceník__label">MG FITMAN ONLINE</p>

                <h1>
                    MŮJ <span>CENÍK</span>
                </h1>

                <p className="ceník__description">
                    Vyber si službu, která tě posune za tvoji vysněnou postavou
                </p>

                <div className="ceník__grid">
                    {prices.map((item) => (
                        <article className="ceník__card" key={item.number}>
                            <span className="ceník__number">{item.number}</span>

                            <h2>{item.title}</h2>

                            <p className="ceník__card-description">
                                {item.description}
                                </p> 
                
                <div className="ceník__price">
                    {item.price}
                    <small>{item.unit}</small>
                </div>

                <ul>
                    {item.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                </article>
                    ))}
                    </div>
                    </div>
                    </section>
    );
}

export default Ceník;