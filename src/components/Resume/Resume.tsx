import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlockRole from "../BlockRole/BlockRole";
import { AffiliationLogo } from "../Logo/Logo";
import TopNav from "../TopNav/TopNav";
import './Resume.module.css';
import { useReactToPrint } from 'react-to-print';
import classNames from "classnames";
import Middot from "../Middot/Middot";

const ResumeHr = ({ title }: { title: string; }) => (
  <div className="relative pt-9 pb-2">
    <span className="uppercase tracking-widest pr-3 bg-white">{title}</span>
    <hr className="mt-1 mb-2 border border-b-black" />
  </div>
)

const HtmlBlock = ({ color }: { color: string; }) => (<span className="inline" style={{ color }}>█</span>);

const HtmlProgressBar = ({ progress, label }: { progress: number; label: string; }) => {
  const filledBarsArray = new Array(progress).fill(1);
  const unfilledBarsArray = new Array(10 - progress).fill(1);
  return (<li
    className="my-3 inline-block mr-3 mb-0">
    <span style={{
      width: 210,
      display: 'inline-block',
    }} className="whitespace-nowrap mr-3 w-[210px] inline-block text-left">{label}</span>
    {filledBarsArray.map((x, i: number) => <HtmlBlock key={i} color="#5a5d61" />)}
    {unfilledBarsArray.map((x, i: number) => <HtmlBlock key={i} color="#ddd" />)}
  </li>);
}

