import { FC } from 'react';
import { IContainer } from '../../../types';
import './_style.scss';



const Container: FC<IContainer> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;
