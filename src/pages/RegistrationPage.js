import React from 'react'
import Header from '../components/Header';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

const RegistrationPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <h1 style={{textAlign : 'center'}}>User Registration Form</h1>
                <RegistrationForm/>
            </main>
            <Footer/>
        </div>
    )
}

export default RegistrationPage
