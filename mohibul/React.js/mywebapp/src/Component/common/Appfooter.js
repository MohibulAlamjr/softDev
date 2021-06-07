import React, { Component } from 'react';
import { BackTop } from 'antd';

class Appfooter extends Component {
    render() {
        const style = {
            height: 40,
            width: 40,
            lineHeight: '40px',
            borderRadius: 4,
            backgroundColor: '#1088e9',
            color: '#fff',
            textAlign: 'center',
            fontSize: 14,
          };
          
        return (
            <>
            <div className=' bgdark'>
               <div className='container-fluid'>
                   <div className='footer'>
                       <div className='logo'>
                       <i className="fab fa-react"></i>
                        <a href="#">softReact</a>
                       </div>
                       <i className='fab fa-facebook-f'></i>
                       <i className='fab fa-twitter'></i>
                       <i className='fab fa-linkedin-in'></i>
                       <i className='fab fa-pinterest-p'></i>
                       <i className='fab fa-instagram'></i>
                       <p>Copyright © 2020 Tech</p>
                   </div>
               </div>
               <div>
                
                <BackTop>
                    <div style={style}><i className='fas fa-arrow-circle-up'></i></div>
                </BackTop>
  </div>
               </div>
            </>
        );
    }
}

export default Appfooter;