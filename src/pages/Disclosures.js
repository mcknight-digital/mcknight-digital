import '../styles/styles.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';
import phone from '../images/phone-white.png';


function Disclosures() {

  let phoneStyle = {
    width: "2.5%",
    position: "relative",
    right: "12px",
    top: "8px"
  };

  return (
    <div className="App">
        <Navbar/>
        <div className="AboutContentSection">
          <h1>Disclosures:</h1>

          <h3 style={{paddingBottom: "30px"}}>UPDATED SEPTEMBER 25th | 10:00 AM</h3>
          
          <p>
              In an effort to maintain the highest level of transparency, McKnight Digital is providing disclosures in our routine business operations.
          </p>

          <h2>Section One, Naming:</h2>
          <p>
            The use of McKnight Digital on marketing and advertising materials is provided under the parent "doing business as" (d/b/a) or trade name of Adam McKnight d/b/a, The McKnight Organization. Adam McKnight d/b/a, The McKnight Organization is the primary holder of "McKnight Digital".
          </p>
          <blockquote>
            Put in English, McKnight Digital is only a name used for advertising purposes. Our legal business name is: Adam McKnight d/b/a The McKnight Organization.
          </blockquote>

          <h2 style={{paddingTop: "50px"}}>Section Two, Financials:</h2>

          <p style={{paddingBottom: "100px"}}>
              McKnight Digital &mdash; Adam McKnight d/b/a The McKnight Organization, is dedicated to providing transparency in business. As such, we release Annual Reports on or about February 1 of each year (pending, an external, third-party audit). Although we are not required to do so, we believe it is important to keep our commitment to being transparent!

            <blockquote style={{fontStyle: "italic"}}>
              Note: Certain financial details cannot be disclosed due to confidentiality or Non-Disclosure Agreements, McKnight Digital &mdash; Adam McKnight d/b/a The McKnight Organization may hold with its clients.
            </blockquote>

              From time-to-time, we may receive commissions from affiliate programs. One such program, is Amazon. We may receive a small portion of an order when a user adds a product we provide our link for. This is typically done on YouTube in the description of our videos.
              
              <br/> <br/>

              We have the right to, and may donate a portion
              of our net income to charitable organizations. We will disclose this in our Annual Report. 

              <br/> <br/>

              What We Report:
              <li>
                Marketing and Advertising (Budgeted and Actual Spending).
              </li>
              <li>
                Operational Expenses (Budgeted and Actual Spending) &mdash; Operational Expenses may include spending like: Mobile Phone Service, Internet Service, Rent for Offices, etc.
              </li>
              <li>
                Travel Expenses (Budget and Actual Spending) &mdash; Travel Expenses include spending like: Flights, Hotel Stays, Dining, Rental Cars, etc for approved business travel and events.
              </li>


          </p>

          <h2 style={{paddingTop: "50px"}}>Section Three, Advertising:</h2>

          <p style={{paddingBottom: "100px"}}>
              McKnight Digital &mdash; Adam McKnight d/b/a The McKnight Organization, may place Advertisements for Marketing. These Advertisements may be placed on Social Media Platforms, With Ad Brokers, or through other mediums.

            <blockquote style={{fontStyle: "italic"}}>
              Note: Advertising and Marketing budgets are disclosed in our Annual Report. See the Section Above for more details on what we report.
            </blockquote>
          </p>

          <h2 style={{paddingTop: "50px"}}>Section Four, Pricing:</h2>

          <p style={{paddingBottom: "100px"}}>
             The following is our current pricing and fee schedule...

            <blockquote style={{fontStyle: "italic"}}>
              Note: This may not include all costs. Costs for equipment, may be more, and will be listed on your Service Agreement and Proposal.
            </blockquote>

            <table>
              <tr>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Billed Monthly</td>
              </tr>
              <tr>
                <td>1. Cable Drops</td>
                <td>$50/drop</td>
              </tr>
              <tr>
                <td>2. Level 3 | Managed Services</td>
                <td>$500/mo</td>
                <td>X</td>
              </tr>
              <tr>
                <td>3. Level 2 | Managed Services</td>
                <td>$150/mo</td>
                <td>X</td>
              </tr>
              <tr>
                <td>4. Level 1 | Managed Services</td>
                <td>$85/mo</td>
                <td>X</td>
              </tr>
              <tr>
                <td>1. Cable Drops</td>
                <td>$50/drop</td>
              </tr>
            </table>

          </p>

         

          <a href="/about">
             <img src={phone} style={phoneStyle} alt="phone"/>
             Call Us
          </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Disclosures;
