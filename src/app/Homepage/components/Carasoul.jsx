"use client";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Cities from "./Cities";

export default class Carasoul extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0, // Initialize the current slide index
      autoPlay: true, // Set autoplay state
    };
  }

  // Function to move to the next slide
  next = () => {
    this.setState((state) => ({
      currentSlide: (state.currentSlide + 1) % 5, // Assuming there are multiple slides
    }));
  };

  // Function to move to the previous slide
  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide === 0 ? 2 : state.currentSlide - 1, // Loop backwards
    }));
  };

  // Toggle autoplay on and off
  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  // Update current slide based on external input
  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    const buttonStyle = {
      fontSize: 20,
      padding: "5px 20px",
      margin: "5px 0px",
    }; // Button style
    const containerStyle = { margin: "5px 0 20px" }; // Container style

    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-32 overflow-hidden">
        {/* Carousel Component */}
        <Carousel
          autoPlay={this.state.autoPlay} // Autoplay state
          selectedItem={this.state.currentSlide} // Set current slide
          onChange={this.updateCurrentSlide} // Update on slide change
          infiniteLoop={true} // Enable looping
          showThumbs={false} // Hide thumbnails
          showStatus={false} // Hide status
          showIndicators={false} // Show navigation dots
          showArrows={false} // Hide default arrows
          swipeable={true}
          className="carousel-with-margin"
        >
          {/* Slide 1 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={'/img.png'} name={'Manchester'} country={'UK'} />
            <Cities image={'/img.png'} name={'London'} country={'UK'} />
            <Cities image={'/img.png'} name={'Paris'} country={'France'} />
            <Cities image={'/img.png'} name={'New York'} country={'USA'} />
            <Cities image={'/img.png'} name={'Berlin'} country={'Germany'} />
            <Cities image={'/img.png'} name={'Tokyo'} country={'Japan'} />
            <Cities image={'/img.png'} name={'Tokyo'} country={'Japan'} />

          </div>

          {/* Slide 2 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={'/img.png'} name={'Sydney'} country={'Australia'} />
            <Cities image={'/img.png'} name={'Toronto'} country={'Canada'} />
            <Cities image={'/img.png'} name={'Barcelona'} country={'Spain'} />
            <Cities image={'/img.png'} name={'Moscow'} country={'Russia'} />
            <Cities image={'/img.png'} name={'Shanghai'} country={'China'} />
            <Cities image={'/img.png'} name={'Dubai'} country={'UAE'} />
            <Cities image={'/img.png'} name={'Tokyo'} country={'Japan'} />

          </div>

          {/* Slide 3 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={'/img.png'} name={'Sydney'} country={'Australia'} />
            <Cities image={'/img.png'} name={'Toronto'} country={'Canada'} />
            <Cities image={'/img.png'} name={'Barcelona'} country={'Spain'} />
            <Cities image={'/img.png'} name={'Moscow'} country={'Russia'} />
            <Cities image={'/img.png'} name={'Shanghai'} country={'China'} />
            <Cities image={'/img.png'} name={'Dubai'} country={'UAE'} />
          </div>

          {/* Slide 4 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={'/img.png'} name={'Sydney'} country={'Australia'} />
            <Cities image={'/img.png'} name={'Toronto'} country={'Canada'} />
            <Cities image={'/img.png'} name={'Barcelona'} country={'Spain'} />
            <Cities image={'/img.png'} name={'Moscow'} country={'Russia'} />
            <Cities image={'/img.png'} name={'Shanghai'} country={'China'} />
            <Cities image={'/img.png'} name={'Dubai'} country={'UAE'} />
          </div>
        </Carousel>

        {/* Navigation Buttons */}
        <div style={containerStyle} className="flex justify-end gap-2 mt-16 ">
          {/* Prev Button */}
          <button
            onClick={this.prev}
            style={buttonStyle}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>

          {/* Next Button */}
          <button
            onClick={this.next}
            style={buttonStyle}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    );
  }
}
