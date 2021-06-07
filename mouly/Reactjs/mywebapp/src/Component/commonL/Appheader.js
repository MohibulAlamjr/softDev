import { Anchor } from 'antd';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import '../../css/Mynew.css';


const Appheader = () => {
    
const {Link} = Anchor;


const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        <div>
              
           
           <div  className="container-fluid">
               <div className="header">
               <div className="logo" />
               <i className="fab fa-react">
                   Ant Design
               </i>
     

<div className = "mobileHidden">
   
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
<div className = "mobileVisible">
<Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Menu Bar"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
          
<Anchor>
        <Link href = "#hero" title = "Home"></Link>
        <Link href = "#about" title = "About"></Link>
        <Link href = "#features" title = "Features"></Link>
        <Link href = "#work" title = "How it works"></Link>
        <Link href = "#faq" title = "FAQ"></Link>
        <Link href = "#pricing" title = "Pricing"></Link>
        <Link href = "#footer" title = "Footer"></Link>

     </Anchor>
      </Drawer>

</div>
               </div>
               
           </div>
           
      
        </div>
    );
};

export default Appheader;
