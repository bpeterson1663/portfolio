import Link from 'next/link'
import styles from './resume.module.scss'
import { SKILLS } from './constants'
import Grid from '../components/grid/grid'

export default function Page() {
  return (
    <div className={styles.resume}>
      <div className={styles['section-container']}>
        <div className={styles['contact-info']}>
          <h2>Brady J. Peterson</h2>
          <span>(952) 250-1663</span>
          <span>bpeterson1663@gmail.com</span>
          <Link className={styles.link} target="_blank" href="https://github.com/bpeterson1663">
            Github
          </Link>
        </div>
      </div>
      <div className={styles['section-container']}>
        <h2>Technical Skills</h2>
        <div className={styles['skill-container']}>
          {SKILLS.map((skill) => {
            return (
              <div className={styles['skill']} key={skill}>
                {skill}
              </div>
            )
          })}
        </div>
      </div>
      <div className={styles['section-container']}>
        <h2>Experience</h2>
        <div className={styles['job-description']}>
          <h3>When I Work</h3>
          <h4>Full Stack Engineer -- August 2021 – October 2023</h4>
          <ul>
            <li>
              Demonstrated ability to learn new languages by quickly becoming familiar with our backend services written
              in PHP and GoLang.
            </li>
            <li>Assisted with the migration of our UI test suite from Enzyme to React Testing Library.</li>
            <li>
              Demonstrated organizational and planning skills by developing new features for the Attendance product
              (Manage Pay Period Improvements, On Demand Pay, Rounding, etc.)
            </li>
            <li>
              Demonstrated teamwork skills by working with other developers and customer support engineers to trouble
              shoot and resolve any issues our customers may have experienced.
            </li>
            <li>
              <strong>Technologies Used:</strong> React, TypeScript, PHP, Golang, Kubernetes, React Testing Library
            </li>
          </ul>
        </div>
        <div className={styles['job-description']}>
          <h3>Calabrio</h3>
          <h4>Software Engineer – UI -- January 2019 – August 2021</h4>
          <ul>
            <li>
              Researched and implemented Cypress into our workflow and CI pipeline to help increase code coverage on our
              UI repositories.
            </li>
            <li>
              Increased code coverage using Cypress and Jest from zero tests to covering all major functionality in the
              WFM product which resulted in no WFM UI hot fixes being deployed during 2020.
            </li>
            <li>
              Demonstrated knowledge of React and proper state management by reducing the rendering time of our Real
              Time Adherence Widget from over 2 seconds to less than 180 milliseconds; measured using React Profiler.
            </li>
            <li>
              Analyzed and researched security vulnerabilities in our legacy code base and developed a plan to fix them.
            </li>
            <li>
              Demonstrated organizational and planning skills by developing new features for the WFM product (Schedule
              History and Restore, Activity Note, displaying localized date and times based on language selected, etc.).
            </li>
            <li>
              Demonstrated teamwork skills by working with other developers and customer support engineers to trouble
              shoot and resolve any issues our customers may have experienced.
            </li>
            <li>
              <strong>Technologies Used:</strong> React, TypeScript, AngularJS, Jest, Node.js, Cypress , Docker,
              Jenkins, Azure DevOps
            </li>
          </ul>
          <h4>Associate Software Engineer – UI -- July 2017 – January 2019</h4>
          <ul>
            <li>
              Provided front end technical support to the Calabrio One products, specifically the Workforce Management
              (WFM) product.
            </li>
            <li>
              Enhanced the WFM product by troubleshooting and solving numerous bugs and resolving escalations, improving
              the overall customer experience.
            </li>
            <li>
              Demonstrated passion for development by continuing to improve technical skills in JavaScript, AngularJS,
              Jest and Webpack.
            </li>
            <li>
              <strong>Technologies Used:</strong> JavaScript, AngularJS, Jest, Node.js, HTML , CSS, Jenkins, Webpack
            </li>
          </ul>
        </div>
        <div className={styles['job-description']}>
          <h3>Fourcubed</h3>
          <h4>Front End Developer/Contractor -- July 2016 – January 2018</h4>
          <ul>
            <li>
              Expanded beyond Front End Development by assisting in Back End Development for all products and learning
              new languages and technologies such as PHP, Ruby, Ruby on Rails, Devise, Active Record, Active Admin, and
              Capistrano.
            </li>
            <li>
              Gained valuable experience in jQuery and PHP by developing client side logic and styling for playsense.io
              and assisted in the migration to WordPress working with a custom theme.
            </li>
            <li>
              Redesigned and migrated yourpokercash.com from a custom CMS to WordPress which led to an increase of
              revenue from $3,000 per month to $14,000.
            </li>
            <li>
              Worked with Marketing Manager to implement UI/UX changes to deucescracked.com that led to a 25% increase
              in paid subscribers.
            </li>
            <li>
              <strong>Technologies Used:</strong> JavaScript, Ruby on Rails, WordPress, AWS
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['section-container']}>
        <h2>Education</h2>
      </div>
    </div>
  )
}
