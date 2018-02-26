import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import Page from './Page';
import Home from './Home';
import Page2 from './Page2';
import App from './App';

class MainHeader extends Component{
    render(){
        const mainHeaderContainer = {
            width: '100%',
            height:'10%',
            backgroundColor:'#0078A8',
            padding:'10px 100px',
            boxSizing:'border-box',
            fontFamily: "Anton, sans-serif",
            fontSize:34,
            alignSelf: 'flex-start'
        };
        return(
            <div style={mainHeaderContainer}>
                <i class="material-icons">fingerprint</i>Quotes About Living a Beautiful Life
       
            </div>
        );
    }
}
export default MainHeader;