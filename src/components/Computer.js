import React from "react";
import construct from '../images/contsruct';
import plan from '../images/planning.webp';
import oldage from '../images/old.jpg'
import compass from '../images/compass.webp'

class ComputerComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="drawing">
                    <img src={construct} alt="img" className="drawing1_img1" />
                    <img src={plan} alt="img" className="drawing2_img2" />
                </div>
                <div className="just" style={{ height: '250px', marginBottom: '20px', backgroundColor: 'yellow', marginTop: '-100px' }}>
                    <div>
                        <div className="double">
                            <div>
                                <img src={oldage} alt="img" className="double1_img1" style={{ borderRadius: '50%', height: '180px', width: '180px', border: '10px solid white', marginLeft: '500px', marginTop: '-50px' }} />
                            </div>
                        </div>
                        <div className="master" style={{ width:"220px", marginLeft:'720px', marginTop:'-150px',position:'relative', backgroundColor:'white'}}>
                            <div>
                            <img src={compass} alt="img" className="master1_img1" style={{height:'50px',width:'50px',borderRadius:'50%'}} />
                            </div>
                            <div className="master2">
                                <h3 style={{width:"200px", padding:'10px'}}>We create embedded architecture</h3>
                                <p style={{width:"200px", fontSize: '12px', padding:'10px' }}>We create embedded architecture We create embedded architecture We create embedded architecture We create embedded architecture We create embedded architectureWe create embedded architecture</p>
                                <p style={{width: '200px', fontSize: '12px', padding:'10px' }}>image from <span style={{ textDecoration: 'underline' }}>Freepic</span></p>
                                <button onClick={this.handleChange} style={{ backgroundColor: '#1f2851', border: 'none', borderRadius: '15px', width: '120px', color: 'white', padding: '5px' }}>learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default ComputerComponent;