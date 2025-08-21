// import React from 'react';
// import Navbar from './components/Navbar';
// import { Hero } from './components/Hero';
// import { Stats } from './components/Stats';
// import { About } from './components/About';
// import { Schedule } from './components/Schedule';
// import { Prizes } from './components/Prizes';
// import { Footer } from './components/Footer';
// import CircuitBorder  from './components/CircuitBorder';


// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
//         <CircuitBorder />
//         <Navbar />
//         <Hero />
//         <section id="stats"><Stats /></section>
//         <section id="about"><About /></section>
//         <section id="schedule"><Schedule /></section>
//         <section id="prizes"><Prizes /></section>
//         <Footer />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      {/* Header and Navigation */}
      <header>
        <div className="container">
          <div className="logo">
            <img src="/images/CogniHacks-transparent.png" alt="CogniHacks Logo" loading="lazy"/>
          </div>
          <h1 className='Banner'>CogniHacks 2025</h1>
        </div>
        <div className='container-right'>
              <nav>
                <ul>
                  <li><a href="#tracks">Tracks</a></li>
                  <li><a href="#sponsorship">Sponsorship</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
      </header>
      
      {/* Hero Section with Brain in the Background */}
      <section className="hero">
          <div className="hero-content">
            <h2>Innovate the Future with Neurotechnology</h2>
            <p>
              Join us as we bring BCIs to the mainstream and inspire impactful projects with AI.
            </p>
            <a
              href="https://form.jotform.com/252320960274150"
              className="cta-button"
            >
              Register Now!
            </a>
        </div>
      </section>
      
      {/* Why CogniHacks Section */}
      <section className="eventInfo">
        <div className="container">
          <h2 className="section-title">CogniHacks Is Coming at Zoho CRM (7:30 AM to 8 PM)</h2>
          <h3>
            August 30th - 4141 Hacienda Dr, Pleasanton, CA 94588
          </h3>
          <p>
          Join our community of innovators at CogniHacks 2025, a student-led hackathon bringing together coders, creators, and neurotech enthusiasts to explore the future of Brain-Computer Interfaces (BCIs). While BCIs have traditionally been used in clinical research, our mission is to mainstream their recreational and creative potential in the computer science world. By combining AI and HCI, our hackathon will inspire participants to build impactful, human-centered projects that push the boundaries of how we interact with technology.
          </p>
        </div>
      </section>
      <section id="tracks" className="container">
        <h2 className="section-title">The Tracks</h2>
        <div className="benefits">
          <div className="benefit">
          <img src="/images/1.png" alt="BCI Track Picture" loading="lazy" />
          <h3>BCI (Brain Computer Interfaces)</h3>
          <p>Introduce/demonstrate Brain Computer Interfaces and its general data flow to attendees and provide resources for BCI powered projects</p>
          </div>
          <div className="benefit">
          <img src="/images/4.png" alt="AI Track Picture" loading="lazy" />
            <h3>GenAI4Humans</h3>
            <p>Track focused on developing GenAI powered Agents/LLMs to make people's lives easiers wether it be through improved interfaces or personal life upgrades</p>
          </div>
          <div className="benefit">
          <img src="/images/2.png" alt="HCI (Concept) Track Picture" loading="lazy"/>
            <h3>HCI (Human Computer Interaction)</h3>
            <p>Idea based projects that present better interfaces humans can use to solve their tasks</p>
          </div>
        </div>
      </section>
      
      {/* Sponsorship Levels Section */}
      <section id="sponsorship" className="container">
        <h2 className="section-title">Sponsorship Levels</h2>
        <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3>Startup</h3>
            <p>Investment: $350</p>
            <ul>
              <li>Company Banner &amp; Logo on Shirts</li>
              <li>Logo on Website and Presentations</li>
              <li>Sponsor a Snack or Meal</li>
            </ul>
          </div>
          <div className="sponsor-card">
            <h3>Gold</h3>
            <p>Investment: $500</p>
            <ul>
              <li>All Startup Benefits</li>
              <li>Distribute Promotional Items</li>
              <li>Opportunity for Company Booth</li>
              <li>Access Attendee Profiles (LinkedIn/Github)</li>
            </ul>
          </div>
          <div className="sponsor-card">
            <h3>Diamond</h3>
            <p>Investment: $800 - $1,200</p>
            <ul>
              <li>All Gold Benefits</li>
              <li>Featured Mini Event or Talk/Workshop</li>
              <li>Reserved Judging Position</li>
              <li>Present at Opening &amp; Closing Ceremony</li>
            </ul>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          For special sponsorship arrangements, please email{' '}
          <a href="mailto:sponsors@cognihacks.com">sponsors@cognihacks.com</a>
        </p>
      </section>

      <section id="sponsors" className="container">
  <h2 className="section-title">Our Sponsors</h2>
  <div className="benefits">
    <div className="sponsor-card">
      <img src="/images/Zoho.png" alt="BCI Track Picture" loading="lazy" />
      <h3>
        <a href="https://www.zoho.com/" target="_blank" rel="noopener noreferrer">Zoho</a>
      </h3>
    </div>
    <div className="sponsor-card">
      <img src="/images/Emotiv.png" alt="AI Track Picture" loading="lazy" />
      <h3>
        <a href="https://www.emotiv.com/" target="_blank" rel="noopener noreferrer">Emotiv</a>
      </h3>
    </div>
    <div className="sponsor-card">
      <img src="/images/Nirmaan.png" alt="HCI Track Picture" loading="lazy"/>
      <h3>
        <a href="https://nirmaan.org/" target="_blank" rel="noopener noreferrer">Nirmaan</a>
      </h3>
    </div>
    <div className="sponsor-card">
      <img src="/images/Motif.png" alt="HCI Track Picture" loading="lazy"/>
      <h3>
        <a href="https://www.motifneuro.tech/" target="_blank" rel="noopener noreferrer">Motif</a>
      </h3>
    </div>
  </div>
