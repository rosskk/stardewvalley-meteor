import React from 'react';
import { Image, Grid } from 'semantic-ui-react';

export default class BotPics extends React.Component {
  render() {
    return (
        <Grid centered container={true}>
          <Grid.Row columns={6}>
            <Grid.Column>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/STEAM_logo.png'/>
            </Grid.Column>
            <Grid.Column style={{ paddingTop: '25px' }}>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/HUMBLESTORE_logo.png'/>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/GOG_logo.png'/>
            </Grid.Column>
            <Grid.Column style={{ paddingTop: '30px' }}>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/XBOXOne_logo.png'/>
            </Grid.Column>
            <Grid.Column style={{ paddingTop: '30px' }}>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/PS4_logo.png'/>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/NintendoSwitch_logo.png'/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column style={{ paddingLeft: '250px' }}>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/cf_logo.png'/>
            </Grid.Column>
            <Grid.Column style={{ paddingRight: '50px' }}>
              <Image src='https://stardewvalley.net/wp-content/uploads/2017/12/ca_logo.png'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }

}
