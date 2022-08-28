const Tile = ({ header, children }: { header: string; children: any; }) => (
  <article className="px-5 py-10 bg-slate-100 text-black w-[360px] mr-10 hover:bg-black hover:text-white group">
    <h3 className="font-bold text-black group-hover:text-white text-xl">{header}</h3>
    <p className="mt-3 leading-relaxed text-base">
      {children}
    </p>
  </article>
);

export default Tile;
