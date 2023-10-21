import React from 'react';
import './Promo.css';
import web from '../../images/landing-logo.svg'

export default function Promo() {
    return (
        <>
            <section className='promo'>
                <div className='promo__info'>
                    <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                    <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <a className='promo__link'>Узнать больше</a>
                </div>
                <img className='promo__logo' src={web} />
            </section>
        </>
    )
}
