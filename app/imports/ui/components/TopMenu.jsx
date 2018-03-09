import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: '#F9EC88' };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item id="home" style ={itemStyle}>
              HOME
            </Menu.Item>
            <Menu.Item>BLOG</Menu.Item>
            <Menu.Item>COMMUNITY</Menu.Item>
            <Menu.Item>WIKI</Menu.Item>
            <Menu.Item>MEDIA</Menu.Item>
            <Menu.Item>SHOP</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
            <Menu.Item fitted position='right'>
              <Icon name='twitter'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='facebook f'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='reddit'/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon name='mail'/>
            </Menu.Item>
          </Container>
        </Menu>
    );
  }
}
