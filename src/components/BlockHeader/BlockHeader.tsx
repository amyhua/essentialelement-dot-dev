import classNames from "classnames";

const BlockHeader = ({ text, light, className, description, }: { text: string; light?: boolean; className?: string; description?: string; }) => (
  <>
    <h2 className={classNames(
      className,
      "text-lg uppercase tracking-widest pr-14 pt-2 inline-block",
      {
        "mb-5 pl-5 bg-black text-white": !light,
      }
    )}>
      {text}
    </h2>
    {
      description &&
      <p className="mt-1 text-gray-500">
        {description}
      </p>
    }
  </>
);

export default BlockHeader;
