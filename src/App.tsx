import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import BlockHeader from './components/BlockHeader/BlockHeader';
import classNames from 'classnames';
import { ExternalLogo, AffiliationLogo } from './components/Logo/Logo';
import FounderBio from './components/FounderBio/FounderBio';
import Tile from './components/Tile/Tile';
import Helmet from 'react-helmet';

const Section = ({ children, className, fullWidth, id }: { children: any, className?: string, fullWidth?: boolean, id?: string; }) => (
  <section id={id} className={classNames(
    "mx-auto py-7",
    className,
    {
      "max-w-6xl": !fullWidth,
      "sm:px-4 lg:px-8": !fullWidth,
    }
  )}>
    {children}
  </section>
)

function App() {
  return (
    <main className="App mb-20">
      <Helmet>
        <script src="//embed.typeform.com/next/embed.js" />
      </Helmet>
      <TopNav />
      <Section className="mt-10">
        <BlockHeader text="We are" />
        <p className="text-4xl font-bold leading-normal">
          a creative technology company<br/>
          based in San Francisco, CA
        </p>
      </Section>
      <Section className="mt-5">
        <div className="flex">
          <ul className="text-2xl leading-relaxed mr-5">
            <li>technical scoping</li>
            <li>user based design</li>
            <li>full stack development</li>
            <li>technical training</li>
          </ul>
          <div className="ml-5 px-7 py-7 rounded-lg max-w-sm text-lg bg-gray-800 text-white h-25 h-auto">
            <p className="leading-snug">
              Client and user feedback is passed on to the design process and considered at every development step.
            </p>
          </div>
        </div>
      </Section>
      <Section className="mt-10">
        <BlockHeader text="Featured Work" light={true} />
        <div className="flex my-7 items-center">
          <ExternalLogo affiliation={AffiliationLogo.CanyonCinema} />
          <ExternalLogo affiliation={AffiliationLogo.LiveXYZ} />
          <ExternalLogo affiliation={AffiliationLogo.Udacity} />
          <ExternalLogo affiliation={AffiliationLogo.Hudly} />
        </div>
      </Section>
      <Section className="mt-20" fullWidth={true}>
        <FounderBio />
      </Section>
      <Section className="mt-20">
        <BlockHeader text="Our Principles" />
        <div className="flex my-7 items-center">
          <Tile header="The User is King.">
            We obsess about user wants and execute at every step with the user in mind. We prioritize meeting user needs above all else.
          </Tile>
          <Tile header="Greatness is in the Details.">
            Being good is hard, but being great is in the details. We deliver quality designed products with pixel-perfect attention.
          </Tile>
          <Tile header="Open Visibility. Fluid Feedback.">
            We aim to create a collaborate culture of open visibility and fluid feedback with our clients and with each other.
          </Tile>
        </div>
      </Section>
      <Section className="pt-10 mt-10" id="workwithus">
        <div data-tf-widget="M95xdoAu" data-tf-iframe-props="title=Get in touch essentialelement.dev" data-tf-medium="snippet"
          style={{
            width: '100%',
            height: 550,
          }}></div>
      </Section>
    </main>
  );
}

export default App;
