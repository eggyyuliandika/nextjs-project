import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="display-button-navbar-home">
          <div className="button-navbar-home">
            <button className="btn-signin-navbar-home">Sign In</button>
            <button className="btn-signup-navbar-home">Sign Up</button>
          </div>
        </div>

        <div className="display-title-home">
          <div className="logo-doordash-title-home">
            <img className="icon-d" src="icon.png" />
            <img className="icon-doordash" src="doordash.png" />
          </div>
          <div className="title-home">
            <span>Restaurants and more, delivered to your door</span>
          </div>
          <div className="wrapper-input-home">
            <div className="wrapperflex-input-home">
              <div className="display-input-home">
                <div className="input-home">
                  <div className="icon-input-home">
                    <img src="location.png" />
                  </div>
                  <div className="box-input-home">
                    <input placeholder="Enter delivery address"></input>
                  </div>
                  <div className="button-input-home">
                    <button className="button-input-home-dekstop">
                      <img src="rightarrow.png" />
                    </button>
                    <button className="button-input-home-mobile">
                      <img src="rightarrow1.png" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="decs">
        <div className="display-decs">
          <div className="box-decs">
            <div className="span-decs">
              <span>Get the best DoorDash experience</span>
            </div>
            <button className="button-new">
              <div className="display-button-new">
                <div className="decs-display-button-new">
                  <div className="span-button-new">
                    <span>Get the app</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div> */}
      <div className="display-box-fitur">
        <div className="wrapperflex-box-fitur">
          <div className="container-box-fitur">
            <div className="box-fitur">
              <div className="img-box-fitur">
                <img src="scoot.svg" />
              </div>
              <div className="content-box-fitur">
                <div className="desc-box-fitur">
                  <h2>Become a Dasher</h2>
                  <h3>
                    As a delivery driver, youll make reliable money-working
                    anytime, anywhere.
                  </h3>
                </div>
                <button className="button-box-fitur">
                  <span>Start earning</span>
                  <img src="arrow.png" />
                </button>
              </div>
            </div>
            <div className="box-fitur">
              <div className="img-box-fitur">
                <img src="store.svg" />
              </div>
              <div className="content-box-fitur">
                <div className="desc-box-fitur">
                  <h2 className="h2-desc-fitur-store-and-mobile">
                    Become a Partner
                  </h2>
                  <h3>
                    Grow your business and reach new customers by partnering
                    with us.
                  </h3>
                </div>
                <button className="button-box-fitur">
                  <span>Sign up your store</span>
                  <img src="arrow.png" />
                </button>
              </div>
            </div>
            <div className="box-fitur">
              <div className="img-box-fitur">
                <img src="mobile.svg" />
              </div>
              <div className="content-box-fitur">
                <div className="desc-box-fitur">
                  <h2 className="h2-desc-fitur-store-and-mobile">
                    Try the App
                  </h2>
                  <h3>
                    Experience the best your neighborhood has to offer, all in
                    one app.
                  </h3>
                </div>
                <button className="button-box-fitur">
                  <span>Get the app</span>
                  <img src="arrow.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display-box-restaurants">
        <div className="wrapperflex-box-restaurants">
          <div className="content-box-restaurants">
            <div className="title-box-restaurants">
              <span>Its all here.</span>
              <span>All in one app.</span>
            </div>
            <div className="desc-box-restaurants">
              <span>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </span>
            </div>
            <div className="display-button-box-restaurants">
              <div className="button-box-restaurants">
                <a className="desc-button-box-restaurants">
                  <div>Get the app</div>
                </a>
              </div>
            </div>
          </div>
          <div className="display-img-box-restaurants">
            <img src="food.jpg" />
          </div>
        </div>
      </div>
      <div className="display-box-food">
        <div className="wrapperflex-box-food">
          <div className="display-img-box-food">
            <img src="salad.jpg" />
          </div>
          <div className="content-box-food">
            <div className="title-box-food">
              <span>Every Flavor Welcome</span>
            </div>
            <div className="desc-box-food">
              <span>
                From your neighborhood sushi spot to the burger and fries you
                crave, choose from over 300,000 local and national favorites
                across the U.S., Canada and Australia.
              </span>
            </div>
            <div className="display-button-box-restaurants">
              <div className="button-box-restaurants">
                <a className="desc-button-box-restaurants">
                  <div>Find Restaurants</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display-list-footer">
        <div className="box-list-footer-atas">
          <footer>
            <div className="wrapperflex-list-footer-atas">
              <div className="container-list-footer-atas">
                <h2>Top Cities</h2>
                <div className="top-cuines-list-footer-atas">
                  <div className="content-top-cuines-list-footer-atas">
                    <a href="">
                      <span>New York City</span>
                    </a>
                    <a href="">
                      <span>Los Angeles</span>
                    </a>
                    <a href="">
                      <span>Toronto</span>
                    </a>
                    <a href="">
                      <span>Chicago</span>
                    </a>
                    <a href="">
                      <span>Houston</span>
                    </a>
                    <a href="">
                      <span>Brooklyn</span>
                    </a>
                    <a href="">
                      <span>San Diego</span>
                    </a>
                    <a href="">
                      <span>Las Vegas</span>
                    </a>
                  </div>
                  <div className="content-top-cuines-list-footer-atas">
                    <a href="">
                      <span>San Francisco</span>
                    </a>
                    <a href="">
                      <span>Seattle</span>
                    </a>
                    <a href="">
                      <span>Atlanta</span>
                    </a>
                    <a href="">
                      <span>Queens</span>
                    </a>
                    <a href="">
                      <span>Vancouver, BC</span>
                    </a>
                    <a href="">
                      <span>Miami</span>
                    </a>
                    <a href="">
                      <span>San Antonio</span>
                    </a>
                    <a href="">
                      <span>Phoenix</span>
                    </a>
                  </div>
                  <div className="content-top-cuines-list-footer-atas">
                    <a href="">
                      <span>Denver</span>
                    </a>
                    <a href="">
                      <span>Austin</span>
                    </a>
                    <a href="">
                      <span>Washington, DC</span>
                    </a>
                    <a href="">
                      <span>Dallas</span>
                    </a>
                    <a href="">
                      <span>Melbourne</span>
                    </a>
                    <a href="">
                      <span>Sydney</span>
                    </a>
                    <a href="">
                      <span>Montreal</span>
                    </a>
                    <a href="">
                      <span>All Cities</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container-list-footer-atas2">
                <h2>Top Cuines Near Your</h2>
                <div className="top-cuines-list-footer-atas">
                  <div className="content-top-cuines-list-footer-atas">
                    <a href="">
                      <span>Pizza Near Me</span>
                    </a>
                    <a href="">
                      <span>Chinese Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sushi Near Me</span>
                    </a>
                    <a href="">
                      <span>Cafe Near Me</span>
                    </a>
                    <a href="">
                      <span>Mexican Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Thai Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Lunch Near Me</span>
                    </a>
                    <a href="">
                      <span>Seafood Near Me</span>
                    </a>
                  </div>
                  <div className="content-top-cuines-list-footer-atas">
                    <a href="">
                      <span>Indian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Dessert Near Me</span>
                    </a>
                    <a href="">
                      <span>Burgers Near Me</span>
                    </a>
                    <a href="">
                      <span>Asian Food Me</span>
                    </a>
                    <a href="">
                      <span>Italian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Vegan Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sandwiches Near Me</span>
                    </a>
                    <a href="">
                      <span>Restaurants Near Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="display-list-footer-bawah">
              <div className="container-list-footer-bawah">
                <div className="content-list-footer-bawah">
                  <h2>Get To Know Us</h2>
                  <a href="">
                    <span>About Us</span>
                  </a>
                  <a href="">
                    <span>Careers</span>
                  </a>
                  <a href="">
                    <span>Investors</span>
                  </a>
                  <a href="">
                    <span>Company Blog</span>
                  </a>
                  <a href="">
                    <span>Engineering Blog</span>
                  </a>
                  <a href="">
                    <span>Merchant Blog</span>
                  </a>
                  <a href="">
                    <span>Gift Cards</span>
                  </a>
                  <a href="">
                    <span>Dasher Centrals</span>
                  </a>
                  <a href="">
                    <span>DoorDash Stories</span>
                  </a>
                  <a href="">
                    <span>Linkedln</span>
                  </a>
                  <a href="">
                    <span>Glassdoor</span>
                  </a>
                  <a href="">
                    <span>Accessibilty</span>
                  </a>
                </div>
                <div className="content-list-footer-bawah">
                  <h2>Let Us Help You</h2>
                  <a href="">
                    <span>Account Details</span>
                  </a>
                  <a href="">
                    <span>Order History</span>
                  </a>
                  <a href="">
                    <span>Help</span>
                  </a>
                </div>
                <div className="content-list-footer-bawah">
                  <h2>Doing Business</h2>
                  <a href="">
                    <span>Become a Dasher</span>
                  </a>
                  <a href="">
                    <span>Be a Partner Restaurants</span>
                  </a>
                  <a href="">
                    <span>Get Dashers for Deliveries</span>
                  </a>
                  <a href="">
                    <span>Get DoorDash for Work</span>
                  </a>
                </div>
              </div>
              <div className="display-available-on-the">
                <div className="available-on-the">
                  <img className="img-appstore" src="appstore.png" />
                  <img className="img-googleplay" src="gp1.png" />
                </div>
              </div>
            </div>
            <div className="display-end-footer">
              <div className="content-end-footer">
                <div className="img-end-footer">
                  <img src="icon.png" />
                </div>
                <a href="">
                  <span>Terms of Service</span>
                </a>
                <a href="">
                  <span>Privacy</span>
                </a>
                <a href="">
                  <span>Notice At Collection</span>
                </a>
                <a href="">
                  <span>Delivery Locations</span>
                </a>
                <a href="">
                  <span>© 2021 DoorDash</span>
                </a>
              </div>
              <div className="icon-medsos">
                <img src="facebook.png" />
                <img src="twitter.png" />
                <img src="instagram.png" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
