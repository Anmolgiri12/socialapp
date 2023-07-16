import * as React from'react';
import {Routes,Route} from 'react-router-dom'
import Aboutcomponent from '../components/pages/about/aboutcomponent.jsx';

function Webrouter(){
    return(
        <Routes>
            <Route path='/' element={<Aboutcomponent/>}/>
        </Routes>
    );
}

export default Webrouter;