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
 <div id = "work" className='block worksBlock'>
     <div className='container-fulid'>
         <div className='titleHolder'>
              <h2>How it works</h2>
              <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                     
         </div>
         <div className='contentHolder'>
         <Button onClick={showModal}>
                <i className='fas fa-play'></i>
           </Button>
         </div>
         <Modal
          title="Kal jo na" 
          visible={isModalVisible}  
          onCancel={handleCancel}
          footer={null}
          keyboard='false'
          onClose='true'
          >

<iframe width="460" height="315" src="https://www.youtube.com/embed/bCIKEVtQS3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </Modal>
     </div>
 </div>
</>
);
}


export default Appwork;