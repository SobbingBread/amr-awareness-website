import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ReadingProgress } from "./components/ui/ReadingProgress";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Science } from "./sections/Science";
import { Solutions } from "./sections/Solutions";
import { JudgesChallenge } from "./sections/JudgesChallenge";
import { TakeAction } from "./sections/TakeAction";
import { AboutUs } from "./sections/AboutUs";
import { Resources } from "./sections/Resources";

function App() {
  return (
    <LanguageProvider>
      <ReadingProgress />
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Science />
        <Solutions />
        <JudgesChallenge />
        <TakeAction />
        <AboutUs />
        <Resources />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
