import React from 'react';
import { Image } from 'semantic-ui-react';

export default class BackImage extends React.Component {
  render() {
    return (
        <Image fluid className='starba'
               src='https://stardewvalley.net/wp-content/uploads/2017/12/stardewbackground.png'/>
    );
  }
}
