import React from "react";
import BannerMain from "./components/BannerMain";
import Navbar from "./components/Navbar";
import AboutPage from "./components/About";
import ProjectBanner from "./components/ProjectBanner";

function App() {
  return (
    <>
      <Navbar />
      <main className="md:w-[700px] mx-auto text-center">
        <section>
          <article>
            <BannerMain />
            <AboutPage />
            <ProjectBanner />
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
