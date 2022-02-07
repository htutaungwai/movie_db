import React, {useContext} from 'react';
import Button from '../layout/Button';
import MovieContext from '../../context/movieContext';
import SkipButton from '../layout/SkipButton';
const SearchButtons = () => {
    const {handleSpecificBtn, buttons, currentPage} = useContext(MovieContext);
    
   
 
    return <div className=' flex justify-center items-center gap-3'>
      <SkipButton value={true} key={"mius"}/>
      {buttons.map((num) => {
        return <Button value={num}  key={num} bgColor ={num === currentPage ? "bg-stone-800" : "bg-blue-500"}/>
      })}
      <SkipButton value={false} key={"plus"}/>
  </div>;
};

export default SearchButtons;
