import { useState } from 'react';
import PropTypes from 'prop-types';

const Pestañas = ({ titulo, contenido }) => {
    const [pestañaActiva, setPestañaActiva] = useState(0);

    const handleClick = (index) => {
        setPestañaActiva(index);
    }

    Pestañas.propTypes = {
        titulo: PropTypes.array.isRequired,
        contenido: PropTypes.array.isRequired
    };

    return (
        <div>
            <div>
                {titulo.map((titulo, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor: index === pestañaActiva ? 'black' : 'white',
                            color: index === pestañaActiva ? 'white' : 'black',
                            border: '1px solid black',
                            padding: '10px',
                            margin: '5px'
                        }}>
                        {titulo}
                    </button>
                ))}
            </div>
            <div className='content'>
                {contenido[pestañaActiva]}
            </div>
        </div>
    )
}

export default Pestañas;