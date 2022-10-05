import classNames from 'classnames';
import { APP_MAX_WIDTH } from '../../contants';

const Section = ({ children, className, fullWidth, id }: { children: any, className?: string, fullWidth?: boolean, id?: string; }) => (
  <section id={id} className={classNames(
    "mx-auto py-7",
    className,
    {
      // [APP_MAX_WIDTH]: !fullWidth,
      // "sm:px-4 lg:px-8": !fullWidth,
      [APP_MAX_WIDTH]: true,
      "sm:px-4 lg:px-8": true,
    }
  )}>
    {children}
  </section>
);

export default Section;
