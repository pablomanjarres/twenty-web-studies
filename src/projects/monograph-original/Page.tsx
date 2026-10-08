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
    <div className="monograph-original" id="monograph-original-top">
      <div className="monograph-original-page">
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
