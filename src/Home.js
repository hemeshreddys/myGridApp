import React, {Component} from 'react';

class Home extends Component{
    render(){
        var stylesS = {
           /*  backgroundColor: this.props.backColor, */
            height:'auto',
            padding:'20px',
            fontFamily: "'Sacramento', cursive;",
          

        };
        return(
            <div style={stylesS}>
                Home
                
            </div>
        );
    }
}
export default Home;