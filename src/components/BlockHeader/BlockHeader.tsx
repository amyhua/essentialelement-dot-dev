import classNames from "classnames";

const BlockHeader = ({ text, light }: { text: string; light?: boolean; }) => (
  <h2 className={classNames(
    "text-lg uppercase tracking-widest pr-14 py-2 inline-block",
    {
      "mb-5 pl-5 bg-black text-white": !light,
    }
  )}>
    {text}
  </h2>
);

export default BlockHeader;
