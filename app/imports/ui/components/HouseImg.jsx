import React from 'react';
import { Image } from 'semantic-ui-react';

export default class HouseImg extends React.Component {
  render() {
    return (
        <Image style={{ position: 'absolute', top: '600px' }} fluid
               src='https://stardewvalley.net/wp-content/uploads/2017/12/sdv_divider.png'/>
    );
  }
}
