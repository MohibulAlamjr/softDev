import { Anchor } from 'antd';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import '../../Css/Mynew.css';

const { Link } = Anchor;





const Appheader = () => {
    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        <>
        <div  className='ant-layout-header'>
           <div className='container-fluid'>

            <div className='header'>
                <div className="logo" >
                <i className="fab fa-react"></i>
                    <a href="#">softReact</a>
                </div>
                <div className='mobileHidden'>
                <Anchor >
                <Link  href="#hero" title="Home" />
                <Link  href="#about" title="About" />
                <Link  href="#feature" title="Feature" />
                <Link href="#work" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#footer" title="Footer" />
            </Anchor>
                </div>
                <div className='mobileVisible'>
                <Button type="primary" onClick={showDrawer}>
                           <i className='fas fa-bars'></i>
                        </Button>
                        <Drawer
                            title="Manu Bar"
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >
                            <Anchor >
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#feature" title="Feature" />
                <Link href="#work" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#footer" title="Footer" />
            </Anchor>
                        </Drawer>
                </div>
                
            


             </div>
           </div>
           </div>
            </>
    );
};

export default Appheader;
