import classNames from "classnames";
import { Link } from 'react-router-dom';
import { APP_MAX_WIDTH } from "../../contants";

const FounderBio = () => (
  <div className="bg-gray-100 px-10 py-12">
    <div className={classNames(
      "mx-auto",
      APP_MAX_WIDTH,
    )}>
      <h1 className="mt-6 sm:mt-0 mx-auto text-lg bg-black inline-block py-2 px-4 text-white tracking-widest uppercase sm:mb-6 mb-8 font-bold block sm:inline-block w-full sm:w-[200px] text-center">
        Founder Bio
      </h1>
      <div className="sm:flex">
        <div className="ml-3 mr-5">
          <img src={require('./avatar-amy-hua.png')} alt="Amy Hua Bio Picture" className="mb-5 w-[144px] mx-auto" />
          <h2 className="text-center font-bold text-left text-xl tracking-wide">
            Amy Hua
          </h2>
        </div>
        <div className="flex-1">
          <h2 className="sm:text-left text-center tracking-wide font-bold text-lg mt-2 ml-7 mb-5 text-slate-800">
            AMY HUA IS A SEASONED TECHNOLOGY<br/>
            BUILDER AND EDUCATOR
          </h2>
          <p className="leading text-xl pb-5 font-normal pt-2 ml-7 max-w-2xl text-slate-700">
            With deep knowledge and experience across full stack software development, product strategy, and user experience design, Amy has specialized in building and delivering rich data-driven applications for complex users for over {Number(new Date().getFullYear()) - 2013} years.
          </p>
          <p className="text-xl mb-5 mt-5 leading text-lg ml-7 max-w-2xl text-slate-700 mt-0">
            She has been an early engineer for startups during the early adoption days of many technology waves, including the following.
          </p>
          <div className="pl-5 mb-4">
            <ul className="text-lg font-normal leading-relaxed mr-5 list-disc ml-6 mt-4">
              <li>
                <strong>Open data</strong> (2013-2014)
              </li>
              <li>
              <strong>Big data</strong> (2014)
              </li>
              <li>
                <strong>Modern web development</strong> (2013-Present)
              </li>
              <li>
                <strong>Self-driving cars</strong> (2018-2019)
              </li>
              <li>
                <strong>Platform engineering (DevOps)</strong> (2019-2021)
              </li>
              <li>
                <strong>Web3</strong> (2021-Present) and <strong>Cryptocurrency</strong> (2013, 2021-Present)
              </li>
            </ul>
          </div>
          <Link
            to="/resume/amy-hua"
            className="ml-6 uppercase tracking-widest font-bold py-3 px-5 bg-white inline-block text-black border border-black cursor-pointer hover:bg-black hover:text-white">
            See her Resume
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default FounderBio;
