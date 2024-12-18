import { FC } from 'react';
import { IParagraph } from '../../types';
import "./_style.scss"

const Paragraph:FC <IParagraph>= ({text, style}) => {
    return (
        <p className='paragraph' style={style}>
            {text}
        </p>
    );
};

export default Paragraph;