import React from "react";
import reading from '../images/reading.jpg'
import symbol from '../images/symbol.jpg'

class TaskComponent extends React.Component {

    render() {
        return (
            <div>
                <div className="study">
                    <div style={{ height: '150px', width: '35%', backgroundColor: 'yellow', marginTop: '250px' }}></div>

                    <img src={reading} alt='img' className="study1_img" style={{ height: '250px', width: '200px', marginLeft: '250px', marginTop: '-220px', borderRadius: '10px' }} />
                    <div className="study2">
                        <h3 className="study3" style={{ width: '200px', padding: '10px' }}>We believe design should have a positive impact on people's lives and the environment.</h3>
                        <p style={{ width: '200px', fontSize: '12px', padding: '10px' }}>image from <span style={{ textDecoration: 'underline' }}>FreepiK</span></p>
                        <button onClick={this.handleChange} style={{ backgroundColor: '#1f2851', border: 'none', borderRadius: '10px', color: 'white', width: '100px', padding: '5px', marginLeft: '10px' }}>learn more</button>
                    </div>
                    <div className="study4" style={{ height: '200px', width: '230px', marginLeft: '90px', backgroundColor: '#1f2851', color: 'white', position: 'relative', borderRadius: '10px', marginTop: '-100px', marginBottom: '20px' }}>


                        <img src={symbol} alt='img' style={{ height: '25px', width: '25px' }} />
                        <h4 className="head" style={{ Width: '150px' }}>Success is not final; failure is not fatal: it is the courage to continue that counts </h4>
                        <p className="head1" style={{ Width: '200px', fontSize: '11px', marginLeft: '100px', marginTop: '60px' }}>-winston churchill</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default TaskComponent;