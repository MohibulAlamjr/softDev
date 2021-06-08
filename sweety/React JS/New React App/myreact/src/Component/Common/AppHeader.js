
import '../../Css/Mynew.css';
import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';
import React,{useState} from 'react';

const { Link } = Anchor;

const AppHeader = () => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
}
const onClose = () => {
    setVisible(false);
  };
    return (
       
             
            <>
            <div className="container-fluid">
                <div className="header">
                <div className="logo">
                    <i className='fab fa-react'></i>
                   <a href="#">React.js</a>
                </div>
               
               <div className='mobileHidden'>
               <Anchor>
          <Link href="#Hero" title="Home" />
          <Link href="#About" title="About" />
          <Link href="#Appfeature" title="Feature" />
          <Link href="#Appwork" title="How it works" />
          <Link href="#Appfaq" title="FAQ" />
          <Link href="#Apppricing" title="Pricing" />
          <Link href="#Appfooter" title="Footer" />
      </Anchor>
               </div>
              <div className='mobileVisible'>
             < Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
         <Anchor>
          <Link href="#Hero" title="Home" />
          <Link href="#About" title="About" />
          <Link href="#Appfeature" title="Feature" />
          <Link href="#Appwork" title="How it works" />
          <Link href="#Appfaq" title="FAQ" />
          <Link href="#Apppricing" title="Pricing" />
          <Link href="#Appfooter" title="Footer" />
      </Anchor>
      </Drawer>
              </div>
     
                </div>
                
            </div>
            </>
        );
        

};

export default AppHeader;

