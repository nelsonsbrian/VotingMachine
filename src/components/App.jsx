import React from 'react';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidate: null,
      masterPresList: [
        {
          name: "Kenneth",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 21,
          exp: 2,
          party: "Democrat",
          votes: 2,
          image: "https://img.icons8.com/dotty/40/34495e/user-male.png"
        },
        {
          name: "David Zhu",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 35,
          exp: 12,
          party: "Republican",
          votes: 4,
          image: "https://img.icons8.com/color/50/000000/user.png"
        }
      ],
      masterStateList: [
        {
          name: "Unmarried Derek",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 29,
          exp: 7,
          party: "Independant",
          votes: 11,
          image: "https://img.icons8.com/office/40/000000/user-male.png"
        },
        {
          name: "Ahmed",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 45,
          exp: 22,
          party: "Republican",
          votes: 7,
          image: "https://img.icons8.com/plasticine/40/34495e/user-male.png"
        }
      ],
      masterLocalList: [
        {
          name: "Chris Crow",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 31,
          exp: 3,
          party: "Democrat",
          votes: 2,
          image: "https://img.icons8.com/cotton/50/000000/user.png"
        },
        {
          name: "Panatda",
          desc: "What is now happening to Marx's theory has, in the course of history, happened   repeatedly to the theories of revolutionary thinkers and leaders of oppressed classes fighting for emancipation. During the lifetime of great revolutionaries, the oppressing classes constantly hounded them, received their theories with the most savage malice, the most furious hatred and the most unscrupulous campaigns.",
          age: 26,
          exp: 6,
          party: "Independant",
          votes: 15,
          image: "https://img.icons8.com/ios/40/34495e/user-female-filled.png"
        }
      ]
    };
    this.changeCandidate = this.changeCandidate.bind(this);
  }

  changeCandidate(pickedCandidate) {
    let temp = pickedCandidate;
    this.setState({ candidate: temp })
  }


  render() {
    let data;
    if (this.state.candidate === "Pres") {
      data = this.state.masterPresList;
    } else if (this.state.candidate === "State") {
      data = this.state.masterStateList;
    } else {
      data = this.state.masterLocalList;
    }
    return (
      <div>
        <style jsx>{`
            font-family: Helvetica;
          `}</style>
        <div className='container'>
        <Header changeCandidate={this.changeCandidate} />
          <Content
            data={data}
          />
        </div>

        {/* <Switch>
            <Route exact path='/' component={} />
          </Switch> */}
      </div>
    );
  }
}
//App.propTypes = {
//};

export default App;
