import { useEffect, useState } from "react";
import'./Spolupráce.scss'

function Spoluprace() {
    const [submited, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [applications, setApplications] = useState ([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
      async function loadApplications() {
        try {
            const response = await fetch('http://localhost:3001/applications');

            if (!response.ok) {
                throw new Error('Nepodařilo se načíst přihlášky.');
      }

      const data = await response.json();
      setApplications(data);
    } catch (error) {
        console.error('Chyba při načítání:', error);
    } finally {
        setIsloading(false);
    }
}

   loadApplications();
}, []);

    const[formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        service:'',
        goal:'',
        message:'',
        consent:false,
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

   async function handleSubmit(event) {
    event.preventDefault();

   if (isSubmitting) return;

   setIsSubmitting(true);
   try {
    const response = await fetch('http://localhost:3001/applications', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
    });

    if (!response.ok) {
        throw new Error('Nepodařilo se odeslat formulář.');
    }

    setSubmitted(true);
    } catch (error) {
    console.error(error);
    alert('Odesílání se nepodařilo. Zkus to prosím znovu.');
  } finally {
    setIsSubmitting (false);
}
   }

    if (submited) {
        return (
            <section className="spoluprace spoluprace--success">
                <div className="spoluprace__success">
                    <span className="spoluprace__check"></span>
                    <h1>
                        DĚKUJEME ZA <span>TVŮJ ZÁJEM</span>
                    </h1>
                    <p>
                        Tvůj formulář byl úspěšně odeslán.
                        Brzy se ti ozveme a společně probereme další kroky.
                    </p>
                    <strong>MG FITMAN ONLINE</strong>
                </div>
            </section>
        );
    }

    return (
        <section className="spoluprace">
            <div className="spoluprace__container">
                <p className="spoluprace__label">MG FITMAN ONLINE</p>

                <h1>
                    ZAČNĚME NA TOM <span>PRACOVAT</span>
                </h1>

                <p className="spoluprace__intro">
                    Udělej krátký formulář a společně nastartujeme tvoji proměnu.
                </p>

                <form className="spoluprace__form" onSubmit={handleSubmit}>
                    <h2>OSOBNÍ ÚDAJE</h2>

                    <label htmlFor="name">Jméno a příjmení</label>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jan Novák"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="email">E-mail</label>
                    <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tvuj@email.cz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />

                    <label htmlFor="phone">Telefon</label>
                    <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+420 000 000 000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    />

                    <h2>O TOBĚ A TVÝCH CÍLECH</h2>

                    <label htmlFor="service">O jakou službu máš zájem?</label>
                    <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    >

                    <option value="">Vyber službu</option>
                    <option value="Online coaching">Online coaching</option>
                    <option value="Výživový plán">Výživový plán</option>
                    <option value="Individuální trénink">Individuální trénink</option>
                    </select>

                    <label htmlFor="goal">Jakého cíle chceš dosáhnout</label>
                    <input
                    id="goal"
                    name="goal"
                    type="text"
                    placeholder="Např. nabrat svalovou hmotu..."
                    value={formData.goal}
                    onChange={handleChange}
                    />

                    <label htmlFor="message">Zpráva pro trenéra</label>
                    <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Napiš mi něco o sobě a o svých cílech..."
                    value={formData.message}
                    onChange={handleChange}
                    />

                    <label className="spoluprace__consent">
                        <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        />
                        Souhlasím se zpracováním osobních údajů.
                    </label>

                    <button 
                    type="submit"
                    className="spoluprace__button"
                    disabled={isSubmitting}
                    >
                        {isSubmitting ? 'ODESÍLÁM...' : 'ODESLAT FORMULÁŘ'}
                    </button>
                </form>
                </div>
            </section>
    );
}

export default Spoluprace;