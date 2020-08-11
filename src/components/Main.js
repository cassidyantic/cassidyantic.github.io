import PropTypes from 'prop-types'
import React from 'react'
import physicaltherapy from '../images/physicaltherapy.jpg'
import stargrabber from '../images/stargrabber.jpg'
import studybuddy from '../images/studybuddy.jpg'
import profilepic from '../images/profilepic.jpg'
import aboutmephoto from '../images/aboutmephoto.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={aboutmephoto} alt="" />
          </span>
          <p>
          Creative software developer with experience in front-end and back-end web development,
          specializing in user experience optimization. Solution-driven, problem-solving debugger 
          with a keen eye for detail. Friendly, communicative, and hard-working teammate. 
          </p>
          <p>
          Techical proficiencies: JavaScript, TypeScript, Java, HTML, CSS, Sass, Bootstrap, jQuery, 
          React.js, Node.js, Three.js, C, C#, .NET, RESTful web services, SOAP, XML tools, WordPress,
          Git, VMWare, SQLite. 
          <br/>
          Technical familiarities: MySQL, MS SQL, Python, AWS.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          {/* <span className="image projone">
            <img src={stargrabber} alt="" />
          </span> */}
          <p>
          <a href="https://codepen.io/cassantic/pen/wvKpKpv" target="_blank">
          <img className="image projone" src={stargrabber} alt="" />
          </a>
            A JavaScript game about an alligator and frog in space, built using Three.js and Tween.js. 
            Click to jump and grab the stars, and look out for moon rocks! 
            <br/>

          <a href="https://codepen.io/cassantic/pen/VweLWbQ" target="_blank">
          <img className="image projone" src={physicaltherapy} alt="" />
          </a>
            A simple sample dynamic webpage using JavaScript, HTML and CSS. 
            <br/>

            <a href="https://github.com/cassidyantic/pearapp" target="_blank">
          <img className="image projone" src={studybuddy} alt="" />
          </a>
            A web application created to connect students with each other
            to form study groups. Allows students to create profiles, 
            set up events and contact each other. Built using C# .NET, React, and TypeScript.
          </p>
        
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image profile">
            <img src={profilepic} alt="" />
          </span>
          <p>
          Hi, my name is Cassidy Antic! 
          <br/>
          I am passionate about building software and working with new technologies. 
          I have been developing software for three years as a freelancing web developer, building
          web based applications, static and dynamic websites, games, animations, and UI components.
          <br/>
          I am now looking for an opportunity to join a team where I can plant my roots and build something meaningful. 

          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/cassidyantic/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/cassantic" className="icon fa-codepen">
                <span className="label">CodePen</span>
              </a>
            </li>
            {/* <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li> */}
            <li>
              <a
                href="https://github.com/cassidyantic"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
