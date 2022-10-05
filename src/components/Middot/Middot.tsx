import classNames from "classnames";

const Middot = ({ className }: { className?: string; }) => (<span className={classNames("px-3", className)}>·</span>)

export default Middot;
