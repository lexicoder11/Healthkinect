import { useNavigate } from 'react-router-dom'
import Navigation from '../shared/Navigation'
import './PageLayout.css'
const logo = require('../../images/logo192.png')
const settingsIcon = require('../../images/Outline.png')
const hornIcon = require('../../images/Shape.png')
const userIcon = require('../../images/Oval.png')


function PageLayout({ children }) {
  const navigate = useNavigate()
  return (
    <div className="page-layout">
      <div className="sidebar">
        <div className="top-container">
          <div className="branding">
            <img src={logo} alt="logo" />
            <span>Health Kinect</span>
          </div>
          <div className="horizontal-line">
            <hr />
          </div>

          <div className="nav">
            <button
              onClick={() => {
                navigate('/create-event')
              }}
              className="create-event-btn"
            >
              Payments
            </button>
            <button
              onClick={() => {
                navigate('/dashboard')
              }}
              className="layout-button"
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                navigate('/events')
              }}
              className="layout-button"
            >
              Stripe
            </button>
          </div>
        </div>

        <div className="logout-area">
          <hr className="bottom-line-break"></hr>
          <button
            className="logout-link"
            onClick={() => {
              localStorage.setItem('token', '')
              window.location.href = '/login'
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="main-container">
        <header>
          <div className="search-bar"></div>

          <div className="icons">
            <img src={settingsIcon} alt="setting-icon" />

            <img src={hornIcon} alt="horn-icon" />

            <img src={userIcon} alt="user-pic" />
          </div>
        </header>

        <div className="main">
          <span className="page-title"></span>
          <div className="forms">{children}</div>
        </div>
        <footer>
          <p>
            Health Kinect &copy; 2024 Built by{' '}
            Lexi Allen 
          </p>
        </footer>
      </div>
    </div>
  )
}

export default PageLayout