import classNames from 'classnames';

import canyoncinema from './canyoncinema.png';
import livexyz from './livexyz.png';
import udacity from './udacity.png';
import hudly from './hudly.png';
import falconx from './falconx.jpeg';
import cruiseautomation from './cruise.png';
import yourbase from './yourbase.png';
import uchicago from './uchicago.png';
import nycda from './nycda.png';
import atkearney from './atkearney.png';
import databricks from './databricks.png';

const EELogoCircle = ({ className }: { className: string; }) => (
  <svg className={className} height="24" viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="117" cy="117" r="117" fill="black"/>
    <circle cx="181.057" cy="67.064" r="6.54684" fill="white"/>
    <circle cx="157.779" cy="67.064" r="6.54684" fill="white"/>
    <circle cx="133.047" cy="67.064" r="6.54684" fill="white"/>
    <circle cx="133.046" cy="92.9263" r="6.54684" fill="white"/>
    <circle r="6.54684" transform="matrix(1 0 0 -1 181.057 166.54)" fill="white"/>
    <circle r="6.54684" transform="matrix(1 0 0 -1 157.779 166.54)" fill="white"/>
    <circle r="6.54684" transform="matrix(1 0 0 -1 133.046 166.541)" fill="white"/>
    <circle r="6.54684" transform="matrix(1 0 0 -1 133.046 140.679)" fill="white"/>
    <circle cx="133.046" cy="116.803" r="6.54684" fill="white"/>
    <circle cx="156.923" cy="116.803" r="6.54684" fill="white"/>
    <circle cx="180.8" cy="116.803" r="6.54684" fill="white"/>
    <circle cx="52.9433" cy="166.541" r="6.54684" transform="rotate(-180 52.9433 166.541)" fill="white"/>
    <circle cx="76.2209" cy="166.541" r="6.54684" transform="rotate(-180 76.2209 166.541)" fill="white"/>
    <circle cx="100.954" cy="166.541" r="6.54684" transform="rotate(-180 100.954 166.541)" fill="white"/>
    <circle cx="100.954" cy="140.679" r="6.54684" transform="rotate(-180 100.954 140.679)" fill="white"/>
    <circle r="6.54684" transform="matrix(-1 0 0 1 52.9433 67.0646)" fill="white"/>
    <circle r="6.54684" transform="matrix(-1 0 0 1 76.2209 67.0646)" fill="white"/>
    <circle r="6.54684" transform="matrix(-1 0 0 1 100.954 67.064)" fill="white"/>
    <circle r="6.54684" transform="matrix(-1 0 0 1 100.954 92.9263)" fill="white"/>
    <circle cx="100.954" cy="116.803" r="6.54684" transform="rotate(-180 100.954 116.803)" fill="white"/>
    <circle cx="77.0771" cy="116.803" r="6.54684" transform="rotate(-180 77.0771 116.803)" fill="white"/>
    <circle cx="53.2004" cy="116.803" r="6.54684" transform="rotate(-180 53.2004 116.803)" fill="white"/>
    </svg>
);

const EELogoSquare = ({ className, size=24 }: { className: string; size: number; }) => (
  <svg className={className} height={size} viewBox="0 0 234 234" fill="none" xmlns="http://www.w3.org/2000/svg">    
    <circle cx="117" cy="117" r="117" fill="black"/>
    <path d="M64.9261 133V67.5455H104.429V74.5767H72.8523V96.6932H102.384V103.724H72.8523V125.969H104.94V133H64.9261Z" fill="white"/>
    <path d="M124.926 166V100.545H164.429V107.577H132.852V129.693H162.384V136.724H132.852V158.969H164.94V166H124.926Z" fill="white"/>
  </svg>
)

const Logo = ({ className, full = false, size = 24 }: { className: string, full: boolean, size?: number; }) => (
  <div className={className}>
      <EELogoSquare className="h-full inline-block mr-3" size={size} />
    {/* {
      full &&
      <span className="font-mono text-2xl relative top-[4px] font-normal inline-block tracking-widest uppercase">Essential Element</span>
    } */}
  </div>
);

export const LogoXL = () => (
  <EELogoSquare className="h-full inline-block" size={60} />
)

export enum AffiliationLogo {
  CanyonCinema = 'Canyon Cinema Logo',
  LiveXYZ = 'Live XYZ Logo',
  Udacity = 'Udacity Logo',
  Hudly = 'Hudly Logo',
  CruiseAutomation = 'Cruise Automation Logo',
  FalconX = 'FalconX Logo',
  YourBase = 'YourBase Logo',
  UChicago = 'UChicago Logo',
}

const getImgSrc = (affil: string) => {
  switch (affil) {
    case AffiliationLogo.CanyonCinema:
      return canyoncinema;
    case AffiliationLogo.LiveXYZ:
      return livexyz;
    case AffiliationLogo.Udacity:
      return udacity;
    case AffiliationLogo.Hudly:
      return hudly;
    case AffiliationLogo.CruiseAutomation:
      return cruiseautomation;
    case AffiliationLogo.FalconX:
      return falconx;
    case AffiliationLogo.YourBase:
      return yourbase;
    case AffiliationLogo.UChicago:
      return uchicago;
    default:
      throw new Error('Invalid external logo');
  };
};

export const ExternalLogo = ({ affiliation, onClick, className, }: { affiliation: string; onClick?: any; className?: string; }) => (
  <img alt={affiliation} onClick={onClick} title={affiliation} src={getImgSrc(affiliation)} className={classNames(
    "inline-block h-20",
    "py-2 px-3",
    "print:h-0 print:w-0 print:p-0 print:m-0",
    {
      "cursor-pointer mr-12 rounded-lg border-2 border-transparent hover:border-black": !!onClick,
    },
    {
      "ml-3 py-2 pr-3": affiliation === AffiliationLogo.LiveXYZ,
      "py-6": affiliation === AffiliationLogo.CruiseAutomation,
      "py-0 mt-2": affiliation === AffiliationLogo.FalconX,
      "mt-2": affiliation === AffiliationLogo.Udacity,
      "py-2 mr-7": affiliation === AffiliationLogo.CanyonCinema,
      "py-3": affiliation === AffiliationLogo.YourBase,
      "pt-2 pb-4": affiliation === AffiliationLogo.UChicago,
    },
    className
  )} />
)

export default Logo;
