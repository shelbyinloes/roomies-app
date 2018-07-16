import React, {Component} from "react";
import CollapsableMapper from "./CollapsableMapper";
import CreateChoresContainer from "../containers/CreateChoresContainer";
import {Tabs, Tab} from "react-bootstrap";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      dailyChore: {
        chore: ""
      },
      weeklyChore: {
        chore: ""
      },
      tabs: {
        tabName: ["Charlie", "Becca", "Jackson"]
      }
    };
  }

  render() {
    const tabStyle = {
      padding: "10px"
    };
    return (
      <div style={tabStyle}>
        <h2>Daily Chore Admin</h2>
        {/* <CreateChoresContainer /> */}
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title={this.state.tabs.tabName[0]}>
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
            <CreateChoresContainer />
          </Tab>
          <Tab eventKey={2} title={this.state.tabs.tabName[1]}>
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
            <CreateChoresContainer />
          </Tab>
          <Tab eventKey={3} title={this.state.tabs.tabName[2]}>
            <CollapsableMapper data={this.props.dailyChores} path="dailyChore" field="chore" />
            <CollapsableMapper data={this.props.weeklyChores} path="weeklyChore" field="chore" />
            <CreateChoresContainer />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Admin;
