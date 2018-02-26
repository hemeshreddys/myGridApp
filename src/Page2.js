import React, {Component} from 'react';

class Page2 extends Component{
    render(){
        var stylesS = {
           /*  backgroundColor: this.props.backColor, */
            height:'auto',
            padding:'20px',
            fontFamily: "'Sacramento', cursive;",
          

        };
        return(
            <div style={stylesS}>
                Page 2
                
            </div>
        );
    }
}
export default Page2;