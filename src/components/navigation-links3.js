import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links3.css'

const NavigationLinks3 = (props) => {
  return (
    <nav className={`navigation-links3-nav ${props.rootClassName} `}>
      <span className="navigation-links3-text">{props.text5}</span>
      <div
        data-thq="thq-dropdown"
        className="navigation-links3-thq-dropdown list-item"
      >
        <div
          data-thq="thq-dropdown-toggle"
          className="navigation-links3-dropdown-toggle"
        >
          <span className="navigation-links3-text1">Albums</span>
          <div
            data-thq="thq-dropdown-arrow"
            className="navigation-links3-dropdown-arrow"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-links3-icon">
              <path d="M426 726v-428l214 214z" className=""></path>
            </svg>
          </div>
        </div>
        <ul
          data-thq="thq-dropdown-list"
          className="navigation-links3-dropdown-list"
        >
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle1"
            >
              <a
                href={props.link_text}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-days-to-grow"
              >
                {props.text3}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown1 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle2"
            >
              <a
                href={props.link_text2}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-loner"
              >
                {props.text32}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown2 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle3"
            >
              <a
                href={props.link_text21}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-loner1"
              >
                {props.text321}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown3 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle4"
            >
              <a
                href={props.link_text211}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-mom"
              >
                {props.text3211}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown4 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle5"
            >
              <a
                href={props.link_text2111}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-recover"
              >
                {props.text32111}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown5 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle6"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-links3-icon2">
                <path
                  d="M874 598v-214h-52v192h-48v-150h-54v150h-48v-192h-54v214q0 18 13 30t31 12h170q18 0 30-12t12-30zM576 438v-54h-170v256h170v-54h-106v-46h106v-54h-106v-48h106zM362 640v-256h-52v150l-108-150h-52v256h52v-150l110 150h50zM854 170q36 0 60 25t24 61v512q0 36-24 61t-60 25h-684q-36 0-60-25t-24-61v-512q0-36 24-61t60-25h684z"
                  className=""
                ></path>
              </svg>
              <a
                href={props.link_text21111}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-weird-state"
              >
                {props.text321111}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown6 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle7"
            >
              <a
                href={props.link_text211111}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-when-the-wind-blows"
              >
                {props.text3211111}
              </a>
            </div>
          </li>
          <li
            data-thq="thq-dropdown"
            className="navigation-links3-dropdown7 list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="navigation-links3-dropdown-toggle8"
            >
              <a
                href={props.link_text2111111}
                target="_blank"
                rel="noreferrer noopener"
                className="navigation-links3-year-3"
              >
                {props.text32111111}
              </a>
            </div>
          </li>
        </ul>
      </div>
      <span font-size="1rem" className="navigation-links3-text2">
        {props.text21}
      </span>
      <span font-size="1rem" className="navigation-links3-text3">
        {props.text31}
      </span>
      <span font-size="1rem" className="navigation-links3-text4">
        {props.text41}
      </span>
    </nav>
  )
}

NavigationLinks3.defaultProps = {
  text21: 'DJ Ev',
  link_text211111:
    'https://soundcloud.com/yearthree/sets/when-the-wind-blows-album?si=ae6495e32fdf44c6aa72beaed9bf4b10&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32111111: 'Year Three',
  text3211: 'Mom 3:16',
  text321: 'Lost Valentine',
  text41: 'Listen',
  link_text2:
    'https://soundcloud.com/yearthree/sets/loner?si=a12af9a8e6d94534a546335b2de5e996&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  rootClassName: '',
  text321111: 'Weird State',
  text31: 'Merch',
  link_text2111:
    'https://soundcloud.com/yearthree/sets/recover-now-or-never?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  link_text21:
    'https://soundcloud.com/yearthree/sets/lost-valentine?si=e6c2046aa8634b539adda2b4ad48272b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  link_text:
    'https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text3211111: 'When the Wind Blows',
  link_text211:
    'https://soundcloud.com/yearthree/sets/mom-3-16-album?si=86c42737389a43669d304298323bf524&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32: 'Loner EP',
  link_text2111111:
    'https://soundcloud.com/yearthree/sets/year-three?si=d0e622465a7a4d0aa9a759bef663a6f4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text32111: 'Recover Now or Never',
  text3: 'Days to Grow',
  link_text21111:
    'https://soundcloud.com/yearthree/sets/weird-state?si=ea2bad563c9f4eff9ab1285f4d78e394&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
  text5: 'Home',
  link_text1:
    'https://soundcloud.com/yearthree/sets/thurgood-grooves?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
}

NavigationLinks3.propTypes = {
  text21: PropTypes.string,
  link_text211111: PropTypes.string,
  text32111111: PropTypes.string,
  text3211: PropTypes.string,
  text321: PropTypes.string,
  text41: PropTypes.string,
  link_text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text321111: PropTypes.string,
  text31: PropTypes.string,
  link_text2111: PropTypes.string,
  link_text21: PropTypes.string,
  link_text: PropTypes.string,
  text3211111: PropTypes.string,
  link_text211: PropTypes.string,
  text32: PropTypes.string,
  link_text2111111: PropTypes.string,
  text32111: PropTypes.string,
  text3: PropTypes.string,
  link_text21111: PropTypes.string,
  text5: PropTypes.string,
  link_text1: PropTypes.string,
}

export default NavigationLinks3
