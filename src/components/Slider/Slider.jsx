import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import "./slider.scss";

const Slider = ({ list, sliderMov = true, navigate = true, time = 6000 }) => {
  const [currentItem, setCurrentItem] = useState(1);

  useEffect(() => {
    const idInterval = setInterval(() => {
      setCurrentItem((currentItem) =>
        currentItem === list.length ? 1 : currentItem + 1
      );
    }, time);
    return () => {
      clearInterval(idInterval);
    };
  }, [time, list.length, currentItem]);

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div
          className="slider__content"
          style={{ transform: `translateX(-${(currentItem - 1) * 100}%)` }}
        >
          {list.map((l, i) => (
            <Item key={l.title} {...l} isActive={i + 1 === currentItem} />
          ))}
        </div>
      </div>
      {sliderMov && (
        <SliderMov
          setCurrentItem={setCurrentItem}
          currentItem={currentItem}
          length={list.length}
        />
      )}
      {navigate && (
        <Navigation
          length={list.length}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      )}
      {/* <Progress /> */}
    </div>
  );
};

const SliderMov = ({ length, currentItem, setCurrentItem }) => {
  return (
    <div className="slider__mov">
      <button
        className={`slider__mov-btn slider__mov-prev${
          currentItem === 1 ? " slider__mov-btn--disable" : ""
        }`}
        onClick={() => setCurrentItem((currentItem) => currentItem - 1)}
      >
        <i className="slider__next-icon">{"<"}</i>
      </button>
      <button
        className={`slider__mov-btn slider__mov-next${
          currentItem === length ? " slider__mov-btn--disable" : ""
        }`}
        onClick={() => setCurrentItem((currentItem) => currentItem + 1)}
      >
        <i className="slider__next-icon">{">"}</i>
      </button>
    </div>
  );
};

const Navigation = ({ length, setCurrentItem, currentItem }) => {
  const circles = new Array(length).fill(undefined);
  return (
    <ul className="slider__navigation">
      {circles.map((c, i) => (
        <NavigationItem
          key={i + 1}
          number={i + 1}
          {...c}
          active={i + 1 === currentItem}
          setCurrentItem={setCurrentItem}
        />
      ))}
    </ul>
  );
};

const NavigationItem = ({ number, setCurrentItem, active }) => {
  return (
    <button
      className={`slider__navigation-btn${
        active ? " slider__navigation-btn--active" : ""
      }`}
      onClick={() => setCurrentItem(number)}
    >
      {number}
    </button>
  );
};

const Item = ({ title, description, image, isActive }) => {
  return (
    <div className={`slider__item${isActive ? " slider__item--active" : ""}`}>
      <Card title={title} description={description} image={image} />
    </div>
  );
};

export default Slider;
