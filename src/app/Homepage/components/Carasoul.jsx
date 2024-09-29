"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Cities from "./Cities";

export default class Carasoul extends React.Component {
  constructor(props) {
    super(props);

    this.carouselRef = React.createRef();
  }

  // Move to the next slide
  next = () => {
    this.carouselRef.current.next();
  };

  // Move to the previous slide
  prev = () => {
    this.carouselRef.current.prev();
  };

  render() {
    const buttonStyle = {
      fontSize: 20,
      padding: "5px 20px",
      margin: "5px 0px",
    };

    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-32 overflow-hidden">
        {/* Carousel Component */}
        <Carousel
          ref={this.carouselRef}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
        >
          {/* Slide 1 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.png"} name={"Manchester"} country={"UK"} />
            <Cities image={"/img.png"} name={"London"} country={"UK"} />
            <Cities image={"/img.png"} name={"Paris"} country={"France"} />
            <Cities image={"/img.png"} name={"New York"} country={"USA"} />
            <Cities image={"/img.png"} name={"Berlin"} country={"Germany"} />
            <Cities image={"/img.png"} name={"Tokyo"} country={"Japan"} />
            <Cities image={"/img.png"} name={"Tokyo"} country={"Japan"} />
          </div>

          {/* Slide 2 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.png"} name={"Sydney"} country={"Australia"} />
            <Cities image={"/img.png"} name={"Toronto"} country={"Canada"} />
            <Cities image={"/img.png"} name={"Barcelona"} country={"Spain"} />
            <Cities image={"/img.png"} name={"Moscow"} country={"Russia"} />
            <Cities image={"/img.png"} name={"Shanghai"} country={"China"} />
            <Cities image={"/img.png"} name={"Dubai"} country={"UAE"} />
            <Cities image={"/img.png"} name={"Tokyo"} country={"Japan"} />
          </div>

          {/* Slide 3 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.png"} name={"Sydney"} country={"Australia"} />
            <Cities image={"/img.png"} name={"Toronto"} country={"Canada"} />
            <Cities image={"/img.png"} name={"Barcelona"} country={"Spain"} />
            <Cities image={"/img.png"} name={"Moscow"} country={"Russia"} />
            <Cities image={"/img.png"} name={"Shanghai"} country={"China"} />
            <Cities image={"/img.png"} name={"Dubai"} country={"UAE"} />
          </div>

          {/* Slide 4 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.png"} name={"Sydney"} country={"Australia"} />
            <Cities image={"/img.png"} name={"Toronto"} country={"Canada"} />
            <Cities image={"/img.png"} name={"Barcelona"} country={"Spain"} />
            <Cities image={"/img.png"} name={"Moscow"} country={"Russia"} />
            <Cities image={"/img.png"} name={"Shanghai"} country={"China"} />
            <Cities image={"/img.png"} name={"Dubai"} country={"UAE"} />
          </div>
        </Carousel>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-16">
          <button
            onClick={this.prev}
            style={buttonStyle}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
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
