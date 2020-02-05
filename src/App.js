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
        this.setState({ counter: this.state.counter+1 });
       
      }else if (friend.id === id && friend.isClicked === true) {
        this.setState({ counter: 0 });
        console.log(this.state.counter);
        alert("You can only click once in the same character!!");
       
      }
      // else if(this.state.counter === 11){
      //   this.setState({ counter: 0 });
      //   console.log(this.state.counter);
      //   alert("you won!!")
      // }
    });

    console.log(friends);
  
  };

  // winningCount = id =>{
  //   friends.map(friend => {
  //     if (friend.isClicked === true){

  //       alert("You won!")
  //     }
  //   });

  // }



  render() {
    return (
      <Wrapper>
        <Menu score={this.state.counter} topScore={this.state.topScore}/>
        <Titles />
        {
          this.state.friends.map(friend => {
            return (<FriendCard
              removeFriend={this.removeFriend}
              makeScore={this.makeScore}
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
