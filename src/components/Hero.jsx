import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src="https://brieflyfy.netlify.app/assets/logo-26c5c6d2.svg" alt="sumz_logo" className="w-28 object-contain" />
        <span className="blue_gradient ">Breifify</span>
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/RaviRajZt/article_summarizer",
              "_blank"
            )
          }
          className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Unlock clarity with Briefify <br className="max-md:hidden" />
        <span className="blue_gradient ">Breifify</span>
      </h1>

      <h2 className="desc">
        Unlock the essence of lengthy article with Briefify, an open source solution for concise summarisation
      </h2>
    </header>
  );
}

export default Hero;
