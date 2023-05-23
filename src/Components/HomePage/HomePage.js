import React from "react";
import './HomePage.css'
import AudioPlayer from "../../features/audioPlayer/audioPlayer";

const HomePage = () => {
    return(
        <div>
            <h1 id="hero" >Grab a lease for your next big hit!</h1>
            <h1></h1>
            <div className='home-page-audio'>
                <AudioPlayer id='1'></AudioPlayer>
                <AudioPlayer id='2'></AudioPlayer>
                <AudioPlayer id='3'></AudioPlayer>
                <AudioPlayer id='4'></AudioPlayer>
                <AudioPlayer id='5'></AudioPlayer>

                
            </div>
            <h2></h2>
            <div className='home-page-audio'>
                <AudioPlayer id='1'></AudioPlayer>
                <AudioPlayer id='2'></AudioPlayer>
                <AudioPlayer id='3'></AudioPlayer>
                <AudioPlayer id='4'></AudioPlayer>
                <AudioPlayer id='5'></AudioPlayer>
                
                
            </div>
        </div>
    )
}

export default HomePage;