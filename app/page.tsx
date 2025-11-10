import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Animal Alphabet Adventure | A?Z Rhyme",
  description: "Vibrant, playful animal alphabet rhyme from A to Z.",
};

type Entry = {
  letter: string;
  animal: string;
  line: string;
  color: string;
};

const ENTRIES: Entry[] = [
  { letter: "A", animal: "Alligator", line: "snapping by the shore.", color: "#06b6d4" },
  { letter: "B", animal: "Bear", line: "who loves to roar and snore.", color: "#ea580c" },
  { letter: "C", animal: "Cat", line: "who purrs in the sun.", color: "#f59e0b" },
  { letter: "D", animal: "Dolphin", line: "who leaps just for fun.", color: "#3b82f6" },
  { letter: "E", animal: "Elephant", line: "big and gray.", color: "#475569" },
  { letter: "F", animal: "Fox", line: "who slips away.", color: "#ef4444" },
  { letter: "G", animal: "Giraffe", line: "tall and neat.", color: "#22c55e" },
  { letter: "H", animal: "Hippo", line: "with muddy feet.", color: "#8b5cf6" },
  { letter: "I", animal: "Iguana", line: "basking all day.", color: "#16a34a" },
  { letter: "J", animal: "Jaguar", line: "sleek and gray.", color: "#0ea5e9" },
  { letter: "K", animal: "Kangaroo", line: "hopping so high.", color: "#a16207" },
  { letter: "L", animal: "Lion", line: "king of the sky.", color: "#f97316" },
  { letter: "M", animal: "Monkey", line: "swinging with glee.", color: "#22d3ee" },
  { letter: "N", animal: "Narwhal", line: "horn in the sea.", color: "#64748b" },
  { letter: "O", animal: "Owl", line: "who hoots at night.", color: "#14b8a6" },
  { letter: "P", animal: "Penguin", line: "dressed in white.", color: "#111827" },
  { letter: "Q", animal: "Quokka", line: "smiling bright.", color: "#9333ea" },
  { letter: "R", animal: "Rabbit", line: "quick in flight.", color: "#e11d48" },
  { letter: "S", animal: "Snake", line: "who slithers low.", color: "#10b981" },
  { letter: "T", animal: "Tiger", line: "with stripes that boldly glow.", color: "#f59e0b" },
  { letter: "U", animal: "Unicornfish", line: "gliding where the currents flow.", color: "#3b82f6" },
  { letter: "V", animal: "Vulture", line: "soaring on the winds that blow.", color: "#6b7280" },
  { letter: "W", animal: "Whale", line: "singing songs deep below.", color: "#0ea5e9" },
  { letter: "X", animal: "Xerus", line: "desert dancer, swift and low.", color: "#65a30d" },
  { letter: "Y", animal: "Yak", line: "fluffy as a drift of snow.", color: "#dc2626" },
  { letter: "Z", animal: "Zebra", line: "striped in a perfect row.", color: "#111827" }
];

function Badge({ letter, color }: { letter: string; color: string }) {
  return (
    <div className="badge" style={{ background: color }} aria-hidden>
      <span className="letter">{letter}</span>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <h1 className="title">?? Animal Alphabet Adventure</h1>
          <p className="subtitle">A to Z, a rhythmic, colorful stroll through the animal world.</p>
        </header>

        <section className="grid" aria-label="Alphabet rhyme entries">
          {ENTRIES.map(({ letter, animal, line, color }) => (
            <article key={letter} className="card" aria-label={`${letter} is for ${animal}`}>
              <Badge letter={letter} color={color} />
              <div className="text">
                <div className="animal">{letter} is for {animal},</div>
                <div className="line">{line}</div>
              </div>
            </article>
          ))}
        </section>

        <p className="footer">No chorus?just flowing lines from A to Z ?</p>
      </div>
    </main>
  );
}
