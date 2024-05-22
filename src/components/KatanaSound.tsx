import React from 'react';
import useSound from 'use-sound';
import katana from '../assets/audio/katana.mp3';




export const KatanaSound = () => {
  const [play, { stop }] = useSound(katana);

  return (
   <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
    
    </div>

    
  );
};