</section>

            {/* Frequently Asked Questions */}
            <section id="sponsorship" className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="frequently-asked-questions">
          <div className="sponsor-card">
            <h3>What is CogniHacks?</h3>
            <p>Cognihacks is a hackathon focused on mainstreaming neurotechnology 
              in the CS world. As BCIs tend to primarily be used in clinical research, Our 
              vision is to bring awareness about recreational BCIs to coders in this hackathon, 
              inspiring them to make impactful projects with AI powered by BCI’s.
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Who can participate in CogniHacks?</h3>
            <p>Anyone. High schoolers, Neurotech enthusiasts, College students, people who wants to 
              learn more about BCIs, HCI, and their involvement with GenAI
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Do I need to have coding experience to join?</h3>
            <p>No prior coding experience is required. We have a no code HCI track but even if you want to join a coding track you can join a team in these tracks, and we can help you find a team!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>What should I bring to the hackathon?</h3>
            <p>Participants should bring laptop, charger, Emotiv's software if participating in the BCI Track (We will provide a instructions on how to install their software). We have free food and drinks!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Is there a cost to attend CogniHacks?</h3>
            <p>There is no cost because we have sponsors!
            </p>
          </div>
          <div className="sponsor-card">
            <h3>What is a BCI?</h3>
            <p>A Brain-Computer Interface (BCI) is a device that enables direct communication between your brain and a computer. Using sensors to detect brain signals, 
              BCIs allow users to control digital devices with their thoughts — no physical movement required. They're used in areas like neurorehabilitation, gaming, and now, 
              creative coding projects like those at CogniHacks!         
                <a href="https://www.youtube.com/watch?v=7ExYVjAROq0&list=PLnNov8ZQm7hJKPdE4Azqm_7B7PudMxRHg&index=18" target="blank" rel="noopener noreferrer"> More explanation here</a>
            </p>
          </div>
          <div className="sponsor-card">
            <h3>Do I need to bring a BCI? </h3>
            <p>
            A Brain-Computer Interface (BCI) is a device that enables direct communication between your brain and a computer. 
            Using sensors to detect brain signals, BCIs allow users to control digital devices with their thoughts — no physical movement required. 
            They're used in areas like neurorehabilitation, gaming, and now, creative coding projects like those at CogniHacks!
          </p>
          </div>
          <div className="sponsor-card">
            <h3>What is HCI?</h3>
            <p>Human-Computer Interaction (HCI) is the study and design of how people can better interact with computers and technology. It focuses on creating intuitive, efficient, and user-friendly interfaces — 
              from apps and websites to emerging tech like VR and BCIs. At CogniHacks, HCI plays a key role in making novel interfaces like BCIs more accessible, engaging, and impactful.
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          For special sponsorship arrangements, please email{' '}
          <a href="mailto:sponsors@cognihacks.com">sponsors@cognihacks.com</a>
        </p>
      </section>

            {/* Schedule */}
      <section id="sponsorship" className="container">
        <h2 className="section-title">Schedule</h2>
        <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3 style={{ fontSize: '2rem' }}>Important Note</h3>
            <p>During the hackathon, all updates, announcements, and essential resources will be posted on our live page. 
              Whether it's schedule changes, API keys, 
              important links, or project submission details, everything you need will be there.</p>
          </div>
          </div>
          <div className="sponsorship-levels">
          <div className="sponsor-card">
            <h3 style={{ fontSize: '2rem' }}>Times</h3>
            <ul className="schedule-container">
              <li>
                <strong className="schedule-time">7:30 AM</strong>
                <span className="schedule-title"> — Check-in & Breakfast</span>
                <br />
                <em>Registration desk open, coffee & snacks, Find/Finalize Groups</em>
              </li>
              <li>
                <strong className="schedule-time">8:30 AM</strong>
                <span className="schedule-title"> — Opening Ceremony</span>
                <br />
                <em>Introducing Sponsors, Schedule, Keynote Speaker</em>
              </li>
              <li>
                <strong className="schedule-time">9:15 AM</strong>
                <span className="schedule-title"> — Learning Track</span>
                <br />
                <em>Demonstrate and enable attendees to learn coding fundamentals pertaining to the field via a Learning Track Project</em>
              </li>
              <li>
                <strong className="schedule-time">10:30 AM</strong>
                <span className="schedule-title"> — Start Hacking</span>
                <br />
                <em>Begin working on projects</em>
              </li>
              <li>
                <strong className="schedule-time">12:30 PM</strong>
                <span className="schedule-title"> — Lunch Break</span>
                <br />
                <em>Get food after initial projects launch and also network with others</em>
              </li>
              <li>
                <strong className="schedule-time">1:30 PM</strong>
                <span className="schedule-title"> — Optional Product Demos</span>
                <br />
                <em>Demos are optional and will run parallel with hacking, 30 min</em>
              </li>
              <li>
                <strong className="schedule-time">2:00 PM</strong>
                <span className="schedule-title"> — Hack</span>
                <br />
                <em>Continue working on projects</em>
              </li>
  
              <li>
                <strong className="schedule-time">6:45 PM</strong>
                <span className="schedule-title"> — Judges Deliberate</span>
                <br />
                <em>Light dinner/snacks while judges go from project to project and deliberate. 3–5 min per team</em>
              </li>
              <li>
                <strong className="schedule-time">7:45 PM</strong>
                <span className="schedule-title"> — Awards & Closing Ceremony</span>
                <br />
                <em>Announce winners and close</em>
              </li>
              <li>
                <strong className="schedule-time">8:00 PM</strong>
                <span className="schedule-title"> — Wrap Up</span>
                <br />
                <em>Event concludes</em>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="container">
        <h2 className="section-title">Contact Us</h2>
        <p style={{ textAlign: 'center' }}>Have questions? We’d love to hear from you!</p>
        <p style={{ textAlign: 'center' }}>
          Email: <a href="mailto:hello@cognihacks.com">hello@cognihacks.com</a>
        </p>
      </section>
      
      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            CogniHacks is fiscally sponsored by Hack Club Bank, a project by The Hack Foundation, a 501(c)(3)
            nonprofit.
          </p>
          <p>&copy; 2025 CogniHacks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

