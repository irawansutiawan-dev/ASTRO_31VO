import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { Trophy, ChevronDown, ChevronUp } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

// Helper function to render text with LaTeX
const renderWithLatex = (text: string) => {
  const parts = text.split(/(\$[^$]+\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const latex = part.slice(1, -1);
      return <InlineMath key={index} math={latex} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const materiSection = {
  title: "MATERI - GARIS DAN SUDUT",
  sections: [
    {
      heading: "A. Definisi Sudut",
      content: `Sebuah sudut dibentuk ketika dua garis yang berbeda bertemu di satu titik. Sudut adalah besaran rotasi suatu ruas garis dari satu titik pangkalnya ke posisi yang lain. Selain itu, dalam bangun dua dimensi yang beraturan, sudut dapat pula diartikan sebagai ruang antara dua buah ruas garis lurus yang saling berpotongan.`
    },
    {
      heading: "B. Sudut Positif dan Sudut Negatif",
      content: `Ruas garis OA diputar terhadap titik O ke garis OB sehingga diperoleh sudut AOB dan dapat ditulis dengan $\\angle AOB$.

Untuk mengukur sudut dilakukan berlawanan dengan arah jarum jam yang disebut dengan sudut positif, sedangkan jika pengukuran dilakukan searah jarum jam maka dituliskan sudut negatif.

Jadi besar sudut itu selalu positif, jika ada sudut yang dituliskan negatif, itu bukan besar sudut yang sebenarnya, hanya cara mengukurnya yang dilakukan berbeda.

Misalnya tertulis sudut $\\angle AOB = -30°$, sudut sebenarnya adalah $\\angle AOB = 360° - 30° = 330°$.`
    },
    {
      heading: "C. Ukuran Sudut",
      content: `Berdasarkan ukurannya, sudut dibagi dalam beberapa jenis yaitu:
1. Sudut $0°$, pada sudut nol derajat tidak terdapat perputaran
2. Sudut $90°$ sering juga disebut dengan sudut siku-siku, sudut yang terbentuk dari seperempat putaran
3. Sudut $180°$, sudut yang terbentuk dari setengah putaran
4. Sudut $360°$, sudut yang terbentuk dari satu putaran penuh
5. Sudut lancip, sudut yang besarnya diantara $0°$ dan $90°$
6. Sudut tumpul, sudut yang besarnya diantara $90°$ dan $180°$
7. Sudut refleks, sudut yang besarnya diantara $180°$ dan $360°$`
    },
    {
      heading: "D. Sudut Yang Bersebelahan",
      content: `Sudut yang bersebelahan adalah sudut yang memiliki titik pusat sama dan memiliki salah satu sisi yang sama.`
    },
    {
      heading: "E. Sudut Pada Satu Titik",
      content: `Sudut pada satu titik adalah sudut yang terbentuk oleh beberapa garis (2 garis atau lebih) dan jumlah keseluruhan sudut adalah $360°$.`
    },
    {
      heading: "F. Sudut Berpelurus (Sudut Suplemen)",
      content: `Sudut yang berpelurus adalah dua buah sudut yang membentuk sudut $180°$. Masing-masing sudut tersebut saling berpelurus satu dengan yang lainnya.

Pada dua garis sejajar yang dipotong oleh garis transversal, sudut $a°$ dan sudut $b°$ adalah sudut-sudut yang terletak di antara 2 garis sejajar yang berpotongan dengan garis transversal adalah sudut berpelurus, sehingga $a° + b° = 180°$.`
    },
    {
      heading: "G. Sudut Berpenyiku (Sudut Komplemen)",
      content: `Sudut yang saling berpenyiku adalah dua buah sudut yang membentuk sudut $90°$. Masing-masing sudut tersebut saling berpenyiku satu dengan yang lainnya.`
    },
    {
      heading: "H. Sudut Berseberangan",
      content: `Sudut yang berseberangan adalah sudut yang terbentuk secara berlawanan pada suatu garis transversal yang berada di antara dua buah garis sejajar. Besar sudut yang berseberangan adalah sama.`
    },
    {
      heading: "I. Sudut Sehadap",
      content: `Sudut Sehadap adalah sudut yang memiliki posisi yang serupa (sama tetapi beda tempat) yang dihubungkan oleh sebuah garis transversal dan sepasang garis sejajar. Garis transversal yang memotong pasangan garis sejajar menghasilkan empat pasang sudut sehadap dan masing setiap pasang sudut itu besarnya adalah sama.`
    },
    {
      heading: "J. Sudut Bertolak Belakang (Sudut Berlawanan)",
      content: `Sudut bertolak belakang atau sudut berlawanan adalah sudut dengan sisi-sisi yang bertolak belakang pada sebuah titik potong dari dua buah garis, dan besar kedua sudut yang bertolak belakang ini adalah sama.`
    },
    {
      heading: "K. Sudut Sepihak",
      content: `Saat dua garis sejajar dipotong garis ketiga dapat kita peroleh sudut sepihak. Ada dua jenis sudut sepihak yaitu sudut sepihak dalam dan sudut sepihak luar. Sudut luar sepihak adalah sudut yang berada di sisi luar dan berada pada sisi yang sama. Sedangkan sudut dalam sepihak adalah sudut yang berada di sisi dalam dan berada pada sisi yang sama.`
    },
    {
      heading: "L. Sudut pada Segitiga",
      content: `1. Jumlah Total Sudut pada Segitiga
Jumlah total sudut dalam sebuah segitiga adalah $180°$.

2. Sudut pada segitiga sama sisi, segitiga sama kaki dan segitiga sembarang
- Pada segitiga sama sisi, ketiga sudutnya memiliki besar yang sama, yaitu $60°$: $\\angle A = \\angle B = \\angle C = 60°$
- Pada segitiga sama kaki, dua sudut yang berada di sisi yang sama panjang (disebut sudut alas) memiliki besar yang sama: $\\angle A = \\angle C$
- Pada segitiga sembarang, besar ketiga sudutnya berbeda satu sama lain: $\\angle A \\neq \\angle B \\neq \\angle C$`
    }
  ]
};

const latihanDasar = [
  { no: 1, soal: "Perhatikan gambar. Besar $\\angle KLM$ adalah ...", options: ["A. $15°$", "B. $30°$", "C. $42°$", "D. $60°$"] },
  { no: 2, soal: "Perhatikan gambar berikut!\nPerhatikan pernyataan berikut!\n(i) Sudut 1 dan sudut 7, sudut luar berseberangan\n(ii) Sudut 1 dan sudut 6, sudut luar sepihak\n(iii) Sudut 4 dan sudut 6, sudut bertolak belakang\n(iv) Sudut 3 dan sudut 7, sudut sehadap\nPernyataan yang benar adalah ....", options: ["A. (i) dan (ii) saja", "B. (ii) dan (iv) saja", "C. (i), (ii) dan (iii)", "D. (i), (ii) dan (iv)"] },
  { no: 3, soal: "$\\angle A_1 = 103°$, maka besar $\\angle B_4$ dan $\\angle A_3$ berturut-turut adalah ...", options: ["A. $13°$ dan $90°$", "B. $90°$ dan $130°$", "C. $77°$ dan $103°$", "D. $103°$ dan $77°$"] },
  { no: 4, soal: "Perhatikan gambar. Besar $\\angle BCF$ adalah ....", options: ["A. $35°$", "B. $45°$", "C. $60°$", "D. $75°$"] },
  { no: 5, soal: "Diketahui besar $\\angle CBD = (2x + 5)°$ dan $\\angle ABD = (3x - 25)°$. Besar pelurus sudut CBD adalah ...", options: ["A. $82°$", "B. $85°$", "C. $95°$", "D. $104°$"] },
  { no: 6, soal: "Suatu sudut besarnya 3 kali pelurusnya, maka sudut tersebut adalah...", options: ["A. $15°$", "B. $30°$", "C. $45°$", "D. $60°$"] },
  { no: 7, soal: "Perhatikan gambar berikut. Dari gambar di atas besar $\\angle QPR$ adalah ...", options: ["A. $18°$", "B. $36°$", "C. $45°$", "D. $54°$"] },
  { no: 8, soal: "Perhatikan gambar berikut. Besar $\\angle BAC$ adalah ...", options: ["A. $80°$", "B. $70°$", "C. $60°$", "D. $50°$"] },
  { no: 9, soal: "Perhatikan gambar berikut! Besar sudut ACB adalah ....", options: ["A. $55°$", "B. $85°$", "C. $95°$", "D. $125°$"] },
  { no: 10, soal: "Besar sudut terkecil dari dua jarum jam pada pukul 22.10 adalah ...", options: ["A. $145°$", "B. $125°$", "C. $115°$", "D. $95°$"] },
  { no: 11, soal: "Besar sudut terkecil dari dua jarum jam pada pukul 07.20 adalah ...", options: ["A. $90°$", "B. $100°$", "C. $105°$", "D. $110°$"] },
  { no: 12, soal: "Diketahui besar $\\angle A = (2x + 3)°$ dan $\\angle B = (3x - 8)°$ saling berpelurus, maka penyiku sudut $\\angle A$ adalah....", options: ["A. $13°$", "B. $37°$", "C. $77°$", "D. $103°$"] },
  { no: 13, soal: "Perhatikan gambar berikut ini!\nJika $\\angle \\alpha = 3x° - y° - 15°$, $\\angle \\beta = 2y°$, $\\angle \\delta = y° - x° + 85°$, $\\angle \\theta = 2x° + y° - 20°$. Maka nilai dari $x + y = ...$", options: ["A. 85", "B. 80", "C. 55", "D. 30"] },
  { no: 14, soal: "Perhatikan gambar berikut:\nJika besar $\\angle a = 95°$ dan $\\angle b = 70°$ maka selisih besar sudut x dan y adalah...", options: ["A. $25°$", "B. $45°$", "C. $65°$", "D. $85°$"] },
  { no: 15, soal: "Perhatikan gambar berikut:\nJika garis $l_1$ dan $l_2$ adalah dua garis yang sejajar, maka nilai x adalah...", options: ["A. $13°$", "B. $39°$", "C. $47°$", "D. $55°$"] },
  { no: 16, soal: "Empat sudut terbentuk oleh dua garis berpotongan seperti pada gambar berikut:\nBila diketahui $q° = 45°$ maka:", options: ["A. $p = 135°$; $s = 45°$; $r = 135°$", "B. $p = 130°$; $s = 45°$; $r = 130°$", "C. $p = 135°$; $s = 40°$; $r = 135°$", "D. $p = 130°$; $s = 40°$; $r = 130°$"] },
  { no: 17, soal: "Pada kubus ABCD.EFGH besar sudut BGE adalah...", options: ["A. $30°$", "B. $60°$", "C. $45°$", "D. $90°$"] },
  { no: 18, soal: "Perhatikan gambar. Besar sudut AOB adalah ...", options: ["A. $70°$", "B. $120°$", "C. $140°$", "D. $160°$"] },
  { no: 19, soal: "Perhatikan gambar berikut!\nJika besar $\\angle a = 35°$ dan $\\angle b = 45°$ maka jumlah besar sudut x dan y adalah ...", options: ["A. $285°$", "B. $300°$", "C. $315°$", "D. $330°$"] },
  { no: 20, soal: "Perhatikan gambar berikut!\nJika diketahui AB sejajar CD, maka nilai x adalah ...", options: ["A. $15°$", "B. $30°$", "C. $40°$", "D. $45°$"] },
  { no: 21, soal: "Perhatikan gambar berikut! Besar penyiku $\\angle SQR$ adalah ...", options: ["A. $9°$", "B. $32°$", "C. $48°$", "D. $58°$"] },
  { no: 22, soal: "Perhatikan gambar berikut!\nBesar sudut nomor 1 adalah $95°$, dan sudut nomor 2 adalah $110°$. Besar sudut nomor 3 adalah ...", options: ["A. $5°$", "B. $15°$", "C. $25°$", "D. $35°$"] },
  { no: 23, soal: "Perhatikan gambar berikut. Besar $\\angle BAC$ adalah...", options: ["A. $24°$", "B. $48°$", "C. $72°$", "D. $98°$"] },
  { no: 24, soal: "Perhatikan gambar di bawah ini.\nDiketahui sudut SPT = $83°$ dan sudut PQT = $41°$. Garis PQ dan RS sejajar, demikian juga garis PS dan QT sejajar. Maka besar x = ...", options: ["A. $41°$", "B. $82°$", "C. $124°$", "D. $139°$"] },
  { no: 25, soal: "Dari gambar berikut, diketahui perbandingan x:y adalah 2:7. Besar sudut x adalah ...", options: ["A. $120°$", "B. $60°$", "C. $40°$", "D. $20°$"] },
  { no: 26, soal: "Perhatikan gambar. Jika $\\angle EFB = 65°$ dan $\\angle FCD = 120°$, maka besar $\\angle BFC$ adalah...", options: ["A. $55°$", "B. $45°$", "C. $50°$", "D. $35°$"] },
  { no: 27, soal: "Perhatikan gambar berikut. Besar sudut a adalah ...", options: ["A. $30°$", "B. $50°$", "C. $80°$", "D. $100°$"] },
  { no: 28, soal: "Perhatikan gambar di bawah ini! Nilai x adalah ...", options: ["A. $150°$", "B. $140°$", "C. $110°$", "D. $100°$"] },
];

const latihanOlimpiade = [
  { no: 1, soal: "OSN Matematika 2003 Tingkat Kota\nPada gambar disamping, ABCD adalah persegi dan ABE adalah segitiga sama sisi. Besar sudut DAE adalah ...", options: ["A. $15°$", "B. $30°$", "C. $45°$", "D. $60°$", "E. $75°$"] },
  { no: 2, soal: "OSN Matematika 2004 Tingkat Kota\nPada gambar berikut, garis PQ dan garis RS sejajar, demikian juga garis PS dan QT sejajar. Nilai x sama dengan ...", options: [] },
  { no: 3, soal: "OSN Matematika 2006 Tingkat Kota\nJika pada segi n beraturan besar sudut-sudutnya $135°$, maka n = ...", options: [] },
  { no: 4, soal: "OSN Matematika 2007 Tingkat Kota\nPerhatikan gambar berikut.\nNilai dari $a + b + c + d + e + f + g + h + i$ adalah ...", options: ["A. 360", "B. 540", "C. 720", "D. 900", "E. 1.260"] },
  { no: 5, soal: "OSN Matematika 2008 Tingkat Kota\nPerhatikan gambar berikut.\nSegitiga PQR merupakan segitiga sama sisi. Jika $\\angle SPQ = 20°$ dan $\\angle TQR = 35°$, maka $\\angle SUT = ...$", options: ["A. $135°$", "B. $130°$", "C. $125°$", "D. $105°$", "E. $95°$"] },
  { no: 6, soal: "OSN Matematika 2014 Tingkat Kota\nDiketahui garis $L_1$ sejajar garis $L_2$ dan garis $L_3$ sejajar garis $L_4$.\nBesar sudut $y - x$ adalah ...", options: ["A. $0°$", "B. $10°$", "C. $30°$", "D. $50°$"] },
  { no: 7, soal: "OSN Matematika 2018 Tingkat Kota\nNilai sudut x dan y pada gambar berikut adalah ...", options: ["A. $x = 74°$; $y = 104°$", "B. $x = 37°$; $y = 104°$", "C. $x = 74°$; $y = 114°$", "D. $x = 37°$; $y = 106°$"] },
  { no: 8, soal: "OSN Matematika 2021 Tingkat Kota\nPada $\\triangle ACB$, $\\angle ACB = 120°$. Titik E dan F berturut-turut berada pada sisi AB dan AC. Jika $AF = FE = EC = CB$, maka $\\angle ABC = ...$", options: ["A. $15°$", "B. $30°$", "C. $36°$", "D. $45°$"] },
];

const OlimpiadeGarisSudutPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"materi" | "dasar" | "olimpiade">("materi");
  const [expandedSections, setExpandedSections] = useState<number[]>([0]);

  const toggleSection = (idx: number) => {
    playPopSound();
    setExpandedSections(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-3xl w-full px-4 py-10">
        <Trophy className="w-10 h-10 text-accent mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          OLIMPIADE - GARIS DAN SUDUT
        </h1>
        <p className="text-white/50 text-xs text-center mb-6 font-body">Irawan Sutiawan, M.Pd</p>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-6">
          {[
            { key: "materi" as const, label: "Materi" },
            { key: "dasar" as const, label: "Latihan Dasar" },
            { key: "olimpiade" as const, label: "Latihan Olimpiade" },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => { playPopSound(); setActiveTab(tab.key); }}
              className={`font-display text-xs px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                activeTab === tab.key
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-card/80 text-white/70 border-border hover:border-accent/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Materi Tab */}
        {activeTab === "materi" && (
          <div className="space-y-3 animate-slide-up">
            {materiSection.sections.map((section, idx) => (
              <div key={idx} className="bg-card/80 backdrop-blur border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection(idx)}
                  className="w-full flex items-center justify-between px-5 py-4 cursor-pointer text-left"
                >
                  <span className="font-display text-sm text-accent font-bold">{section.heading}</span>
                  {expandedSections.includes(idx) ? (
                    <ChevronUp className="w-4 h-4 text-accent shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
                  )}
                </button>
                {expandedSections.includes(idx) && (
                  <div className="px-5 pb-4">
                    <div className="font-body text-sm text-white/80 whitespace-pre-wrap leading-relaxed">
                      {section.content.split('\n').map((line, i) => (
                        <div key={i} className="mb-1">{renderWithLatex(line)}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Latihan Dasar Tab */}
        {activeTab === "dasar" && (
          <div className="space-y-4 animate-slide-up">
            {latihanDasar.map((soal) => (
              <div key={soal.no} className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
                <div className="font-body text-sm text-white mb-3 whitespace-pre-wrap">
                  <span className="text-accent font-bold">{soal.no}.</span> {soal.soal.split('\n').map((line, lineIdx) => (
                    <span key={lineIdx}>
                      {lineIdx > 0 && <br />}
                      {renderWithLatex(line)}
                    </span>
                  ))}
                </div>
                {soal.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {soal.options.map((opt, j) => (
                      <div key={j} className="font-body text-xs text-white/70 bg-muted/30 rounded-lg px-3 py-2">
                        {renderWithLatex(opt)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Latihan Olimpiade Tab */}
        {activeTab === "olimpiade" && (
          <div className="space-y-4 animate-slide-up">
            {latihanOlimpiade.map((soal) => (
              <div key={soal.no} className="bg-card/80 backdrop-blur border border-border rounded-xl px-5 py-4">
                <div className="font-body text-sm text-white mb-3 whitespace-pre-wrap">
                  <span className="text-accent font-bold">{soal.no}.</span> {soal.soal.split('\n').map((line, lineIdx) => (
                    <span key={lineIdx}>
                      {lineIdx > 0 && <br />}
                      {renderWithLatex(line)}
                    </span>
                  ))}
                </div>
                {soal.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {soal.options.map((opt, j) => (
                      <div key={j} className="font-body text-xs text-white/70 bg-muted/30 rounded-lg px-3 py-2">
                        {renderWithLatex(opt)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => { playPopSound(); navigate("/olimpiade"); }}
            className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer font-body"
          >
            ← Kembali ke Olimpiade
          </button>
        </div>
      </div>
    </div>
  );
};

export default OlimpiadeGarisSudutPage;
