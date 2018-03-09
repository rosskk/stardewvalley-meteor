import React from 'react';
import 'semantic-ui-css/semantic.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import StardewValley from '../pages/StardewValley';


/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={StardewValley}/>
          </div>
        </Router>
    );
  }
}

export default App;
