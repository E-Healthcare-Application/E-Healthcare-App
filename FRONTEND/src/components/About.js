import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';

const AboutUs = () => {
  return (
    <>
      <div className="mx-4">
        <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify>
          <Tab eventKey="home" title="About US">
            <Card>
              <Card.Body>
                <b>1. Welcome to E-Healthcare, a leading healthcare institution dedicated to providing exceptional medical care, compassion, and innovation. <br /> 
                   2. Our commitment to your health and well-being is unwavering, and we take pride in being a trusted healthcare partner for you and your loved ones.</b>
              </Card.Body>
            </Card>
            <br /><br />
          </Tab>

          <Tab eventKey="profile" title="Our Vision">
            <Card className='ml-3 mr-3'>
              <Card.Body>
                <b>At E-Healthcare, our vision is to be a beacon of excellence and innovation in healthcare, inspiring hope and transforming lives...</b>
                <br /><br />
                <b>1. Pioneering Healthcare Advancements:- </b><br />
                We envision a future where medical breakthroughs are not just anticipated, but actively pursued...
                <br /><br />
                <b>2. Empowering Patients, Enriching Lives:-</b> <br />
                Our vision extends beyond medical procedures; it encompasses a holistic approach to patient care...
                <br /><br />
                <b>3. Global Impact, Local Roots:-</b> <br />
                While our aspirations are global, our roots remain firmly embedded in the local community...
                <br /><br />
                <b>4. Unparalleled Patient Experience:-</b> <br />
                We aspire to set new standards for the patient experience...
                <br /><br />
                <b>5. Collaboration and Partnerships:- </b> <br />
                We envision E-Healthcare as a hub of collaboration...
                <br /><br />
                <b>6. Leadership in Preventive Care:-</b> <br />
                Prevention is the cornerstone of a healthier society...
                <br /><br />
                <b>7. A Legacy of Excellence:-</b> <br />
                Ultimately, our vision is to leave a lasting legacy of excellence, compassion, and innovation...
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="longer-tab" title="Our Mission">
            <Card>
              <Card.Body>
                <b> 1. At E-Healthcare, our mission is to deliver superior healthcare services that empower individuals to lead healthier lives. <br /> 
                    2. We strive to combine advanced medical technology with compassionate care to ensure every patient receives the attention and treatment they deserve.</b>
                <br /><br />
                <b>1. Expertise and Excellence:- </b><br />
                With a team of highly skilled physicians, surgeons, nurses, and support staff...
                <br /><br />
                <b>2. Patient-Centered Approach:-</b> <br />
                We understand that each patient is unique...
                <br /><br />
                <b>3. State-of-the-Art :- </b><br />
                Equipped with cutting-edge technology...
                <br /><br />
                <b>4. Compassionate Care:- </b> <br />
                We believe that healthcare goes beyond medical procedures...
                <br /><br />
                <b>5. Community Engagement:- </b> <br />
                We actively engage with our community...
                <br /><br />
                <b>6. Research and Innovation:- </b> <br />
                Innovation drives progress in healthcare...
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>

        <div className="container">
          <div className="row md-6">
            <h3 className='mt-4'>E-Healthcare Office Location</h3>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.6604071051975!2d74.17851327520802!3d17.28365678358591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc18248b7008219%3A0x66a33d8736d2773b!2sSunBeam%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1738679884115!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: "0" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
