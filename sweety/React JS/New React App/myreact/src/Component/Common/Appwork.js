import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const Appwork = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

return (
<>
   <div id='Appwork' className='block worksBlock'>
       <div className='container-fulid'>
           <div className='titleHolder'>
                <h2>Hello softDev!</h2>
                <p>We are from softDev. We all are core member of softDev.</p>
           </div>
           <div className='contentHolder'>
           <Button onClick={showModal}>
                <i className='fas fa-play'></i>
           </Button>
           </div>
           <Modal
            title="Zara Zara" 
            visible={isModalVisible}  
            onCancel={handleCancel}
            footer={null}
            keyboard='false'
            onClose='true'
            >

           <iframe width="480" height="315" src="https://www.youtube.com/embed/p6L3_Q2swhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </Modal>
       </div>
   </div>
</>
);
}


export default Appwork;