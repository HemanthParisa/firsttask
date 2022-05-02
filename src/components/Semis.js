import React from 'react'
import pic from '../images/pic.webp'
import groupdiscussion from '../images/groupdiscussion.jpg'
import pic2 from '../images/pic2.jpg'

class SemisComponent extends React.Component {
    render() {

        return (
            <div>
                <div className="semi" style={{ width: '45%', minHeight: '900px', backgroundColor: 'yellow', marginBottom: '20px' }}>
                    <img src={pic} alt='img' className="semi1_img1" style={{ height: '250px', width: '300px', borderRadius: '10px', marginTop: '50px', marginLeft: '500px' }} />
                    <img src={groupdiscussion} alt='img' className="semi2_img2" style={{ height: '200px', width: '300px', borderRadius: '10px', marginLeft: '330px', marginTop: '-100px' }} />
                    <img src={pic2} alt='img' className="semi3_img3" style={{ height: '180px', width: '180px', borderRadius: '10px', marginLeft: '650px', marginTop: '-50px' }} />

                    <div className="main" style={{ height: '300px', width: '250px', backgroundColor: 'white', borderRadius: '10px', marginLeft: '400px' }}>
                        <h4 className="semi4" style={{ marginLeft: '10px' }}>What we do</h4>
                        <h2 className="semi5" style={{ width: '250px', marginLeft: '10px' }}>Full service architecture design Brooklyn, New York and Richmond</h2>
                        <p style={{ width: '200px', fontSize: '12px', padding: '10px' }}>image from <span style={{ textDecoration: 'underline' }}>FreepiK</span></p>
                        <button onClick={this.handleChange} style={{ backgroundColor: '#1f2851', border: 'none', borderRadius: '10px', color: 'white', width: '100px', padding: '5px', marginLeft: '10px' }}>learn more</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default SemisComponent;