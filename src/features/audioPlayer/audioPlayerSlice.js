import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    audio: false,
    status: '0',

}

export const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState,
    reducers: {
        playAudio: (state, action) => {
            state.audio = true;
            state.status = action.payload;
        },
        pauseAudio: (state, action) => {
            state.audio = false;
            state.status = action.payload;
        },
    }
})

export const { playAudio, pauseAudio } = audioPlayerSlice.actions

export const selectAudioStatus = (state) => state.audioPlayer.status
export const selectAudioPlaying = (state) => state.audioPlayer.audio
export default audioPlayerSlice.reducer