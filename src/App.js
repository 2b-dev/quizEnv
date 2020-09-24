import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function QueryParamsDemo() {
  let query = useQuery();
}

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const backgroundStage = "stageBackground stage" + this.state.stage;
    return (
      <>
        <div className={backgroundStage}>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ stage: this.state.stage + 1 });
            }}
          >
            ทดสอบ
          </button>
        </div>
      </>
    );
  }
}

function Main() {
  return (
    <div>
      <Quiz />
    </div>
  );
}
