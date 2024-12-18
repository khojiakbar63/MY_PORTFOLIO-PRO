import { TypeAnimation } from 'react-type-animation';
import { ITypingAnimation } from '../../types';


const TypingAnimation = ({text} : ITypingAnimation) => (
  <TypeAnimation
    sequence={[
     text
    ]}
    wrapper="span"
    cursor={true}
    repeat={1} 
   className='typing-animation'
  />
);

export default TypingAnimation;
