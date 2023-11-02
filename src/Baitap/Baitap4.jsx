import React, { Component } from "react";

export default class Baitap4 extends Component {
  constructor() {
    super();
    this.state = {
      listImg: [
        "/public/img/phikien1.jpg",
        "/public/img/phikien2.jpg",
        "/public/img/phikien3.jpg",
        "/public/img/phikien4.jpg",
      ],
      currentImg: 0,
    };
  }

  changeImage = (status) => {
    switch (status) {
      case 0:
        if (this.state.currentImg > 0) {
          this.setState({
            currentImg: this.state.currentImg - 1,
          });
        } else {
          this.setState({
            currentImg: this.state.listImg.length - 1,
          });
        }
        break;
      case 1:
        if (this.state.currentImg < this.state.listImg.length - 1) {
          this.setState({
            currentImg: this.state.currentImg + 1,
          });
        } else {
          this.setState({
            currentImg: 0,
          });
        }
        break;
    }
  };

  render() {
    return (
      <div>
        <div>
          <img
            width={200}
            src={this.state.listImg[this.state.currentImg]}
            alt="img"
          />
        </div>
        <div>
          <button onClick={() => this.changeImage(0)}>previous</button>
          <button onClick={() => this.changeImage(1)}>next</button>
        </div>
      </div>
    );
  }
}
