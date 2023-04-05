import React from "react";
import Top from '../Navbar/components/Navbar/index';
import './contact.css';
import Foot from '../Navbar/Footer';

const Contacts = () => {
    return (
        <>
            <Top />
            <div class="containers">
        <div class="text">Feel Free to s Us</div>
        <form action="#">
           <div class="form-row">
              <div class="input-data">
                 <input type="text" required />
                 <div class="underline"></div>
                 <label for="">First Name</label>
              </div>
              <div class="input-data">
                 <input type="text" required />
                 <div class="underline"></div>
                 <label for="">Last Name</label>
              </div>
           </div>
           <div class="form-row">
              <div class="input-data">
                 <input type="text" required />
                 <div class="underline"></div>
                 <label for="">Email Address</label>
              </div>
              <div class="input-data">
                 <input type="text" required />
                 <div class="underline"></div>
                 <label for="">Mobile No.</label>
              </div>
           </div>
           <div class="form-row">
              <div class="input-data textarea">
                 <textarea rows="8" cols="80" required></textarea>
                 <br />
                 <div class="underline"></div>
                 <label for="">Write your message</label>
                 <br />
                 <div class="form-row submit-btn">
                    <div class="input-data">
                       <div class="inner"></div>
                       <input type="submit" value="submit" />
                    </div>
                 </div>
              </div>
           </div>
        </form>
     </div>
<Foot />
        </>
    );
};

export default Contacts;