import React from 'react';
import { Image } from 'semantic-ui-react';

export default class Logo extends React.Component {
  render() {
    return (
        <Image centered className='title' src='https://stardewvalley.net/wp-content/uploads/2017/12/main_logo.png'/>
    );
  }
}
