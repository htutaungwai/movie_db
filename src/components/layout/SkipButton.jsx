import React, {useContext} from 'react';
import {FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa"
import MovieContext from '../../context/movieContext';


const SkipButton = ({value}) => {
    const {handleLeft, handleRight} = useContext(MovieContext);
    const clName = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full";
   
    if(value){
        return <button className={clName} onClick={handleLeft}><FaAngleDoubleLeft/></button>
    }else {
        return <button className={clName} onClick={handleRight}><FaAngleDoubleRight/></button>
    }
    // return (<button className={clName} >
    //     {value ? <FaAngleDoubleLeft onClick={handleLeft}/> : <FaAngleDoubleRight onClick={handleRight}/>}
    //         </button>)
    
};

export default SkipButton;
