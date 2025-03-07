import React from 'react'
import Form from '../Form';

const ContactUs = (props) => {
    const {title} = props;
  return (
    <div id="contact us" className="bg-background flex justify-center items-center flex-col">
        <div>
         {title ? (<h1 className="text-5xl mb-20 text-center text-black uppercase tracking-wider font-semibold transition-colors duration-300 hover:text-background/80">
            {title}
          </h1>) :(<></>)}
        </div>
        <div className='w-1/2'>
        <Form />
        </div>
          

    </div>
  )
}

export default ContactUs;