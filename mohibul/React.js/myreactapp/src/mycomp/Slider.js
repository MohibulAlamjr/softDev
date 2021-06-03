import React, { Component } from 'react';
import { Carousel, Radio } from '../../node_modules/antd';
// import Slidercss from '../css/Sidercss.module.css'
import img1 from '../image/hh.jpg';
import img2 from '../image/download.jfif';


class Slider extends Component {
    render() {

        const contentStyle1={
          height: '500px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
          backgroundImage: `url(${img2})` 
        };
        const contentStyle2={
          height: '500px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
          backgroundImage: `url(${img1})` 
        };
        const contentStyle3={
          height: '500px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
          background: '#364d79',
          backgroundImage: `url(${img2})` 
        };
        const contentStyle4={
          height: '500px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'center',
         
          backgroundImage: `url(${img1})` 
        };




        const PositionCarouselDemo = () => {
            const [dotPosition, setDotPosition] = React.useState('top');
          
            const handlePositionChange = ({ target: { value } }) => {
              setDotPosition(value);
            };
          
            return (
              <>
                <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">Top</Radio.Button>
                  <Radio.Button value="bottom">Bottom</Radio.Button>
                  <Radio.Button value="left">Left</Radio.Button>
                  <Radio.Button value="right">Right</Radio.Button>
                </Radio.Group>
                <Carousel autoplay dotPosition={dotPosition}>
                  <div>
                    <h3 style={contentStyle1}>1</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle2}>2</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle3}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle4}>4</h3>
                  </div>
                </Carousel>
              </>
            );
          };




        return (
            <div>
                <PositionCarouselDemo />
            </div>
        );
    }
}

export default Slider;