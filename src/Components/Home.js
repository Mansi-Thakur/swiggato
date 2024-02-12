import React from "react";
import { Link } from "react-router-dom";
import Bakery from "./../Assets/Bakery.jpg";
import Bar from "./../Assets/Bar.jpg";
import Cafe from "./../Assets/Cafe.jpg";
import ChineseFood from "./../Assets/ChineseFood.jpg";
import IceCream from "./../Assets/IceCream.jpg";
import IndianFood from "./../Assets/IndianFood.jpg";
import Pizza from "./../Assets/Pizza.jpg";
import Sushi from "./../Assets/Sushi.jpg";
import ThaiFood from "./../Assets/ThaiFood.jpg";

export const Home = () => {
  const foodCategories = [
    { name: "Bakery", image: Bakery },
    { name: "Bar", image: Bar },
    { name: "Cafe", image: Cafe },
    { name: "Chinese Food", image: ChineseFood },
    { name: "Ice Cream", image: IceCream },
    { name: "Indian Food", image: IndianFood },
    { name: "Pizza", image: Pizza },
    { name: "Sushi", image: Sushi },
    { name: "Thai Food", image: ThaiFood },
  ];
  return (
    <div className="homeFullContainer">
      <div className="homeSubContainer">
        <div className="homeContainer">
          <main className="homeMain">
            <div className="homeDiv">
              <div className="homeNestedDiv">
                <div>
                  <div className="homeContent">
                    <div className="homeContentHeader">
                      <div className="homeHeader">
                        <h2>What's on your mind?</h2>
                        <div>
                        <button className="buttonLeft">◀</button>
                          <button >▶</button>
                        </div>
                      </div>
                    </div>
                    <div className="foodChoicesContainer">
                      <div className="foodChoicesContainerRow">
                      {foodCategories.map((category, index) => (
                          <div className="foodChoicesContainer" key={index}>
                            <Link to={`/listing/${category.name.toLowerCase()}`} className="foodChoice">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt={category.name}
                                  src={category.image}
                                />
                                <h4 className="foodChoiceText">{category.name}</h4>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
