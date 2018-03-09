import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

export default class MidTxt extends React.Component {
  render() {
    return (
        <Grid container={true}>
          <Grid.Row centered={true}>
            <Header style={{ color: '#0066cc' }} size='huge'> You&#39;re moving to the Valley... </Header>
          </Grid.Row>
          <Grid.Row style={{ font: '25px', padding: 0 }} centered={true}>
            You&#39;ve inherited your grandfather&#39;s old farm plot in&nbsp;
            <span className="highlight">Stardew Valley.</span>
          </Grid.Row>
          <Grid.Row centered>
            Armed with hand-me-down tools and a few coins, you set out to begin your new life!

          </Grid.Row>
          <hr/>
        </Grid>
    );
  }

}
