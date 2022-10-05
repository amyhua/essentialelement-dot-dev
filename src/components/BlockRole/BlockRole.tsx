import classNames from "classnames";
import { AffiliationLogo, ExternalLogo } from "../Logo/Logo";
import Middot from "../Middot/Middot";

const BlockRole = ({
  company,
  name='Amy Hua',
  periodType='Full Time',
  period,
  role,
  contributions=[],
  outcomes=[],
  affiliations=[],
  active,
  size='large',
  affiliationLogo,
  affiliationClassName,
}: {
  name?: string,
  periodType?: string,
  company: string,
  period: string,
  contributions?: any[],
  outcomes?: any[],
  affiliations?: any[],
  role?: string,
  active?: boolean,
  size?: string,
  affiliationLogo?: AffiliationLogo,
  affiliationClassName?: string,
}) => (!active ? null :
  <div className={classNames(
    {
      "my-6": size === 'large',
      "mt-2 mb-7": size === 'small'
    }
  )}>
      <div className={classNames({
        "flex": size === 'small'
      })}>
        {/* {
          affiliationLogo &&
          <div>
            <ExternalLogo affiliation={affiliationLogo} className={affiliationClassName ? ['external-logo', affiliationClassName].join(' ') : ''} /> 
          </div>
        } */}
        <div className="ml-0">
          <h2 className={classNames(
            "font-bold",
            {
              "text-2xl": size === 'large',
              "text-lg": size === 'small'
            }
          )}>{company}</h2>
          <p className={classNames(
            "pt-1",
            {
              "text-base": size === 'small',
              "text-lg": size === 'large',
            }
          )}>
            {periodType}<span className={classNames({
              "hidden": size === 'small'
            })}> - {name}</span> <Middot /> {period}{' '}{
              role &&
              <>
                <Middot className="hidden sm:inline-block" /> <em className="inline-block sm:inline mt-1 sm:mt-0">{role}</em>
              </>
            }
          </p>
        </div>
      </div>
      <ul className={classNames(
        "leading-relaxed list-disc ml-6",
        {
          "text-base": size === 'small',
          "text-lg": size === 'large',
        }
      )}>
        {
          contributions.map((contrib: string, i: number) => (
            <li className={i === 0 ? classNames("pb-2", {
              "pt-3": size === 'large',
              "pt-2": size === 'small'
            }) : undefined}>
              {contrib}
            </li>
          ))
        }
        {
          outcomes.map((outcome: string, i: number) => (
            <li className={i === 0 ? classNames("pb-2", {
              "pt-3": size === 'large',
              "pt-2": size === 'small'
            }) : undefined}>
              <strong>Outcome</strong>: {outcome}
            </li>
          ))
        }
        {
          affiliations.map((outcome: string, i: number) => (
            <li className={i === 0 ? classNames({
              "pt-3": size === 'large',
              "pt-2": size === 'small'
            }) : undefined}>
              <strong>Affiliations</strong>: {outcome}
            </li>
          ))
        }
      </ul>
    </div>
)
export default BlockRole;