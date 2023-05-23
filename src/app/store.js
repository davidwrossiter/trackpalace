import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import audioPlayerReducer from '../features/audioPlayer/audioPlayerSlice';
import tracksToPlayReducer from '../features/tracksToPlay/tracksToPlaySlice';
import cartItemsReducer from '../features/cartItems/cartItemsSlice';
export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayerReducer,
    tracksToPlay: tracksToPlayReducer,
    cartItems: cartItemsReducer
  },
});
