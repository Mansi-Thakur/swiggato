import React from "react";
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
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="Bakery"
                                  src={Bakery}
                                />
                                <h4 className="foodChoiceText">Bakery</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="Bar"
                                  src={Bar}
                                />
                                <h4 className="foodChoiceText">Bar</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="Cafe"
                                  src={Cafe}
                                />
                                <h4 className="foodChoiceText">Cafe</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="ChineseFood"
                                  src={ChineseFood}
                                />
                                <h4 className="foodChoiceText">Chinese Food</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="IceCream"
                                  src={IceCream}
                                />
                                <h4 className="foodChoiceText">Ice Cream</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="IndianFood"
                                  src={IndianFood}
                                />
                                <h4 className="foodChoiceText">Indian Food</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="Pizza"
                                  src={Pizza}
                                />
                                <h4 className="foodChoiceText">Pizza</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="Sushi"
                                  src={Sushi}
                                />
                                <h4 className="foodChoiceText">Sushi</h4>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="foodChoicesContainer">
                          <div>
                            <a className="foodChoice" href="./">
                              <div className="foodChoiceBox">
                                <img
                                  className="foodChoiceImage"
                                  alt="ThaiFood"
                                  src={ThaiFood}
                                />
                                <h4 className="foodChoiceText">Thai Food</h4>
                              </div>
                            </a>
                          </div>
                        </div>
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
