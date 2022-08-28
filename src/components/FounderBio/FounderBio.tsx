const FounderBio = () => (
  <div className="bg-gray-100 px-10 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex">
        <div className="ml-8 mr-5">
          <img src={require('./avatar-amy-hua.png')} alt="Amy Hua Bio Picture" className="mb-5 w-[144px] mx-auto" />
          <h3 className="mb-5 text-base uppercase tracking-wider pr-8 pl-2 w-[144px] py-1 bg-black text-white inline-block">
            Founder
          </h3>
          <h2 className="font-bold text-left text-xl tracking-wide">
            Amy Hua
          </h2>
        </div>
        <div className="flex-1">
          <h2 className="tracking-wide font-bold text-lg mt-2 ml-7 mb-5 text-slate-800">
            AMY HUA IS A SEASONED TECHNOLOGY<br/>
            BUILDER AND EDUCATOR
          </h2>
          <p className="leading text-lg ml-7 max-w-2xl text-slate-700">
            With deep knowledge and experience across full stack software development, product strategy, and user experience design, Amy has specialized in building and delivering complex data-driven applications for over 10 years.
          </p>
          <p className="leading text-lg ml-7 max-w-2xl text-slate-700 mt-5">
            She has worked in startups at the bleeding edge of emerging technology waves, including open data, big data, modern web development, self-driving cars, developer tooling, web3, and cryptocurrency.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FounderBio;
