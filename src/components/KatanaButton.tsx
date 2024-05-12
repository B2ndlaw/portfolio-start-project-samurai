import React from 'react';
import useSound from 'use-sound';
import katana from '../assets/audio/katana.mp3';
import { HeaderMenu } from '../layout/header/headerMenu/HeaderMenu';

const items = ["Home", "My Skills", "My Works", "Sensei", "Contact"];

export const KatanaButton = () => {
  const [play, { stop }] = useSound(katana);

  return (
   <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
    <HeaderMenu menuItems={items} />
    </div>
    
  );
};
