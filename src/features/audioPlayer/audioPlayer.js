import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    playAudio,
    pauseAudio,
    selectAudioPlaying,
    selectAudioStatus,
} from './audioPlayerSlice';
import './audioPlayer.css';
import { selectTracksToPlay } from "../tracksToPlay/tracksToPlaySlice";
import { setPlaying, setPlayingFalse, setPlayingTrue } from "../tracksToPlay/tracksToPlaySlice";
import cartIcon from '../../Icons/ShoppingCartFilled.svg';

export function AudioPlayer(track_id) {
    const dispatch = useDispatch();
    const audioRef = useSelector(selectAudioStatus)
    const audioStatus = useSelector(selectAudioPlaying)
    const trackList = useSelector(selectTracksToPlay)

    const togglePlay = (newElementToPlay) => {
        if (audioRef === '0') {
            dispatch(playAudio(newElementToPlay))
            document.getElementById(newElementToPlay).play()
        } else if (newElementToPlay === audioRef) {
            if (audioStatus) {
                document.getElementById(audioRef).pause()
                dispatch(pauseAudio(audioRef))
            } else {
                
                dispatch(playAudio(audioRef))
                document.getElementById(audioRef).play()
            }
        } else {
            document.getElementById(audioRef).pause()
            dispatch(pauseAudio(audioRef))
            dispatch(playAudio(newElementToPlay))
            document.getElementById(newElementToPlay).play()
        }
    }


    const findCurrentTrack = (trackLists) => {
        for (let i = 0; i <= trackLists.length; i++) {
            if (trackLists[i].track_id === track_id.id) {
                return trackLists[i]
            } 
        }
    }

    const currentTrack = findCurrentTrack(trackList)
    

    const findCurrentTrackStatus = (trackID) => {
        if (trackID === false) {
            return 'Play'
        } else {
            return 'Pause'
        }
    }

    const trackStatus = (currentTrack, newTrack, currentlyPlaying) => {
        if (currentTrack === '0') {
            dispatch(setPlayingTrue(newTrack))
        } else if (newTrack === currentTrack) {
            if (currentlyPlaying) {
                dispatch(setPlayingFalse(currentTrack))
            } else {
                dispatch(setPlayingTrue(currentTrack))
            }
        } else {
            dispatch(setPlayingFalse(currentTrack))
            dispatch(setPlayingTrue(newTrack))
        }
    }

    // I'm the play pause feature

    // const pureFindCurrentTrackStatus = (arrayOfTracks, trackID, globalPlayingState) => {
    //     // dispatch(setPlaying(trackID))
    //     for (let i = 0; i < arrayOfTracks.length; i++) {
    //         if (arrayOfTracks[i].track_is_playing === true && arrayOfTracks[i].track_id !== trackID) {
    //             dispatch(setPlaying(i))
            
    //         } else if (arrayOfTracks[i].track_is_playing === true && arrayOfTracks[i].track_id === trackID) {
    //             dispatch(setPlaying(i))
    //         }
    //     }
    // }

    return (
        <div>

            <div className="track">
                <div className="track-container">
                    <div>
                        <div>
                            <img src={currentTrack.track_img_src} id='cover-art' />

                        </div>                         
                    </div>
                    <div className='track-description'>
                        <p id="track-name">{currentTrack.track_name}</p>
                        <p id="track-bpm">{currentTrack.track_bpm}</p>
                        <div className='track-artist'>
                            <p>{currentTrack.track_artist}</p>
                            <img src='https://drive.google.com/uc?export=view&id=1mBnRA0aWy5kjRwPJ_qhN2BUIMdu064sE'></img>
                        </div>
                    </div>
                    <audio 
                        id={track_id.id}
                        src={currentTrack.track_src}             
                    />
                    <div class='button-container'>
                        <button id='play' onClick={() => {
                            togglePlay(track_id.id)
                            trackStatus(audioRef, track_id.id, audioStatus)
                            
                            // pureFindCurrentTrackStatus(trackList, track_id.id-1, audioStatus)
                            
                            }}>{findCurrentTrackStatus(currentTrack.track_is_playing)}</button>
                        <button id='cart'>
                            <img src={cartIcon}/>
                            $35.00
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AudioPlayer