import React from 'react'
import menuicon from '../images/menuicon.png'
import house from '../images/house.jpg'

class TestComponent extends React.Component {
  render(){
    return (
      <div>
        <div className='civil1'>
          <div>Logo</div>
          <div>
            <img src={menuicon} alt='menu' style={{ height: '25px', width: '25px' }} />
          </div>
        </div>
  
        <div className='civil2'>
          {/* <div> */}

          <div className='civil22'>
            <img src={house} alt='build' className='civil_img' />
          </div>
          <div className='civil23'>
            <img src={house} alt='build' className='civil_img' />
          </div>
          <div className='civil24'>
            <img src={house} alt='build' className='civil_img' style={{ height: '200px', width: '150px'}} />
          </div>
          <div className='civil25'>
            <div className='civil_img1'>
              <p><b>what we do <br/>integrated design<br/>practice of <br/>architecture<br/>landscape,interiors</b></p>
              <button onClick={this.handleChange} style={{backgroundColor:'blue'}}>learn more</button>
            </div>
           
          </div>
         
  
        </div>
  
      </div>
  
    )
  }

}

export default TestComponent;