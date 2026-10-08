import {
  Header,
  Masthead,
  CoverStory,
  Stories,
  PrintedIssue,
  Footer,
} from "./components";
import "./styles.css";
export default function Page() {
  return (
    <div className="monograph" id="monograph-top">
      <div className="monograph-page">
        <Header />
        <Masthead />
        <main>
          <CoverStory />
          <Stories />
          <PrintedIssue />
        </main>
        <Footer />
      </div>
    </div>
  );
}
