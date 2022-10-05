import { useState } from 'react';
import TopNav from './components/TopNav/TopNav';
import BlockHeader from './components/BlockHeader/BlockHeader';
import classNames from 'classnames';
import { ExternalLogo, AffiliationLogo, LogoXL } from './components/Logo/Logo';
import FounderBio from './components/FounderBio/FounderBio';
import Tile from './components/Tile/Tile';
import Helmet from 'react-helmet';
import BlockRole from './components/BlockRole/BlockRole';
import { APP_MAX_WIDTH } from './contants';
import Section from './components/Section/Section';

const TabContent = ({ children: bullets, active }: { children: any[], active?: boolean }) => (
  <div className={classNames(
    "flex transition fade",
    {
      "hidden opacity-0": !active,
      "block opacity-100": active,
    }
  )}>
      <ul className="text-2xl font-normal leading-relaxed list-disc ml-6 mr-5 mt-4">
        <li className="-ml-6 list-none mb-3 font-bold">we offer to</li>
        {(bullets || []).map((str: any, i: number) => <li key={i}>{str}</li>)}
      </ul>
      {/* <div className="hidden ml-5 pl-7 -mt-6 rounded-lg max-w-sm h-auto w-[400px]">
        <p className="leading-snug text-lg font-normal py-3 my-3 px-5 rounded-lg text-slate-700 border-slate-600">
          We interview key stakeholders in the product space when we start gathering requirements.
        </p>
        <p className="leading-snug text-lg font-normal py-3 my-3 px-5 rounded-lg text-slate-700 border-slate-600">
          Client and user feedback is passed on to the design process and considered at every step of product execution.
        </p>
      </div> */}
    </div>
)

const TabLink = ({ children, active, onClick }: { children: any, active?: boolean, onClick?: any }) => (
  <span
    onClick={onClick}
    className={classNames(
    "cursor-pointer text-2xl mb-5 mr-5 font-bold hover:underline hover:text-black",
    {
      "text-slate-900": active,
      "text-gray-400": !active,
    }
  )}>{children}</span>
)

const ENABLED_CREATIVE_ARTS = false;

const TECH_BULLETS = [
  'collaborate cross-functionally to design and deliver high-quality technical products.',
  'develop complex data-driven, UI-focused apps with industry best practices.',
  'leverage deep user experience and user interface design sensibilities in our work.',
  'combine product sense and business sense to build well together.',
]

const ARTS_BULLETS = [
  'develop custom laser-cut jewelry lines.',
  'develop abstract oil and acrylic paintings.',
  'fashion custom vintage inspired clothing pieces.',
  'Shipping in the USA and internationally.'
]

enum ActiveTab {
  Arts = 'Arts',
  Tech = 'Tech'
}

