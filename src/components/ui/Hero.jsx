import React from 'react';
import PropTypes from 'prop-types';

function Hero({ backgroundImage, title, subtitle, textColor, height }) {
    const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor || '#fff',
        height: height || '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    };

    return (
        <div style={heroStyle}>
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

Hero.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    textColor: PropTypes.string,
    height: PropTypes.string,
};

export default Hero;