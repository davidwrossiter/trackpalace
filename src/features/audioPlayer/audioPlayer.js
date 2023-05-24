import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    playAudio,
    pauseAudio,
    selectAudioPlaying,
    selectAudioStatus,
} from './audioPlayerSlice';
import './audioPlayer.css';
import { selectTracksToPlay, setPlayingFalse, setPlayingTrue } from "../tracksToPlay/tracksToPlaySlice";
import cartIcon from '../../Icons/ShoppingCartFilled.svg';
import { addToCart } from "../cartItems/cartItemsSlice";
import { selectNumberItemsInCart } from "../cartItems/cartItemsSlice";

export function AudioPlayer(track_id) {
    const dispatch = useDispatch();
    const audioRef = useSelector(selectAudioStatus)
    const audioStatus = useSelector(selectAudioPlaying)
    const trackList = useSelector(selectTracksToPlay)
    const itemsInCart = useSelector(selectNumberItemsInCart)

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

    const generateCartItem = (currentTrack) => {
        return {

            cart_item_number: itemsInCart+1,
    
            cart_item: {
                track_id: currentTrack.track_id,
                track_name: currentTrack.track_name,
                track_src: currentTrack.track_src,
                track_img_src: currentTrack.track_img_src,
                track_bpm: currentTrack.track_bpm,
                track_artist: currentTrack.track_artist,
                track_price: 35.00,
                lease_type: 'Basic'
            },
        }
    }

    return (
        <div>

            <div className="track">
                <div className="track-container">
                    <div>
                        <div>
                            <img src={currentTrack.track_img_src} id='cover-art' alt='cover-art' />

                        </div>                         
                    </div>
                    <div className='track-description'>
                        <p id="track-name">{currentTrack.track_name}</p>
                        <p id="track-bpm">{currentTrack.track_bpm}</p>
                        <div className='track-artist'>
                            <p>{currentTrack.track_artist}</p>
                            <img src='https://drive.google.com/uc?export=view&id=1mBnRA0aWy5kjRwPJ_qhN2BUIMdu064sE' alt='verification-badge'></img>
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
                        <button id='cart' onClick={() => dispatch(addToCart(generateCartItem(currentTrack)))}>
                            <img src={cartIcon} alt='cart-icon'/>
                            $35.00
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AudioPlayer