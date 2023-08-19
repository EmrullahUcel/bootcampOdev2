import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImgOfLoc from "./components/ImgOfLoc";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PageContent />
      <ProjectSection />
      <AboutSection/>
      <ContactSection/>
      <ImgOfLoc/>
      <Footer/>
    </>
  );
}

export default App;
