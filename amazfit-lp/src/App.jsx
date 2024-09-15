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
      <Intro />
      <DOFA />
      <OrganizationalIdentity />
      <StrategicObjectives />
      <Footer />
    </div>
  );
}
