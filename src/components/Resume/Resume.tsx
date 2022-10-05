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
        <main className="my-10 print:my-0 bg-white shadow-md pt-8 pb-14 px-8 mx-auto max-w-7xl mb-10" id="contents">
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
            <HtmlProgressBar progress={9} label="Product & Business Sense" />
            <HtmlProgressBar progress={9} label="UI/UX Sensibilities" />
            <HtmlProgressBar progress={8} label="Technical Roadmap Advocacy" />
            <HtmlProgressBar progress={9} label="Growth via Personal Projects" />
            <HtmlProgressBar progress={9} label="Excellence Shipping Software" />
            <HtmlProgressBar progress={6} label="Large Teams Leadership" />
            <HtmlProgressBar progress={3} label="CI/CD Automation Knowledge" />
          </ul>
          <ResumeHr title="Personal Projects" />
          <div className="sm:flex">
            <div className="py-5 px-4 rounded-lg border flex-1 sm:mr-2 border-gray-600">
              <h3 className="uppercase italic tracking-widest font-bold">Free Map Club</h3>
              <a className="underline mb-3 block text-blue-800" href="//freemap.club" target="_blank">freemap.club</a>
              <p>
              Free Map Club is creating a contemporary local app-based community around the effective and rich reporting and exchange of free stuff.
              </p>
              <a className="mt-2 inline-block underline text-blue-800" target="_blank" href="https://docs.google.com/document/d/1YcXFJmJXPPfULp0dN9qiGPwEM7xp-v4sW0YbKO4oXxY/edit?usp=sharing">
                See Product White Paper
              </a>
            </div>
            <div className="print:hidden py-5 px-4 rounded-lg border flex-1 sm:mt-0 mt-3 sm:ml-2 border-gray-600 print:px-0 print:py-0 print:border-none">
              <h3 className="uppercase italic tracking-widest font-bold">EssentialElement.Dev</h3>
              <a className="underline mb-3 block text-blue-800" href="//freemap.club" target="_blank">essentialelement.dev</a>
              <p className="mb-2">
                Technology shop offering technical consulting and development services, including technical scoping, UI/UX design, and software development.
              </p>
              <a className="mt-2 inline-block underline text-blue-800" target="_blank" href="https://drive.google.com/file/d/1LYIvcXnuA5lFrWcGf9vRGZ9IADe5ZVlP/view?usp=sharing">
                See Example Scope Doc Deliverable
              </a>
            </div>
          </div>
          <ResumeHr title="Engineering Experience" />
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
                Real time trades are being executed with greater precision and speed for higher client profitability.
              </>,
              <>
                Former broken user flows and project management practices were consolidated into a powerful singular application.
              </>,
              <>
                FalconX became the first CFTC registered SWAP dealer for cryptocurrencies in the USA, due to our execution speed.
              </>,
              <>
                New platform capabilities including Staking, Consolidated Wallet Balances, Stop Loss orders were unlocked.
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
              'Tech Lead leading all phases of UI/UX design and frontend development, from conducting user research to design and coding.',
              'Built a real-time, Jenkins-like build logger and data visualizations for debugging build failures in ReactJS, D3.js, & Python.',
              'Led the landing page UX and storytelling journey, including writing marketing copy for investors and customers to understand and use our product.',
            ]}
            outcomes={[
              'Expedited sales and user downloads by 10x+ via conversion-optimizing landing page strategies.',
              'Reduced frictions in our user onboarding journey by simplifying and removing complex steps to convert new users into power users quickly.',
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
                Developed the major course for the accredited <em>Full Stack Web Developer Nanodegree</em> program, a 3-month program, taken by many thousand students worldwide.
              </>,
              `Designed the curricula and starred in instructive videos for gently guiding students through a difficult array of topics including SQL database management, full stack development with Flask and SQL, and CRUD application development.`,
            ]}
            outcomes={[
              'Enabled many thousands from diverse backgrounds and countries to become professional software engineers from nontechnical backgrounds.',
              'Became a featured course for One Million Arab Coders Initiative, sponsored by the UAE Prime Minister, and for Andela, a preeminent engineering talent firm based in Africa.',
              'Developed one of the most highly ranked course tracks for a preeminent global technical learning platform',
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
                <em>Cartographer</em> becomes mission critical software for storing and transmitting semantic ground truth to and from Cruise's self driving car fleet in real time.
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
              'As Frontend Tech Lead, built Live\'s content management system and machine learning signals processing application for collecting and curating urban location data (ReactJS, AngularJS, MongoDB, Go)',
              'Led a 10-person team of product managers, designers, and engineeers to reinvent our ground truth collection efforts and ground truth app UX in order to create consistent, comprehensive data collection pipelines for 2.5MM+ location records across 35 US metros.',
              'As interim COO, identified bottlenecks in our company culture and developed a long-term Mission and Values document that fixed toxic cultural issues and motivated our company to accelerate towards our company mission statement.',
              'Retrained our business success team to align with our product understanding by developing and disseminating a Live Framework document of cohesive company product terms and concepts.'
            ]}
            outcomes={[
              'Live XYZ became the most vertically and horizontally integrated location intelligence partner in existence in New York City, now working with over 140+ city districts, operators, the Mayor\'s Office, MTA, NYPD, Department of Finance and Taxation, and more.',
              'Built the company\'s competitive advantage to solidify continuous success as a NYC City Budget line item, building continuous financial resilience for the company.'
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
