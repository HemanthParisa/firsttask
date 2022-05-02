import React from 'react'
import conwall from '../images/conwall.jpg';
import {TextField} from '@mui/material'

class FinalComponent extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={conwall} alt='img' className='final1_img1' />
                    <div className='final2'>
                    <h3>Sign Up for Exclusive Offers</h3>
                    <p className='final3'>sample text click to select the box click again or<br/> double click to start editing the text.</p>
                     <form>
                         <div className='label' style={{width:'98%', padding:'5px'}}>
                         <TextField id="filled-basic" label="Enter your Name" style={{width:'150px',}} variant="filled" />
                         <TextField id="filled-basic" label="Enter a valid email address" style={{width:'150px',}} variant="filled" />
                         <TextField id="filled-basic" label="Telephone number" style={{width:'150px',}} variant="filled" />
                         </div>
                         <div label2 style={{marginTop:'30px'}}>
                         <TextField id="filled-basic" label="Enter your message" style={{width:'98%'}} variant="filled"  multiline rows={3}/>
                         </div>

                     </form>
                     <div className='label3' style={{marginTop:'100px'}}>
                        <button onClick={this.handleChange} style={{ backgroundColor: 'yellow', border: 'none', borderRadius: '10px', color: 'black', width: '98%', padding: '5px' }}>sign up</button>
                        <p style={{ width: '200px', fontSize: '15px', padding: '10px', marginLeft:'180px' }}>image from <span style={{ textDecoration: 'underline' }}>FreepiK</span></p>
                     </div>
                </div>
        
                </div>
                <div className='final5'>
                <p className='final55' style={{width: '400px',margin:'auto', color:'white'}}>sample text. click to select the text box. click again or double click to start editing the text.</p>   
                </div>
               

            </div>
        )
    }
}

export default FinalComponent;