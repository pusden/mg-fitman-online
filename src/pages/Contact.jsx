import './Contact.scss';
import {Link} from 'react-router-dom';

function Contact() {
    return (
        <section className="contact">
            <div className="contact__content">
                <p className="contact__tag">MG FITMAN ONLINE </p>

                <h1>
                    KDE MĚ <span>NAJDEŠ?</span>
                </h1>

                <p className="contact__items">
                    Chceš se na něco zeptat, dozvědet se více nebo mě sledovat na sociálních sítí? Tady mě můžeš kontaktovat.
                </p>

                <div className="contact__items">
                    <a href="tel:+420 720 900 100" className="contact__item">
                        <span>TELEFON</span>
                        <strong>+420 720 900 100</strong>
                    </a>

                    <a href="Martas@MGFitman.com" className="contact__item">
                        <span>E-MAIL</span>
                        <strong>Martas@MGFitman.com</strong>
                    </a>

                    <a
                     href="https://www.instagram.com/martin_gabko/"
                     target="_blank"
                     rel="noreferrer"
                     className="contact__item"
                     >
                        <span>INSTAGRAM</span>
                        <strong>@martin_gabko</strong>
                     </a>

                     <a
                      href="//www.youtube.com/@MGFitman"
                      target="_blank"
                      rel="noreferrer"
                      className="contact__item"
                      >
                        <span>YOUTUBE</span>
                        <strong>MGFitman</strong>
                      </a>
                      </div>

                      <Link to="/spoluprace" className="contact__button">
                       NEVÁHEJ A ŠVÍSKEJ!!!
                      </Link>
                      </div>
                      </section>
    );
}

export default Contact;