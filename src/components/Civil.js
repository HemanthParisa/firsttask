import React from "react"
import compass from '../images/compass.webp'

class CivilComponent extends React.Component {
    render() {
        return(
            <div>
                <div className='civil3'>
          <h2 style={{textDecorationColor:'blue'}}><b>Architecture & Interior Design</b></h2>
          <p>sample text. click to select the text box. click again or double click to start editing the text</p>
        </div>
      <div className="civil4">
          <div className="civil41" style={{
            //   border:'1px solid green',
          padding:'16px'}}>
              <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Architecture</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil42" style={{
            //   border:'1px solid green',
          padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Planning</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil43" style={{
            //   border:'1px solid greenn',
              padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Urban Design</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil44" style={{
            //   border:'1px solid green',
           padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Research</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
      </div>


 </div>
        )
    }
}
export default CivilComponent;