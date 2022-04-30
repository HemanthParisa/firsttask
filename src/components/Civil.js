import React from "react"
import compass from '../images/compass.webp';
import man from '../images/man.jpg';
import house from '../images/wthouse.jpg';

class CivilComponent extends React.Component {
    render() {
        return(
            <div>
                <div className='civil3'>
          <h2 style={{textDecorationColor:'blue'}}><b>Architecture & Interior Design</b></h2>
          <p>sample text. click to select the text box. click again or double click to start editing the text</p>
        </div>
      <div className="civil4" style={{width:'80%', margin:'0 auto'}}>
          <div className="civil41" style={{ padding:'16px' }}>
              <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Architecture</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil42" style={{padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Planning</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil43" style={{ padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Urban Design</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
          <div className="civil44" style={{padding:'16px'}}>
          <img src={compass} alt='img' style={{ height:'50px', width:'50px'}}/>
              <h4>Research</h4>
              <p>Helloworld Helloworld Helloworld Helloworld Helloworld Helloworld</p>
              </div>
      </div>

      <div className="civil5">
        <div className="civil_55" style={{color:"white", paddingTop:'100px'}}>
          <p>About Us</p>
          <h2><b>We work at all scales and in all sectors.</b></h2>
          <p>we create transformative cultural,corporate,<br/>residential and other spaces that work in<br/> synmchronicity with their surroundings</p>
        </div>
        <div className="civil_56" style={{color:'white', paddingTop:'100px'}}>
          <h3>the future of how we live,work and play</h3>
          <p>sample text. click to select the text box. click again or<br/>double click to start editing the text.</p>
          <h4>Look toward the future</h4>
          <p>sample text. click to select the text box. click again or<br/>double click to start editing the text.</p>
          <button onClick={this.handleChange} style={{backgroundColor:'#f6cf1a', border:'0', borderRadius:'15px',width:'100px',color:'black',padding:'5px'}}><b>learn more</b></button>
        </div>
      </div>

     <div className="build">
        <img src={man} alt='img' className="build_img" style={{height:'300px',width:'400px'}}/>
     </div> 
     <div className="empty">
       <div></div>
     </div>
     <div className="text">
         <h3>Who are the best 100<br/>architecture firms in the<br/> world?</h3>
         <p>Duis aute irure dolor in reprehenderit in voluptate velit esse<br/> cillum dolore eu fugiat nulla pariatur. Excepteur sint<br/>occaecat cupidatat non proident, sunt in culpa qui officia<br/>deserunt molit anim id est laborum.</p>
         <button onClick={this.handleChange} style={{ backgroundColor: '#1f2851',border:'5px solid white', borderRadius: '15px', width:'120px',color:'white', padding:'5px'}}>read more</button>
       </div>

       <div className="maybe">
         <div className="maybe1">
         <img src={house} alt='img' className="white_img" style={{height:'250px',width:'250px'}}/>
         </div>
         <div className="maybe2">
           <div>
           <h3 style={{color:'#1f2851', textAlign:'justify', width:'300px'}}>About Company</h3>
           <p style={{textAlign:'justify', width:'300px',fontSize:'12px'}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molit anim id est laborum.</p>
           <p style={{textAlign:'justify', widows:'300px',fontSize:'12px'}}>image from <span style={{textDecoration:'underline'}}>Freepic</span></p>
           <button onClick={this.handleChange} style={{ backgroundColor: '#1f2851', border:'none', borderRadius: '15px', width:'120px',color:'white', padding:'5px'}}>read more</button>
           </div>
         </div>
       </div>
          


 </div>
        )
    }
}
export default CivilComponent;