import React, { Component } from "react";
import MemoryGameCard from "../MemoryGameCard";
import images from "../../images.json";
import "./MainContainer.css";

class MainContainer extends Component {
  state = {
    images,
    message: "Click one of the images to begin!",
    score: 0,
    topScore: 0,
    winner: false,
  };

  handleFakeClick = (id, clicked) => {
    return this.state;
  };

  handleClick = (id, clicked) => {
    const imageOrder = this.state.images;

    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "You Guessed Incorrectly!",
        score: 0,
      });
    } else {
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;
      const newWinner = newScore === this.state.images.length ? true : false;
      const newMessage =
        newScore === this.state.images.length
          ? "YOU WON!! Refresh to play again"
          : "You  guessed correctly";

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: newMessage,
        score: newScore,
        topScore: newTopScore,
        winner: newWinner,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid mainCardContainer">
        <div className="gameMessage text-center">
          <p>
            {/* className={this.state.message === "You Guessed Incorrectly!"? }> */}
            {this.state.message}
          </p>
        </div>
        <div className="gameScores text-center">
          <p>
            Score: {this.state.score} | Top Score: {this.state.topScore}
          </p>
        </div>
        <div className="container">
          <div className="row">
            {this.state.images.map((image) => (
              <MemoryGameCard
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={
                  this.state.winner ? this.handleFakeClick : this.handleClick
                }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
