import React from 'react'
import Heading from './Heading'
import "../../styles/ContactUs.css"

const ContactUs = () => {
    return (
        <>
            <Heading title='Contact Us' />
            <section className='contact-us'>
                <form action=''>
                    <input type='text' placeholder='Enter your name' />
                    <input type='email' placeholder='Enter email Address...' />
                    <input type='text' placeholder='Type your message' />
                    <button>
                        <i className='fa fa-paper-plane'></i> SUBMIT
                    </button>
                </form>
            </section>
        </>
    )
}

export default ContactUs