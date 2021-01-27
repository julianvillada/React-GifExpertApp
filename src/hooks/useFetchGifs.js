
import {useEffect, useState} from 'react'
import { GetGifs } from '../helpers/GetGifs'

export const useFetchGifs = ( category ) => {

const [state, setState] = useState({
    data: [],
    loading:true
})

useEffect( () =>{

    GetGifs( category )
    .then( imgs =>{

      setTimeout( ( ) =>{
        setState( {
          data: imgs,
          loading:false
        })
    }, 3000 );
    
    })

}, [ category ])





    return state;
}






