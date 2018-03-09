import React from 'react';
import { Header, Grid, List } from 'semantic-ui-react';

export default class BotTxt extends React.Component {
  render() {
    return (
        <Grid centered container={true}>
          <Grid.Row>
            <div>
              <Header style={{ color: '#0066cc' }} size='huge'> Features </Header>
            </div>
          </Grid.Row>
          <List bulleted className='isBulleted'>
            <List.Item><span className="highlight"> Build the farm of your dreams:&nbsp;</span>
              Turn your overgrown fields into a lively and bountiful farm!
            </List.Item>
            <List.Item><span className="highlight"> Express yourself:&nbsp;</span>
              There are hundreds of character & home customization options to choose from!
            </List.Item>
            <List.Item><span className="highlight"> Master your ranching skills:&nbsp;</span>
              Raise animals, go fishing, tend to crops & craft useful machines for your farm!
            </List.Item>
            <List.Item><span className="highlight"> Become a part of the local community:&nbsp;</span>
              Pelican Town is home to 30 residents you can get to know!
            </List.Item>
            <List.Item><span className="highlight"> Meet someone special:&nbsp;</span>
              With 12 townsfolk to date, you may even find someone to start a family with!
            </List.Item>
            <List.Item><span className="highlight"> Explore vast, mysterious caves:&nbsp;</span>
              Encounter dangerous monsters & valuable treasures deep underground!
            </List.Item>

          </List>
          <hr/>
        </Grid>
    );
  }

}
