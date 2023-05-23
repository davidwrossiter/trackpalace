import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    trackList: [
        {
            track_id: '1',
            track_name: 'Digital Drip',
            track_src: 'https://docs.google.com/uc?export=download&id=1AL_yKm9IMfonYDF1ZJ8C6-gdT3tCQGXk',
            track_img_src: 'https://drive.google.com/uc?export=view&id=10bV8bjb9CupMRMn602ScI4Q66TnNFMiQ',
            track_bpm: '168 BPM',
            track_artist: 'Davi Beats',
            track_is_playing: false,
        },
        {
            track_id: '2',
            track_name: '7 Sins',
            track_src: 'https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5',
            track_img_src: 'https://drive.google.com/uc?export=view&id=1b4811KWd98cjKjwuZqHvzsHwuMrC0plj',
            track_bpm: '149 BPM',
            track_artist: 'Davi Beats',
            track_is_playing: false,
        },
        {
            track_id: '3',
            track_name: 'Digital Drip',
            track_src: 'https://docs.google.com/uc?export=download&id=1AL_yKm9IMfonYDF1ZJ8C6-gdT3tCQGXk',
            track_img_src: 'https://drive.google.com/uc?export=view&id=10bV8bjb9CupMRMn602ScI4Q66TnNFMiQ',
            track_bpm: '168 BPM',
            track_artist: 'Davi Beats',
            track_is_playing: false,
        },
        {
            track_id: '4',
            track_name: 'Digital Drip',
            track_src: 'https://docs.google.com/uc?export=download&id=1AL_yKm9IMfonYDF1ZJ8C6-gdT3tCQGXk',
            track_img_src: 'https://drive.google.com/uc?export=view&id=10bV8bjb9CupMRMn602ScI4Q66TnNFMiQ',
            track_bpm: '168 BPM',
            track_artist: 'Davi Beats',
            track_is_playing: false,
        },
        {
            track_id: '5',
            track_name: '7 Sins',
            track_src: 'https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5',
            track_img_src: 'https://drive.google.com/uc?export=view&id=1b4811KWd98cjKjwuZqHvzsHwuMrC0plj',
            track_bpm: '149 BPM',
            track_artist: 'Davi Beats',
            track_is_playing: false,
        },
      
    ],


}

export const tracksToPlaySlice = createSlice({
    name: 'tracksToPlay',
    initialState,
    reducers: {
        addTrack: (state, action) => {
            const nextID = state.trackList.length + 1
            state.trackList = [...state.trackList, {track_id: nextID, ...action.payload}];
        },
        removeTrack: (state, action) => {
            state.trackList = state.trackList.filter(track => track.track_id !== action.payload)
        },
        setPlaying: (state, action) => {
            state.trackList[action.payload].track_is_playing = !state.trackList[action.payload].track_is_playing;
        },
        setPlayingFalse: (state, action) => {
            state.trackList[action.payload-1].track_is_playing = false;
        },
        setPlayingTrue: (state, action) => {
            state.trackList[action.payload-1].track_is_playing = true;
        }
        
    }
})



export const { addTrack, removeTrack, setPlaying, setPlayingFalse, setPlayingTrue } = tracksToPlaySlice.actions
export const selectTracksToPlay = (state) => state.tracksToPlay.trackList
export default tracksToPlaySlice.reducer
// export const selectAudioStatus = (state) => state.audioPlayer.status
// export const selectAudioPlaying = (state) => state.audioPlayer.audio
// export default audioPlayerSlice.reducer