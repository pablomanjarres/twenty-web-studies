import { useState } from "react";
import { formulas, type Selection } from "./data";
import { Header } from "./Header";
import { SpecimenSheet } from "./SpecimenSheet";
import { TextureStudy } from "./TextureStudy";
import { Ritual } from "./Ritual";
import { Packaging } from "./Packaging";
import { Footer } from "./Footer";
import { SelectionBag } from "./SelectionBag";
import "./styles.css";
export default function Page() {
  const [active, setActive] = useState(1);
  const [volume, setVolume] = useState(0);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [bag, setBag] = useState(false);
  const select = (index: number) => {
    setActive(index);
    setVolume(0);
  };
  return (
    <main className="vale">
      <Header count={selections.length} onBag={() => setBag(true)} />
      <SpecimenSheet
        formula={formulas[active]}
        active={active}
        volume={volume}
        onSelect={select}
        onVolume={setVolume}
        onAdd={() => {
          setSelections((current) => [
            ...current,
            { formula: formulas[active], volume },
          ]);
          setBag(true);
        }}
      />
      <TextureStudy formula={formulas[active]} />
      <Ritual onSelect={select} />
      <Packaging />
      <Footer />
      {bag && (
        <SelectionBag
          items={selections}
          onClose={() => setBag(false)}
          onRemove={(index) =>
            setSelections((current) => current.filter((_, i) => i !== index))
          }
        />
      )}
    </main>
  );
}
