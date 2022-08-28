import imgFullSrc from './logo-light.png';
import imgSquareSrc from './logo-square.png';

import canyoncinema from './canyoncinema.png';
import livexyz from './livexyz.png';
import udacity from './udacity.png';
import hudly from './hudly.png';
import classNames from 'classnames';

const Logo = ({ className, full = false }: { className: string, full: boolean }) => (
  <div className={className}>
    <img alt="Essential Element Logo" src={imgSquareSrc} className="h-full inline-block" />
    {
      full &&
      <span className="ml-2 text-xl relative top-0.5 font-semibold inline-block">Essential Element</span>
    }
  </div>
);

export enum AffiliationLogo {
  CanyonCinema = 'Canyon Cinema Logo',
  LiveXYZ = 'Live XYZ Logo',
  Udacity = 'Udacity Logo',
  Hudly = 'Hudly Logo',
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
    default:
      throw new Error('Invalid external logo');
  };
};

export const ExternalLogo = ({ affiliation }: { affiliation: string; }) => (
  <img alt={affiliation} src={getImgSrc(affiliation)} className={classNames(
    "inline-block h-20 mr-12",
    "cursor-pointer",
    {
      "ml-6 pr-5": affiliation === AffiliationLogo.LiveXYZ,
    }
  )} />
)

export default Logo;
