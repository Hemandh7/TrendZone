import React from 'react';
import "../CSS/slider.css";


class Slider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        currentIndex: 0,
      };
    }
  
    handlePrevClick = () => {
      this.setState(prevState => {
        const newIndex = prevState.currentIndex - 5;
        return { currentIndex: newIndex < 0 ? 0 : newIndex };
      });
    };
  
    handleNextClick = () => {
      this.setState(prevState => {
        const newIndex = prevState.currentIndex + 5;
        return {
          currentIndex:
            newIndex > this.props.data.length - 5 ? prevState.currentIndex : newIndex,
        };
      });
    };
  
    render() {
      const { data } = this.props;
      const { currentIndex } = this.state;
  
      const currentSlideData = data.slice(currentIndex, currentIndex + 5);
  
      return (
        <div className="slider-container">
          <div className="prev-next-btns">
            <button className="prev-btn" onClick={this.handlePrevClick}>
              Prev
            </button>
            <button className="next-btn" onClick={this.handleNextClick}>
              Next
            </button>
          </div>
          <div className="slider">
            {currentSlideData.map(item => (
              <div key={item.name} className="slide-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  

export default Slider;
