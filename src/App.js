import { Content } from "carbon-components-react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MySkillsPage from "./content/MySkillsPage/MySkillsPage";
import ManagerDashboard from "./content/ManagerView/ManagerDashboard/ManagerDashboard";

function App() {
  return (
    <>
      <NavBar />
      <Content>
        <Switch>
          <Route exact path="/" component={MySkillsPage} />
          <Route path="/dashboard" component={ManagerDashboard} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
