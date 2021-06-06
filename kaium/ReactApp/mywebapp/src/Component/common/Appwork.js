import React, { Component } from 'react';
import { Button, Modal } from 'antd';

class Appwork extends Component {
    state = { visible: false };

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    render() {
        return (
            <div  className="block worksBlock">
               <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>We are a Team</h2>
                        <p>We are from softDev, We from Bangladesh,We love bangladesh</p>
                    </div>
                    <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Woocommerce Tutorial"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Woocommerce Tutorial" width="100%" height="350" src="https://www.youtube.com/watch?v=WIm1GgfRz6M"></iframe>
          </Modal>
                </div>
            </div>
        );
    }
}

export default Appwork;