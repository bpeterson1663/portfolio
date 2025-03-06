import Link from 'next/link'
import { SKILLS } from '../components/skill-pills/skills'
import SkillPills from '../components/skill-pills/skill-pills'
import './resume.scss'

export default function Page() {
  return (
    <div className="resume">
      <div className="section-contaienr">
        <div className="contact-infor">
          <h2>Brady J. Peterson</h2>
          <Link className="link" target="_blank" href="https://github.com/bpeterson1663">
            Github
          </Link>
        </div>
      </div>
      <div className="section-container">
        <h2>Technical Skills</h2>
        <SkillPills skills={SKILLS} />
      </div>
      <div className="section-container">
        <h2>Experience</h2>
        <div className="section">
          <h3>When I Work</h3>
          <div className="header">
            <h4>Senior Full Stack Engineer</h4>
            <span>October 2023 – Present</span>
          </div>

          <ul>
            <li>
              Provided support to other developers, QA engineers and Customer Support staff by investigating and
              troubleshoot issues as well as providing feedback through merge requests.
            </li>
            <li>
              Demonstrated technical skills in React and Golang by building UI components and APIs for our new Payroll
              product.
            </li>
            <li>
              Worked closely with UX, Product and QA to provide feedback when going over new features as well as
              planning and execution.
            </li>
            <li>
              Demonstrated strong advocacy for coding standards and best practices by providing feedback through code
              reviews and working on development plans for new features including API documentation, database access
              patterns, schema designs and other implementation details.
            </li>
            <li>
              Proven proficiency in troubleshooting skills by identifying and solving complex problems around various
              topics such as time zone/DST, calculating overtime and blended position rates, and various performance
              issues.
            </li>
            <li>
              <strong>Technologies Used:</strong> React, TypeScript, PHP, Golang, React Testing Library
            </li>
          </ul>
          <div className="header">
            <h4>Full Stack Engineer</h4>
            <span>August 2021 – October 2023</span>
          </div>

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
              <strong>Technologies Used:</strong> React, TypeScript, PHP, Golang, React Testing Library
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Calabrio</h3>
          <div className="header">
            <h4>Software Engineer – UI</h4>
            <span>January 2019 – August 2021</span>
          </div>

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

          <div className="header">
            <h4>Associate Software Engineer – UI</h4>
            <span>July 2017 – January 2019</span>
          </div>
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
        <div className="section">
          <h3>Fourcubed</h3>
          <div className="header">
            <h4>Front End Developer/Contractor</h4>
            <span>July 2016 – January 2018</span>
          </div>

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
        <div className="section">
          <h3>Prime Digital Academy</h3>
          <div className="header">
            <h4>Full Stack Software Development Student</h4>
            <span>January 2016 – May 2016</span>
          </div>
          <ul>
            <li>
              Designed and developed a MEAN Stack application that addresses the problem of out-of-date wine menus and
              inaccurate inventory costs in the restaurant and hospitality industry.
            </li>
            <li>
              Solved the issue by creating functionality in which beverage professionals can quickly and efficiently
              add, update and delete inventory to maintain an accurate wine list and cost of inventory on hand.
            </li>
            <li>
              Worked on a team of five developers for Mango Mentors, an organization that helps young professionals
              start the networking process with mentors in order to achieve their goals.
            </li>
            <li>
              Solved the issue of how to start the networking process by creating an application that users can easily
              post short success stories to a global or specific community feed in which others can comment and reach
              out for additional support.
            </li>
            <li>
              <strong>Technologies Used:</strong> MongoDB, Express.js, AngularJS, Node.js, Angular Material, Passport.js
            </li>
          </ul>
        </div>
  
        <div className="section">
          <h3>Interlachen Country Club</h3>
          <div className="header">
            <h4>Food and Beverage Manager</h4>
            <span>July 2014 – January 2016</span>
          </div>
          <ul>
            <li>
              Demonstrated excellent customer service skills by maintaining positive relationships with members and
              their guests while constantly trying to improve their experience.
            </li>
            <li>
              Demonstrated strong leadership skills by monitoring and evaluating staff performance while providing them
              with the tools and training they need to succeed.
            </li>
            <li>
              Illustrated superb organizational skills by maintaining a beverage inventory of $120,000 and developing an
              outstanding wine, beer, and cocktail list.
            </li>
          </ul>

          <div className="header">
            <h4>Beverage Manager and Server</h4>
            <span>May 2011 – June 2014</span>
          </div>
          <ul>
            <li>
              Assisted Food and Beverage Manager in creating a memorable dining experience by anticipating and exceeding
              the expectations of our members and guests.
            </li>
            <li>
              Demonstrated strong leadership skills by monitoring, evaluating and enhancing bartender’s performance and
              providing them with the tools and training they needed to succeed.
            </li>
            <li>Demonstrated teamwork skills by always willing to help out in all departments whenever needed.</li>
          </ul>
        </div>
      </div>

      <div className="section-container">
        <h2>Education</h2>
        <div className="section">
          <h3>Continuing Self-Learning</h3>
          <div className="header">
            <h4>Online Learning – <Link href="https://zerotomastery.io">Zero to Mastery </Link></h4>
            <span>March 2021 – Present</span>
          </div>
          <ul>
            <li>Complete Node.js Developer in 2025</li>
            <li>Python for Business Data Analytics & Intelligence</li>
            <li>Typescript: The Complete Developer’s Guide</li>
            <li>Complete React Developer (with Redux, Hooks, GraphQL)</li>
          </ul>
        </div>
        <div className="section">
          <h3>Prime Digital Academy</h3>
          <div className="header">
            <h4>Full-Stack Software Engineering Certification</h4>
            <span>January 2016 – May 2016</span>
          </div>
          <ul>
            <li>
              Prime Digital Academy is an 18-week, intensive program designed to prepare students for employment in the
              software development field.
            </li>
            <li>
              The program focuses on the JavaScript-Based MEAN Stack (MongoDB, Express.js, AngularJS, Node.js) with a
              strong focus on team-based projects and real-world business needs.
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>University of Wisconsin - Stout</h3>
          <div className="header">
            <h4>Bachelor of Science in Golf Enterprise Management</h4> <span>September 2008 – May 2011</span>
          </div>
          <ul>
            <li>Minor in Business Administration</li>
            <li>Magna Cum Laude-GPA: 3.8</li>
          </ul>
        </div>
        <div className="section">
          <h3>Milwaukee School of Engineering</h3>
          <div className="header">
            <h4>Generals - Management Information Systems</h4>
            <span>September 2007 – May 2008</span>
          </div>
        </div>
      </div>
    </div>
  )
}
