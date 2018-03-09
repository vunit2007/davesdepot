import React from "react";
import {Link} from "react-router-dom";

import {
    catbar,
    catbarBtn,
    catbarCache
} from "./catbarActions"

class Catbar extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChangeCatbar = this.handleChangeCatbar.bind(this);
        this.handleCatbarBtn = this.handleCatbarBtn.bind(this);
    }

    handleChangeCatbar(e){
        let input = e.target.value;
        const {dispatch} = this.props;
        dispatch(catbar(input));
    }

    handleCatbarBtn(e){
        const {dispatch} = this.props;
        dispatch(catbarBtn());
    }
    
    render() {

        return (
            <nav className = 'EcatBar' id='EcatBar'>
     
           
                <ul  className ='EcatUl' id = 'EcatUl'>
                 <li className='EcatList' id='EcatList'>  <button className='EcatButton' id='EcatButton'> Electronics</button></li> 
                 <li className='EcatList' id='EcatList'>  <button className='EcatButton' id='EcatButton'> Clothing</button></li> 
                 <li className='EcatList' id='EcatList'>  <button className='EcatButton' id='EcatButton'> Art</button></li> 
                 <li className='EcatList' id='EcatList'>  <button className='EcatButton' id='EcatButton'> Sports</button></li> 
                 <li className='EcatList' id='EcatList'>  <button className='EcatButton' id='EcatButton'> Tools</button></li> 
                </ul>
          
      
        </nav>
        )
    }
}

export default Catbar;