import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
      .catch(err => console.log('We have an error ' + err))
  }

  searchTextType(e) {

  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={e => { this.setState({ searchField: e.target.value }) }}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
