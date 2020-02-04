import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Menu from "./components/Menu/Menu";
import friends from "./friends.json";
import Titles from "./components/TitleDiv/TitleD"
import Footer from "./components/Footer/footer"
import "./App.css";


class App extends React.Component {
  state = {
    friends:friends,
    counter:0,
    topScore: 0,
  };

  removeFriend = id => {
    const friends = this.state.friends.reverse(friend => friend.id !== id);
    friends.map(friend => {
      if (friend.id === id && friend.isClicked === false){
        friend.isClicked = true;
        this.setState({friends:friends});
      }else if (friend.id === id && friend.isClicked === true) {
        alert("You can only click once in the same character!");
        this.setState({ counter: 0 });
      }
    });

    console.log(friends);
  
  };

  MakeScore = () => {
    
    this.setState({ counter: this.state.counter+1 });
    if(this.state.topScore === this.state.counter){
      this.setState({ counter: this.state.topScore+1 });
    }
  };



  render() {
    return (
      <Wrapper>
        <Menu score={this.state.counter} topScore={this.state.topScore}/>
        <Titles />
        {
          this.state.friends.map(friend => {
            return (<FriendCard
              removeFriend={this.removeFriend}
              MakeScore={this.MakeScore}
              topScore={this.topScore}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              isClicked={friend.isClicked}
            />)
          })
          
        }
        <Footer />
      </Wrapper>
    );
  }

}

export default App;
