import React from 'react'
import 'styles/App.css'

function Home() {
  return (
    <div className="w3-content w3-border-left w3-border-right">
      <nav
        className="w3-sidebar w3-light-grey w3-collapse w3-top"
        style={{ zIndex: 3, width: '260px' }}
        id="mySidebar"
      >
        <div className="w3-container w3-display-container w3-padding-16">
          <h3>Rental</h3>
          <h3>from $99</h3>
          <h6>per night</h6>

          <hr />

          <form action="/action_page.php" target="_blank">
            <p>
              <label>
                <i className="fa fa-calendar-check-o"></i> Check In
              </label>
            </p>

            <input className="w3-input w3-border" type="date" name="CheckIn" required />

            <p>
              <label>
                <i className="fa fa-calendar-o"></i> Check Out
              </label>
            </p>

            <input className="w3-input w3-border" type="date" name="CheckOut" required />

            <p>
              <label>
                <i className="fa fa-male"></i> Adults
              </label>
            </p>

            <input className="w3-input w3-border" type="number" defaultValue="1" name="Adults" min="1" max="6" />

            <p>
              <label>
                <i className="fa fa-child"></i> Kids
              </label>
            </p>

            <input className="w3-input w3-border" type="number" defaultValue="0" name="Kids" min="0" max="6" />

            <p>
              <button className="w3-button w3-block w3-green w3-left-align" type="submit">
                <i className="fa fa-search w3-margin-right"></i>
                Search availability
              </button>
            </p>
          </form>
        </div>

        <div className="w3-bar-block">
          <a href="#apartment" className="w3-bar-item w3-button w3-padding-16">
            <i className="fa fa-building"></i> Apartment
          </a>

          <button className="w3-bar-item w3-button w3-padding-16 w3-left-align" type="button">
            <i className="fa fa-rss"></i> Subscribe
          </button>

          <a href="#contact" className="w3-bar-item w3-button w3-padding-16">
            <i className="fa fa-envelope"></i> Contact
          </a>
        </div>
      </nav>

      <main className="w3-main w3-white" style={{ marginLeft: '260px' }}>
        <div className="w3-container" id="apartment">
          <h2 className="w3-text-green">The Apartment</h2>

          <div className="w3-display-container">
            <img src="/w3images/livingroom.jpg" alt="Living Room" style={{ width: '100%', marginBottom: '-6px' }} />
            <div className="w3-display-bottomleft w3-container w3-black">
              <p>Living Room</p>
            </div>
          </div>
        </div>

        <div className="w3-container">
          <h4><b>The Space</b></h4>

          <div className="w3-row w3-large">
            <div className="w3-half">
              <p><i className="fa fa-fw fa-male"></i> Max people: 4</p>
              <p><i className="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
              <p><i className="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
            </div>

            <div className="w3-half">
              <p><i className="fa fa-fw fa-clock-o"></i> Check In: After 3PM</p>
              <p><i className="fa fa-fw fa-clock-o"></i> Check Out: 12PM</p>
            </div>
          </div>

          <hr />

          <h4><b>Amenities</b></h4>

          <div className="w3-row w3-large">
            <div className="w3-half">
              <p><i className="fa fa-fw fa-shower"></i> Shower</p>
              <p><i className="fa fa-fw fa-wifi"></i> WiFi</p>
              <p><i className="fa fa-fw fa-tv"></i> TV</p>
            </div>

            <div className="w3-half">
              <p><i className="fa fa-fw fa-cutlery"></i> Kitchen</p>
              <p><i className="fa fa-fw fa-thermometer"></i> Heating</p>
              <p><i className="fa fa-fw fa-wheelchair"></i> Accessible</p>
            </div>
          </div>

          <hr />

          <h4><b>Extra Info</b></h4>
          <p>
            Our apartment is really clean and we like to keep it that way. Enjoy the lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            We accept:
            <i className="fa fa-credit-card w3-large"></i>
            <i className="fa fa-cc-mastercard w3-large"></i>
            <i className="fa fa-cc-amex w3-large"></i>
            <i className="fa fa-cc-visa w3-large"></i>
            <i className="fa fa-cc-paypal w3-large"></i>
          </p>

          <hr />

          <h4><b>Rules</b></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="w3-container" id="contact">
          <h2>Contact</h2>
          <p><i className="fa fa-map-marker w3-margin-right"></i>Chicago, US</p>
          <p><i className="fa fa-phone w3-margin-right"></i>Phone: +00 151515</p>
          <p><i className="fa fa-envelope w3-margin-right"></i>Email: mail@mail.com</p>

          <form action="/action_page.php" target="_blank">
            <p>
              <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
            </p>
            <p>
              <input className="w3-input w3-border" type="email" placeholder="Email" required name="Email" />
            </p>
            <p>
              <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
            </p>
            <button type="submit" className="w3-button w3-green">Send a Message</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Home