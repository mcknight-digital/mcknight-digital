import '../styles/styles.css';

function ContactForm() {
  return (
    <div className="ContactForm">
      <h1>
        We're ready when you are!
      </h1>

      <p>
       No matter where you are in your IT Journey, we're excited to help! If you're wanting to learn more about what we do, get a quote for a job, or just ask who has the best Coffee in Ohio &mdash; We're ready to help!
      </p>

      <form action="">
        <label for="fname">First Name:</label >
        <br/>
        <input type="text" name="FirstName" id="firstName" />

        <br/>
        <label for="lname">Last Name:</label >
        <br/>
        <input type="text" name="LastName" id="LastName" />
        
        <br/>
        <br/>
        <label for="companyName">Company Name:</label >
        <input type="text" name="CompanyName" id="companyName" />

        <br/>
        <br/>
        <label for="email">E-Mail Address:</label >
        <input type="text" name="email" id="email" />

        <br/>
        <br/>
        <label for="phoneNumber">Phone Number:</label >
        <input type="text" name="PhoneNumber" id="PhoneNumber" />
        
        <br/>
        <br/>
        <label for="budget">Budget:</label>

        <br/>
        <select name="budget" id="budget">
          <option value=""></option>
          <option value="Less than $500.00 USD">Less than $500.00 USD</option>
          <option value="$600.00&mdash;$1,000.00 USD">600.00&mdash;$1,000.00 USD</option>
          <option value="$1,000.00&mdash;$8,000.000 USD">$1,000.00&mdash;$8,000.000 USD</option>
          <option value="More than $8,000.00 USD">More than $8,000.00 USD</option>
        </select>



        <br/>
        <label for="message">Message:</label><br/>
        <textarea type="textarea" name="FirstName" id="message" />
        
        <br/>
        <button type="submit">Send</button>
      </form>

    </div>
  );
}

export default ContactForm;
