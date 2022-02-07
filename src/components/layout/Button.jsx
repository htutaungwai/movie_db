import React, {useContext} from 'react';
import MovieContext from '../../context/movieContext';
const Button = ({value,bgColor}) => {
  const {handleSpecificBtn} = useContext(MovieContext)
  return <button onClick={() => {
    handleSpecificBtn(value)
  }} className={`${bgColor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>
  {value}
</button>;
};

export default Button;
