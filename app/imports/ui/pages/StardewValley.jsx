import React from 'react';
import TopMenu from '../components/TopMenu';
import Logo from '../components/Logo';
import BackImage from '../components/BackImage';
import HouseImg from '../components/HouseImg';
import MidTxt from '../components/MidTxt';
import BotTxt from '../components/BotTxt';
import BotPics from '../components/BotPics';

export default class StardewValley extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Logo/>
          <BackImage/>
          <HouseImg/>
          <MidTxt/>
          <BotTxt/>
          <BotPics/>
        </div>
    );
  }
}
