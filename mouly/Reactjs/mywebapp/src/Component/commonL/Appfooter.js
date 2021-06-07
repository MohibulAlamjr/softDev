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
            <div id= " footer" className = "bgdark">
                <div className= "container-fluid ">
                    <div className = "footer">
                    <div className = "logo">
                    <i className = " fas fa-bolt"></i>
                    <p>TECH</p>
                           

                        </div>
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-pinterest-p"></i>
                        <i class="fab fa-instagram"></i>
                        <p>Copyright © 2020 Tech</p>

                    </div>

    
    <BackTop duration = '3000'>
      <div style={style}><i class="fas fa-arrow-circle-up"></i> UP</div>
    </BackTop>
  </div>
 
                </div>
            </>
        );
    }
}

export default Appfooter;