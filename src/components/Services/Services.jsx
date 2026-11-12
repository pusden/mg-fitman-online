import { Link } from 'react-router-dom';
import './Services.scss';

function Services() {
 const services = [
    {
        number: '01',
        title:'ONLINE COACHING',
        description:
        'Individuální tréninkový plán, pravidelná kontrola a vedení na cestě za tvým cílem.',
        link: '/online-coaching'
    },
    {
        number: '02',
        title: 'VÝŽIVOVÝ PLÁN',
        description:
        'Stravovací plán přizpůsobený tvému životnímu stylu, potřebám a fitness cílům.',
        link:'/nutrition-plan',
    },
    {
        number:'03',
        title: 'INDIVIDUÁLNÍ TRÉNINK',
        description:
        'Osobní přístup, správná technika a motivace k dosažení maximálních výsledků.',
        link:'/individual-training',
    },
];

return (
    <section className="services" id="services">
        <div className="services__container">

            <p className="services__label">
                CO PRO TEBE MÁM
            </p>

            <h2>
                <span>MOJE</span> <span>SLUŽBY</span>
            </h2>

            <p className="services__description">
                Individuální přístup, disciplína a plán, který tě dovede k výsledkům.
            </p>

            <div className="services__grid">
            {services.map((service) => (
                <Link to ={service.link|| '/contact'} className='service-card' key={service.number}>
                        <span className="service-card__number">
                            {service.number}
                        </span>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>

                        <span className="service-card__line"></span>
                        </Link>
                ))}
                </div>
                
                </div>
                </section>
                );
            }

    export default Services;