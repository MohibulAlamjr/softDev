import { Anchor, Menu } from 'antd';
import React, { Component } from 'react';
import '../../css/Mynew.css';

const {Link} = Anchor;
class Appheader extends Component {
    render() {
      
        return (
           
            <div  className="container-fluid">
                <div className="header">
                <div className="logo" />
                <i className="fab fa-react">
                    Ant Design
                </i>
      


      <Anchor>
         <Link href = "#hero" title = "Home"></Link>
         <Link href = "#about" title = "About"></Link>
         <Link href = "#features" title = "Features"></Link>
         <Link href = "#work" title = "How it works"></Link>
         <Link href = "#faq" title = "FAQ"></Link>
         <Link href = "#pricing" title = "Pricing"></Link>
         <Link href = "#footer" title = "Footer"></Link>

      </Anchor>
                </div>
                
            </div>
            
        );
    }
}

export default Appheader;