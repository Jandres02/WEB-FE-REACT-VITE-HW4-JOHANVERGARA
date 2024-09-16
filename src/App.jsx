import Header from "./components/Header";
import Intro from "./components/Intro";
import DOFA from "./components/DOFA";
import OrganizationalIdentity from "./components/OrganizationalIdentity";
import StrategicObjectives from "./components/StrategicObjectives";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-24 mx-auto px-4 lg:px-16 xl:px-24 2xl:px-32 max-w-7xl">
        <Intro />
        <DOFA />
        <OrganizationalIdentity />
        <StrategicObjectives />
      </main>
      <Footer />
    </div>
  );
}
