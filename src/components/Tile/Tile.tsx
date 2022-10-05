const Tile = ({ header, children }: { header: string; children: any; }) => (
  <article className="px-5 py-10 bg-slate-100 text-black sm:w-[360px] xs:mb-0 mb-8  mr-10 hover:bg-black hover:text-white group">
    <h3 className="font-bold text-black group-hover:text-white text-xl">{header}</h3>
    <p className="mt-6 leading-relaxed text-lg">
      {children}
    </p>
  </article>
);

export default Tile;
