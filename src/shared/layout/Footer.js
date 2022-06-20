import React from 'react';

const Footer =() => {
    
        const root ={
            marginTop: '20px',

        }
        return (
            <footer>
                &copy; Examen {new Date().getFullYear()}
            </footer>
        );
    
}

export default Footer;