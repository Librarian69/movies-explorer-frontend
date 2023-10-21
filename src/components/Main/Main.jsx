import React from 'react'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Main() {
    return (
        <main>
            <Header />
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </main>
    )
}