const Resume = ({
  name
}: { name: string; }) => {
  const handlePrint = useReactToPrint({
    content: () => document.getElementById('contents'),
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>Amy Hua - Resume | Essential Element</title>
        <style media="print">{`
        .external-logo {
          display: none;
        }
        `}</style>
      </Helmet>
      <TopNav shadow={true} handlePrint={handlePrint} />
      <div className="bg-slate-300 min-h-[100vh] pt-10 pb-[150px]">
        <style media="print">{`
          .external-logo {
            display: none;
          }
        `}</style>
        <iframe id="ifmcontentstoprint" style={{
          height: 0,
          width: 0,
          position: 'absolute'
        }} title="print" />
        <main className="my-10 print:my-0 bg-white shadow-md print:shadow-none pt-8 pb-14 print:pb-3 px-8 mx-auto max-w-7xl mb-10" id="contents">
          <h2> <span className="font-bold text-lg">{name}</span>
          <Middot />
          <span>
            ✉️ <a
              href="mailto:foramyhua@gmail.com">foramyhua@gmail.com</a>
            </span>
            <Middot className="sm:inline-block hidden" />
            <span className="sm:inline block mt-1 sm:mt-0">
              🏙️ San Francisco, CA
            </span>
          </h2>
          <ResumeHr title="Skills" />
          <ul className="md:columns-3 sm:columns-2">
            <HtmlProgressBar progress={10} label="Engineering & Coding Skills" />
            <HtmlProgressBar progress={10} label="Javascript" />
            <HtmlProgressBar progress={10} label="HTML & CSS" />
            <HtmlProgressBar progress={10} label="Async Programming" />
            <HtmlProgressBar progress={10} label="Technical Communication" />
            <HtmlProgressBar progress={9} label="Product Sense" />
            <HtmlProgressBar progress={9} label="Design Sensibilities" />
            <HtmlProgressBar progress={8} label="Technical Roadmapping" />
            <HtmlProgressBar progress={9} label="Growth via Personal Projects" />
            <HtmlProgressBar progress={9} label="Shipping Software" />
            <HtmlProgressBar progress={7} label="Large Teams Leadership" />
            <HtmlProgressBar progress={3} label="CI/CD Automation" />
          </ul>
          <ResumeHr title="Personal Projects" />
          <div className="sm:flex">
            <div className="py-5 px-4 rounded-lg border flex-1 sm:mr-2 border-gray-600">
              <h3 className="uppercase italic tracking-widest font-bold">Free Map</h3>
              <a className="underline mb-3 block text-blue-800" href="//freeganmap.com" target="_blank">freemap.club</a>
              <p>
              Free Map is creating a local app-based community around discovering and posting free stuff in your city. 2nd place winner of the Best Smart Contract Award by ApeWorx at ETHGlobal New York 2022.
              </p>
              <a className="mt-2 inline-block underline text-blue-800" target="_blank"
                href="https://docs.google.com/document/d/1YcXFJmJXPPfULp0dN9qiGPwEM7xp-v4sW0YbKO4oXxY/edit?usp=sharing">
                See Product White Paper
              </a>
            </div>
            <div className="print:hidden py-5 px-4 rounded-lg border flex-1 sm:mt-0 mt-3 sm:ml-2 border-gray-600 print:px-0 print:py-0 print:border-none">
              <h3 className="uppercase italic tracking-widest font-bold">EssentialElement.Dev</h3>
              <a className="underline mb-3 block text-blue-800" href="//essentialelement.dev" target="_blank">essentialelement.dev</a>
              <p className="mb-2">
                Freelancer offering technical consulting and development services, including technical scoping, UI/UX design, and software development.
              </p>
              <a className="mt-2 inline-block underline text-blue-800" target="_blank" href="https://drive.google.com/file/d/1LYIvcXnuA5lFrWcGf9vRGZ9IADe5ZVlP/view?usp=sharing">
                See Example Scope Doc Deliverable
              </a>
            </div>
          </div>
          <ResumeHr title="Experience" />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.FalconX}
            affiliationClassName="print:hidden pl-0 ml-0 px-0 mr-3 h-[65px] -mt-2 pt-0"
            size="small"
            company="FalconX"
            periodType="Full Time (Acquired YourBase)"
            role="Senior Software Engineer (Tech Lead)"
            period="Jan 2021 - Present"
            contributions={[
              'Resource planned and helped scale a full stack team of 16 behind our one-stop shop financial services platform.',
              `Identified stuck user flows and develop high quality UX's with industry best practices in mind.`,
              `Developed our trading UI for placing real time trades across cryptocurrencies and trade types.`,
              `Implemented Agile Software practices for delivering quickly and on complex project interdependencies.`,
            ]}
            outcomes={[
              <>
                FalconX became the first CFTC registered SWAP dealer for cryptocurrencies in the USA and wins Most Innovative FinTech Solution by the 2022 Tech Ascension Awards
              </>,
              <>
                Real time trades are executed with greater precision and speed for higher, per client profit margins.
              </>,
              <>
                Broken user flows were consolidated into a powerful singular application, and team velocity increased with improved project organization.
              </>,
              <>
                Implemented major platform capabilities including Staking, Consolidated Wallet Balances, and Stop Loss orders.
              </>,
            ]}
          />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.YourBase}
            affiliationClassName="print:hidden pl-0 ml-0 px-0 mt-1 mr-3 h-[55px] pt-0"
            size="small"
            company="YourBase"
            role="Staff Software Engineer (Tech Lead)"
            periodType="Full Time"
            period="Oct 2019 - Jan 2022"
            contributions={[
              'Tech Lead executing all phases of UI/UX design and frontend development, from conducting user research to design and coding.',
              'Built a real-time, Jenkins-like build logger and data visualizations for debugging build failures in ReactJS, D3.js, & Python.',
              'Led the landing page UX and storytelling journey, including copy, and UX story for potential investors and customers.',
            ]}
            outcomes={[
              'Customers can execute accelerated builds from their account dashboards in an easy-to-use UI.',
              'Reduced frictions in our user onboarding journey by simplifying and removing complex steps to convert new users into power users quickly.',
              'Expedited sales and user downloads by over 10x+ via conversion-optimizing landing page strategies.',
            ]}
          />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.Udacity}
            affiliationClassName="print:hidden pl-0 ml-0 px-0 mr-3 h-[65px] pt-0"
            size="small"
            company="Udacity"
            role="Lead Instructor & Course Designer"
            periodType="Contract"
            period="Jun 2019 - Oct 2019"
            contributions={[
              <>
                Developed the major course for the <em>Full Stack Web Developer Nanodegree</em>, a 3-month program, for thousands of students.
              </>,
              `Starred in video-led learning modules for students to learn database management and full stack app development with Flask and Postgresql.`,
            ]}
            outcomes={[
              'Enabled thousands of students from diverse backgrounds and ages to become professional software engineers.',
              'Featured in One Million Arab Coders Initiative, sponsored by the UAE Prime Minister, and Andela, a preeminent engineering firm in Africa.',
              'Became a top rated course for Udacity with a 4.5/5 overall program rating out of 746 reviews.',
            ]}
          />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.CruiseAutomation}
            affiliationClassName="print:hidden px-0 mr-4 h-[60px] pt-3"
            size="small"
            company="Cruise Automation"
            role="Senior Software Engineer"
            period="Aug 2018 - Jun 2019"
            contributions={[
              'Mapping Team Frontend Engineer #2 who built our ground truth mapping stack for ensuring accurate up-to-date road data.',
              `Led technical architecture decisions on mapping components for flexible, robust browser-based semantic mapping.`,
              `Rewrote our ThreeJS + React 3D traffic object placement app to eliminate leaky memory issues with point cloud data.`
            ]}
            outcomes={[
              <>
                Cruise decouples its ground truth success from an outdated academic GIS application into a custom-built app called <em>Cartographer</em>.
              </>,
              <>
                <em>Cartographer</em> is one of the most well maintained codebases at Cruise and grew to 30+ contributors in 3 months.
              </>,
              <>
                <em>Cartographer</em> becomes mission critical software for storing and transmitting semantic ground truth to and from Cruise's self driving fleet.
              </>
            ]}
          />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.LiveXYZ}
            affiliationClassName="print:hidden pl-0 ml-0 px-0 mr-1 h-[65px] pt-0"
            size="small"
            company="Live XYZ"
            role="Chief Architect & Interim COO"
            periodType="Full-Time"
            period="Jan 2015 - Jan 2018"
            contributions={[
              'Led a team of product managers, designers, and engineeers to reinvent our ground truth collection efforts and UX forconsistent, comprehensive data collection across 2.5MM+ location records in 35 US metros.',
              'Frontend Tech Lead who built our content management system and machine learning signals processing application in ReactJS and AngularJS.',
              'Delivered and disseminated our Mission and Values for a mission-oriented company culture.',
              'Aligned our company product understanding with cohesive product frameworks, terms, and concepts.'
            ]}
            outcomes={[
              'Live XYZ became the most vertically and horizontally integrated location intelligence partner in New York City, working with 140+ city districts, operators, the Mayor\'s Office, MTA, NYPD, Department of Finance and Taxation, and more.',
              'Contributed to our company\'s competitive advantage, becoming the sole location intelligence partner for the City of New York.'
            ]}
          />
          <h3 className="mt-5 font-bold text-lg">Prior Roles</h3>
          <ul className="list-disc ml-6 md:leading-8 mt-2">
            {
              [
                <>
                  Lead Bootcamp Instructor & Course Designer at <strong>NY Code & Design Academy</strong>, Full Stack Javascript Intensive, 2019
                </>,
                <>
                  Software Engineer at <strong>Databricks</strong>, Product Execution Team,	Sept 2014 — Nov 2014 (took leave)
                </>,
                <>
                  Management Consulting Analyst at <strong>ATKearney</strong>, Procurement & Analytics, July 2012 - April 2013
                </>
              ].map((bullet: any, i: number) => (
                <li key={i} className="mb-3 md:mb-0">{bullet}</li>
              ))
            }
          </ul>
          <ResumeHr title="Education" />
          <BlockRole
            active={true}
            affiliationLogo={AffiliationLogo.UChicago}
            affiliationClassName="print:hidden px-0 mr-4 h-[60px] pt-3"
            size="small"
            company="University of Chicago"
            role="Mathematics with Specialization in Economics, B.S. (Dual)"
            periodType="Undergraduate College"
            period="June 2012"
            affiliations={[
              'Gary Becker Institute on Price Theory (Labor Markets Research), UChicago Booth School (Conflicts of Interest Research), Math Research Experiences for Undergraduates (Geometry Exposition), Urban Innovation Analysis Inc (Urban Sociology Research), Alpha Phi Omega (Co-Ed Fraternity), UnCommon Fund Committee (Marketing Chair), Peer Health Exchange (High School Educator), Chicago Debate League (Judge)'
            ]}
          />
        </main>
      </div>
      
    </div>
  );
};

export default Resume;
