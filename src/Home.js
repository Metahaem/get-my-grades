import React from 'react';
import img from './background-image.png'

const Home = () => {
    return (
        <div>
            <br/><br/><br/><br/><br/>
            <div>
                <img className='center' src={img} alt='background'/>
                <h1 style={{textAlign: 'center', color: '#3AA3F2'}}>The Ultimate Learning Platform</h1>
                <p style={{textAlign: 'center'}}>English • Maths • Science | All major qualifications | Years 7 - 11</p>
            </div>
        </div>
    )
}

export default Home
