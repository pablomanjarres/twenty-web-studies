import { useState } from "react";
import { pieces } from "./data";
import { Header } from "./Header";
import { Exhibition } from "./Exhibition";
import { MaterialNotes } from "./MaterialNotes";
import { AtelierStudy } from "./AtelierStudy";
import { PieceIndex } from "./PieceIndex";
import { Appointment } from "./Appointment";
import { Footer } from "./Footer";
import "./styles.css";
export default function Page() {
  const [active, setActive] = useState(0);
  const [metal, setMetal] = useState(0);
  const piece = pieces[active];
  const material = piece.materials[metal];
  const selectPiece = (index: number) => {
    setActive(index);
    setMetal(0);
  };
  return (
    <div className="estelle-page" id="estelle-top">
      <Header />
      <main>
        <Exhibition
          piece={piece}
          material={material}
          metal={metal}
          onMetal={setMetal}
        />
        <MaterialNotes piece={piece} material={material} />
        <AtelierStudy />
        <PieceIndex active={active} onSelect={selectPiece} />
        <Appointment
          key={piece.id + material.id}
          piece={piece}
          material={material}
        />
      </main>
      <Footer />
    </div>
  );
}
