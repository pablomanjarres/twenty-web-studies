import { Header, Hero, Wave, Menu, Story, Table, Footer } from "./components";
import "./styles.css";
export default function Page() {
  return (
    <div className="salt" id="salt-top">
      <Header />
      <main>
        <Hero />
        <Wave />
        <Menu />
        <Story />
        <Table />
      </main>
      <Footer />
    </div>
  );
}
