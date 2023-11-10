import { LiaRocketchat, LiaEnvelopeOpenSolid, LiaInstagram, LiaWhatsapp, LiaCopyrightSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';


export function Contact() {

    const form = useRef();
    const [message, setMessage] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_73wm2io', 'template_jo63oih', form.current, 'mzG1a7TkoHDoLKVLb')
            .then((result) => {
                setMessage('Mensagem enviada com sucesso!');
                resetForm();
                setTimeout(() => {
                    setMessage(null);
                }, 5000); //Define o tempo de 5 segundos para a mensagem desaparecer
                console.log(result);
            }, (error) => {
                setMessage('Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde!')
                console.error(error);
            });
    }

    const resetForm = () => {
        //Define que o formulario volte a ficar em branco
        form.current.reset();
    }


    return (
        <section className={styles.container}>
            <div className={styles.titulo}>
                <h1> Entre em <span>Contato</span> e faça sua reserva!  <span><LiaRocketchat /></span> </h1>
            </div>

            <div className={styles.contacts}>
                <a href="mailto:fishcaiaquesecoturismo@gmail.com"><LiaEnvelopeOpenSolid /> </a>
                <span>fishcaiaquesecoturismo@gmail.com</span>
            </div>

            <div className={styles.contacts}>
                <a href="https://www.instagram.com/fishcaiaques1/"><LiaInstagram /> </a>
                <span>@fishcaiaques1</span>
            </div>

            <div className={styles.contacts}>
                <a href="tel:+55 13 99704-9221"><LiaWhatsapp /></a>
                <span>13 99704-9221</span>
            </div>
            <div className={styles.titulo}>
                <h1>Envie uma mensagem, <span>ou faça sua reserva!</span></h1>
            </div>


            <div className={styles.form}>
                {message && <p className={styles.message}>{message}</p>}
                <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <label>Nome:</label>
                    <input type="text" name="name" className={styles.name} />
                    <label>Email:</label>
                    <input type="email" name="email" className={styles.email} required />
                    <label>Mensagem:</label>
                    <textarea name="message" className={styles.txt} />
                    <input type="submit" value="Enviar" className={styles.btn} /> 
                </form>
            </div>
            
            <footer className={styles.footer}>
                <span><LiaCopyrightSolid /></span> 
                <a href="https://alltechsolutions.netlify.app/">All Tech Solutions - <VscTools /> - Developed by Anderson Moreno Mattar</a>
            </footer> 
           
            
        </section>
    )
}