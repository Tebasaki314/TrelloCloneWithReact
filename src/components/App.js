import React, { Component } from 'react';
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

class App extends Component {
  render() {

    const { lists } = this.props;
    return (
      <div className="App">
        <h2>Hello YouTube</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList
              listId={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
