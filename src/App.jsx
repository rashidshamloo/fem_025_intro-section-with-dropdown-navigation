import Menu from "./components/Menu";
import menuData from "./data/menuData.json";

function App() {
  return (
    <>
      <header className="mx-4 flex justify-between items-center py-8 md:justify-start md:gap-x-16 md:mx-auto lg:mb-10">
        <a href="/" title="Home">
          <img src="images/logo.svg" alt="Snap" aria-hidden="true" />
        </a>
        <Menu data={menuData} />
      </header>
      <main className="flex flex-col-reverse items-center md:flex-row md:gap-x-10 lg:max-w-6xl md:mx-auto md:items-stretch xl:gap-x-36">
        <div className="px-3 flex flex-col gap-6 justify-start items-center md:items-start md:px-0 md:gap-12">
          <h1 className="text-4xl font-bold leading-[1] mt-12 sm:text-5xl md:mt-24 md:text-6xl lg:text-[5rem]">
            Make remote work
          </h1>
          <p className="text-center text-mediumGray md:text-lg md:mr-11 md:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a
            href="#"
            className="rounded-2xl bg-almostBlack text-almostWhite py-[0.65rem] px-5 border-almostBlack border-2 font-bold md:py-3 md:px-7 md:text-lg hover:text-almostBlack hover:bg-inherit"
          >
            Learn more
          </a>
          <div className="flex gap-8 items-center justify-center mt-6 w-full mb-4 md:mt-auto md:mb-0 md:gap-10 md:justify-left">
            <img
              src="images/client-databiz.svg"
              alt="databiz"
              aria-hidden="true"
              className="max-w-full min-w-0"
            />
            <img
              src="images/client-audiophile.svg"
              alt="audiophile"
              aria-hidden="true"
              className="max-w-full min-w-0"
            />
            <img
              src="images/client-meet.svg"
              alt="meet"
              aria-hidden="true"
              className="max-w-full min-w-0"
            />
            <img
              src="images/client-maker.svg"
              alt="maker"
              aria-hidden="true"
              className="max-w-full min-w-0"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <picture>
            <source
              srcSet="images/image-hero-desktop.png"
              media="(min-width:768px)"
            />
            <img
              src="images/image-hero-mobile.png"
              alt="Hero Image - Man with Laptop"
              aria-hidden="true"
              className="md:max-w-full lg:max-w-[30rem]"
            />
          </picture>
        </div>
      </main>
      <footer className="mt-4 mb-2 text-gray-400 text-sm text-center md:mb-0 md:mt-4">
        <p>Developed by Rashid Shamloo</p>
        <ul className="flex gap-2 justify-center">
          <li>
            <a
              href="https://rashidshamloo.github.com"
              title="GitHub"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rashid-shamloo/"
              title="LinkedIn"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rashidshamloo"
              title="Twitter"
              target="_blank"
              className="hover:text-gray-600 transition-all duration-300"
            >
              <i className="bi-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
export default App;