function App() {
  const [activeTab, setActiveTab] = useState(ActiveTab.Tech);
  const [activeAffil, setActiveAffil] = useState(AffiliationLogo.CruiseAutomation);

  return (
    <main className="App mb-20">
      <Helmet>
        <script src="//embed.typeform.com/next/embed.js" />
      </Helmet>
      <TopNav />
      {
        ENABLED_CREATIVE_ARTS &&
        <div className="bottom-0 left-0 right-0 bg-white z-50" style={{ position: 'fixed' }}>
          <div className={classNames(
            "mx-auxpx-5 py-5 border-t border-t-1 border-gray-900",
            APP_MAX_WIDTH
          )}>
            <TabLink onClick={() => setActiveTab(ActiveTab.Tech)} active={activeTab === ActiveTab.Tech}>technology shop</TabLink>
            <TabLink onClick={() => setActiveTab(ActiveTab.Arts)} active={activeTab === ActiveTab.Arts}>creative arts</TabLink>
          </div>
        </div>
      }
      <Section className="mt-8">
        <div className="mb-14">
          <LogoXL /> <span className="font-mono text-2xl relative pl-3 top-[4px] font-normal inline-block tracking-widest uppercase">Essential Element <span className="text-gray-300">Development</span></span>
        </div>
        <div className="mt-15 text-lg bg-black inline-block py-2 px-4 text-white tracking-widest uppercase mb-3 font-bold">
          We are a
        </div>
        <p className="mt-8 text-4xl font-bold">
          {
            ENABLED_CREATIVE_ARTS ?
            <>
              <div className="pb-2 text-gray-500">
                technology shop
              </div>
              <div className="pb-2 text-gray-500">
                & creative arts <span className="text-black">company</span>
              </div>
            </>
            :
            <>
              <div className="pb-2 text-orange-500">
                creative technology shop
              </div>
            </>
          }
          <div className="pb-5">
            based in San Francisco, CA
          </div>
          <div>
          ↓
          </div>
        </p>
      </Section>
      <Section className="mt-[30vh]">
        <TabContent active={activeTab === ActiveTab.Tech}>{TECH_BULLETS}</TabContent>
        <TabContent active={activeTab === ActiveTab.Arts}>{ARTS_BULLETS}</TabContent>
      </Section>
      <Section className="mt-10">
        <BlockHeader text="Featured Work" light={true} description="Click to expand" />
        <div className="flex my-7 items-center">
          <ExternalLogo onClick={() => setActiveAffil(AffiliationLogo.CruiseAutomation)} affiliation={AffiliationLogo.CruiseAutomation} />
          <ExternalLogo onClick={() => setActiveAffil(AffiliationLogo.LiveXYZ)} affiliation={AffiliationLogo.LiveXYZ} />
          <ExternalLogo onClick={() => setActiveAffil(AffiliationLogo.FalconX)} affiliation={AffiliationLogo.FalconX} />
          <ExternalLogo onClick={() => setActiveAffil(AffiliationLogo.Udacity)} affiliation={AffiliationLogo.Udacity} />
        </div>
        <BlockRole
          active={activeAffil === AffiliationLogo.CruiseAutomation}
          company="Cruise Automation"
          period="Aug 2018 - Jun 2019"
          contributions={[
            <>
              Frontend Tech Lead who built Cruise's ground truth mapping stack <em>Cartographer</em> for storing and ensuring accurate up-to-date road data.
            </>,
            `Led early architecture and design pattern decisions on principal mapping components for flexible, robust browser-based semantic mapping.`,
            `Rewrote our ThreeJS + React-based 3D traffic object placement app to eliminate leaky memory issues with point cloud data in 2 months.`
          ]}
          outcomes={[
            <>
              Cruise decouples its ground truth success from an outdated academic GIS application into a custom-built app called <em>Cartographer</em>.
            </>,
            <>
              <em>Cartographer</em> is one of the most well maintained codebases at Cruise.
            </>,
            <>
              <em>Cartographer</em> becomes mission critical software for storing and transmitting semantic ground truth to and from Cruise's self driving car fleet in real time.
            </>
          ]}
        />
        <BlockRole
          active={activeAffil === AffiliationLogo.FalconX}
          company="FalconX"
          periodType="Full Time (Acquisition-Based Hire)"
          period="Jan 2021 - Present"
          contributions={[
            'Frontend-focused Tech Lead who resource planned and helped scale the full stack team of 16 behind our comprehensive one-stop shop financial services platform.',
            `Helped design and delivered on our trading UI for placing real time trades across many cryptocurrencies and trade types.`,
            `Implemented Agile Software practices for delivering quickly and on complex project interdependencies, when before there were none.`,
            `Worked cross-functionally with product managers and designers to identify stuck user flows and develop high quality UX's with industry best practices in mind.`,
          ]}
          outcomes={[
            <>
              Former broken user flows and project management practices were consolidated into a new, clean, powerful, singular application.
            </>,
            <>
              Real time trades get executed with greater precision and speed for higher per-client profitability.
            </>,
            <>
              New capabilities including Staking, Consolidated Wallet Balances, Stop Loss orders, and more were delivered to clients.
            </>,
            <>
              FalconX became the first CFTC registered SWAP dealer for cryptocurrencies in the US due to our execution and speed.
            </>
          ]}
        />
        <BlockRole
          active={activeAffil === AffiliationLogo.Udacity}
          company="Udacity"
          periodType="Contract"
          period="Jun 2019 - Oct 2019"
          contributions={[
            'Developed the major course for the privately accredited Full Stack Web Developer Nanodegree program taken by many thousands worldwide',
            `Designed the curricula and starred in instructive videos for gently guiding students through a difficult array of topics including SQL database management, full stack development with Flask and SQL, and CRUD application development.`,
          ]}
          outcomes={[
            'Enabled many thousands to become professional software engineers from nontechnical backgrounds from all over the world.',
            'Became a featured course for One Million Arab Coders Initiative, sponsored by the UAE Prime Minister, and for Andela, a preeminent engineering talent firm based in Africa.',
            'Developed one of the most highly ranked course tracks for a preeminent global technical learning platform',
          ]}
        />
        <BlockRole
          active={activeAffil === AffiliationLogo.LiveXYZ}
          company="Live XYZ"
          periodType="Full-Time"
          period="Jan 2015 - Jan 2018"
          contributions={[
            'As Frontend Tech Lead, built Live\'s content management system and machine learning signals processing application for collecting and curating urban location data (ReactJS, AngularJS, MongoDB, Go)',
            'Led a 10-person team of product managers, designers, and engineeers to reinvent our ground truth collection efforts and ground truth app UX in order to create consistent, comprehensive data collection pipelines for 2.5MM+ location records across 35 US metros.',
            'As COO, identified bottlenecks in our company culture and developed a long-term Mission and Values document that fixed toxic cultural issues and motivated our company to accelerate towards our company mission statement.',
            'Retrained our business success team to align with our product understanding by developing and disseminating a Live Framework document of cohesive company product terms and concepts.'
          ]}
          outcomes={[
            'Live XYZ became the most vertically and horizontally integrated location intelligence partner in existence in New York City, now working with over 140+ city districts, operators, the Mayor\'s Office, MTA, NYPD, Department of Finance and Taxation, and more.',
            `Built the company's competitive advantage to solidify continuous success as a NYC City Budget line item, building continuous financial resilience for the company.`
          ]}
        />
      </Section>
      <Section className={classNames(
        "mt-10",
        {
          "block": activeTab === ActiveTab.Arts,
          "hidden": activeTab === ActiveTab.Tech,
        },
      )}>
        arts
      </Section>
      <Section className="mt-20" fullWidth={true}>
        <FounderBio />
      </Section>
      <Section className="mt-20">
        <BlockHeader text="Working Principles" />
        <div className="sm:flex my-7 items-center">
          <Tile header="The User is King.">
            We obsess about user wants and execute at every step with the user in mind. We prioritize meeting user needs above all else when we execute.
          </Tile>
          <Tile header="Greatness is in the Details.">
            Being good is hard. Being great is in the details. We deliver quality designed products with pixel-level attention to detail or dialed to our desired speed.
          </Tile>
          <Tile header="Fluid Visibility + Feedback.">
            We aim to create a collaborate culture of open visibility and fluid feedback with all key stakeholders and with each other for continuous improvement.
          </Tile>
        </div>
      </Section>
      <Section className="pt-10 mt-10" id="workwithus">
        <div className="mt-15 text-lg bg-black inline-block py-2 px-4 text-white tracking-widest uppercase mb-3 font-bold">
          Get in Touch
        </div>
        <p className="text-xl mt-5 mb-14">
          <h2 className="font-bold text-2xl">
            Open for Hire.
          </h2>
          <div className="mt-3">
            Your inquiries are welcome. Send an email to <a className="underline" href="mailto:amy@essentialelement.dev">amy@essentialelement.dev</a> to get the conversation started.
          </div>
        </p>
        <p className="mt-14">
          This website is open sourced on <a href="//github.com/amyhua/essentialelement.dev" className="underline" target="_blank">Github</a>.
        </p>
      </Section>
    </main>
  );
}

export default App;
