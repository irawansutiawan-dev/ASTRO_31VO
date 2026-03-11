import Starfield from "@/components/Starfield";
import PageNavigation from "@/components/PageNavigation";
import { BookOpen, ChevronRight, Lightbulb, AlertCircle, Calculator, ArrowRightLeft, Repeat } from "lucide-react";
import { playPopSound } from "@/hooks/useAudio";
import { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const BentukDesimalPage = () => {
  console.log("[v0] BentukDesimalPage rendered");
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    playPopSound();
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center gradient-space overflow-hidden">
      <Starfield />
      <PageNavigation />
      <div className="relative z-10 max-w-4xl w-full px-4 py-10">
        <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
        <h1 className="font-display text-xl md:text-2xl font-bold text-primary text-glow-cyan mb-2 text-center">
          BENTUK DESIMAL
        </h1>
        <p className="text-white/50 text-xs text-center mb-8 font-body">Kelas 7 - Bilangan Rasional</p>

        {/* Sub-bab 1: Memahami Bilangan Desimal */}
        <div className="mb-6 animate-slide-up">
          <button
            onClick={() => toggleSection(0)}
            className="w-full group flex items-center gap-4 bg-card/90 backdrop-blur border border-border rounded-xl px-5 py-4 hover:border-primary/60 transition-all duration-300 cursor-pointer text-left"
          >
            <Calculator className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="font-body text-base text-white font-semibold">Memahami Bilangan Desimal</span>
            <ChevronRight className={`w-4 h-4 text-primary ml-auto transition-transform ${activeSection === 0 ? "rotate-90" : ""}`} />
          </button>
          
          {activeSection === 0 && (
            <div className="mt-3 bg-card/70 backdrop-blur border border-border rounded-xl px-5 py-6 space-y-5 animate-slide-up">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg p-4">
                <h3 className="text-cyan-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Ringkasan Intisari
                </h3>
                <p className="text-white/90 text-sm font-body leading-relaxed">
                  <strong>Bilangan desimal</strong> adalah cara penulisan angka menggunakan tanda koma untuk memisahkan bagian bulat dan bagian pecahan. Setiap posisi angka di belakang koma punya nilai tempat: persepuluhan, perseratusan, dan perseribu.
                </p>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="text-yellow-300 font-semibold text-sm mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Tips Penting
                </h4>
                <ul className="text-white/80 text-sm font-body space-y-1 list-disc list-inside">
                  <li>1 angka di belakang koma = persepuluhan (penyebut 10)</li>
                  <li>2 angka di belakang koma = perseratusan (penyebut 100)</li>
                  <li>3 angka di belakang koma = perseribu (penyebut 1000)</li>
                </ul>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">MUDAH</span>
                  <span className="text-green-300 font-semibold text-sm">Contoh Soal 1</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Nyatakan bilangan desimal 4,67 sebagai pecahan campuran!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Pisahkan bagian bulat dan desimal</p>
                    <div className="pl-4">Bagian bulat = 4, bagian desimal = 0,67</div>
                    <p><strong>Langkah 2:</strong> Ubah bagian desimal ke pecahan</p>
                    <div className="pl-4">0,67 memiliki 2 angka di belakang koma, penyebut = 100</div>
                    <div className="pl-4"><InlineMath math="4,67 = 4\frac{67}{100}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="4\frac{67}{100}" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">SEDANG</span>
                  <span className="text-yellow-300 font-semibold text-sm">Contoh Soal 2</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Nyatakan bilangan 0,000289 sebagai pecahan biasa!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Hitung angka di belakang koma = 6 angka</p>
                    <p><strong>Langkah 2:</strong> Penyebut = 1000000</p>
                    <div className="pl-4"><InlineMath math="0,000289 = \frac{289}{1000000}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="\frac{289}{1000000}" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">SULIT</span>
                  <span className="text-red-300 font-semibold text-sm">Contoh Soal 3</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Bilangan 12,345 dapat ditulis sebagai pecahan campuran. Tentukan bentuk sederhananya!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Pisahkan: bulat = 12, desimal = 0,345</p>
                    <p><strong>Langkah 2:</strong> Ubah 0,345 menjadi pecahan</p>
                    <div className="pl-4"><InlineMath math="0,345 = \frac{345}{1000}" /></div>
                    <p><strong>Langkah 3:</strong> Sederhanakan dengan FPB = 5</p>
                    <div className="pl-4"><InlineMath math="\frac{345}{1000} = \frac{69}{200}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="12\frac{69}{200}" /></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sub-bab 2: Mengubah Pecahan ke Desimal */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <button
            onClick={() => toggleSection(1)}
            className="w-full group flex items-center gap-4 bg-card/90 backdrop-blur border border-border rounded-xl px-5 py-4 hover:border-primary/60 transition-all duration-300 cursor-pointer text-left"
          >
            <ArrowRightLeft className="w-5 h-5 text-green-400 shrink-0" />
            <span className="font-body text-base text-white font-semibold">Mengubah Pecahan ke Desimal</span>
            <ChevronRight className={`w-4 h-4 text-primary ml-auto transition-transform ${activeSection === 1 ? "rotate-90" : ""}`} />
          </button>
          
          {activeSection === 1 && (
            <div className="mt-3 bg-card/70 backdrop-blur border border-border rounded-xl px-5 py-6 space-y-5 animate-slide-up">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-green-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Ringkasan Intisari
                </h3>
                <p className="text-white/90 text-sm font-body leading-relaxed">
                  Ada dua cara mengubah pecahan ke desimal: (1) Ubah penyebut menjadi 10, 100, atau 1000, atau (2) Langsung bagi pembilang dengan penyebut. Kadang hasilnya adalah <strong>desimal berulang</strong>.
                </p>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold text-sm mb-3">Dua Metode Konversi:</h4>
                <div className="bg-black/30 rounded-lg p-4 space-y-3">
                  <p className="text-white/80 text-sm"><strong className="text-cyan-300">Metode 1:</strong> Ubah penyebut</p>
                  <BlockMath math="\frac{3}{5} = \frac{6}{10} = 0,6" />
                  <p className="text-white/80 text-sm"><strong className="text-cyan-300">Metode 2:</strong> Pembagian langsung</p>
                  <BlockMath math="\frac{5}{13} = 0,3846..." />
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">MUDAH</span>
                  <span className="text-green-300 font-semibold text-sm">Contoh Soal 1</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Nyatakan <InlineMath math="\frac{3}{5}" /> sebagai desimal!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Kalikan penyebut 5 dengan 2 agar menjadi 10</p>
                    <div className="pl-4"><InlineMath math="\frac{3}{5} = \frac{3 \times 2}{5 \times 2} = \frac{6}{10} = 0,6" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> 0,6</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">SEDANG</span>
                  <span className="text-yellow-300 font-semibold text-sm">Contoh Soal 2</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Nyatakan <InlineMath math="\frac{4}{125}" /> sebagai desimal!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> 125 x 8 = 1000</p>
                    <div className="pl-4"><InlineMath math="\frac{4}{125} = \frac{32}{1000} = 0,032" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> 0,032</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">SULIT</span>
                  <span className="text-red-300 font-semibold text-sm">Contoh Soal 3</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Nyatakan <InlineMath math="\frac{7}{11}" /> sebagai desimal sampai 4 tempat!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Karena 11 tidak bisa diubah, gunakan pembagian</p>
                    <div className="pl-4"><InlineMath math="7 \div 11 = 0,6363..." /></div>
                    <p className="text-yellow-300 text-xs">Ini adalah desimal berulang dengan pola 63</p>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> 0,6363</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sub-bab 3: Mengubah Desimal ke Pecahan */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={() => toggleSection(2)}
            className="w-full group flex items-center gap-4 bg-card/90 backdrop-blur border border-border rounded-xl px-5 py-4 hover:border-primary/60 transition-all duration-300 cursor-pointer text-left"
          >
            <Repeat className="w-5 h-5 text-purple-400 shrink-0" />
            <span className="font-body text-base text-white font-semibold">Mengubah Desimal ke Pecahan</span>
            <ChevronRight className={`w-4 h-4 text-primary ml-auto transition-transform ${activeSection === 2 ? "rotate-90" : ""}`} />
          </button>
          
          {activeSection === 2 && (
            <div className="mt-3 bg-card/70 backdrop-blur border border-border rounded-xl px-5 py-6 space-y-5 animate-slide-up">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4">
                <h3 className="text-purple-400 font-semibold text-sm mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" /> Ringkasan Intisari
                </h3>
                <p className="text-white/90 text-sm font-body leading-relaxed">
                  Hitung jumlah angka di belakang koma untuk menentukan penyebut (10, 100, 1000). Angka di belakang koma menjadi pembilang. Jangan lupa sederhanakan!
                </p>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-300 font-semibold text-sm mb-3">Aturan Penyebut:</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>1 angka = penyebut <strong className="text-cyan-300">10</strong></li>
                  <li>2 angka = penyebut <strong className="text-cyan-300">100</strong></li>
                  <li>3 angka = penyebut <strong className="text-cyan-300">1000</strong></li>
                </ul>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">MUDAH</span>
                  <span className="text-green-300 font-semibold text-sm">Contoh Soal 1</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Ubah 0,75 menjadi pecahan biasa!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Ada 2 angka, penyebut = 100</p>
                    <div className="pl-4"><InlineMath math="0,75 = \frac{75}{100}" /></div>
                    <p><strong>Langkah 2:</strong> Sederhanakan</p>
                    <div className="pl-4"><InlineMath math="\frac{75}{100} = \frac{3}{4}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="\frac{3}{4}" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold">SEDANG</span>
                  <span className="text-yellow-300 font-semibold text-sm">Contoh Soal 2</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Ubah 0,125 menjadi pecahan paling sederhana!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Ada 3 angka, penyebut = 1000</p>
                    <div className="pl-4"><InlineMath math="0,125 = \frac{125}{1000}" /></div>
                    <p><strong>Langkah 2:</strong> Sederhanakan dengan FPB = 125</p>
                    <div className="pl-4"><InlineMath math="\frac{125}{1000} = \frac{1}{8}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="\frac{1}{8}" /></p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">SULIT</span>
                  <span className="text-red-300 font-semibold text-sm">Contoh Soal 3</span>
                </div>
                <p className="text-white/90 text-sm font-body mb-4">Ubah 2,375 menjadi pecahan campuran paling sederhana!</p>
                <div className="bg-black/30 rounded-lg p-4">
                  <h5 className="text-cyan-300 text-sm font-semibold mb-2">Pembahasan:</h5>
                  <div className="text-white/80 text-sm font-body space-y-2">
                    <p><strong>Langkah 1:</strong> Bagian bulat = 2, desimal = 0,375</p>
                    <p><strong>Langkah 2:</strong> Ubah 0,375 ke pecahan</p>
                    <div className="pl-4"><InlineMath math="0,375 = \frac{375}{1000}" /></div>
                    <p><strong>Langkah 3:</strong> Sederhanakan dengan FPB = 125</p>
                    <div className="pl-4"><InlineMath math="\frac{375}{1000} = \frac{3}{8}" /></div>
                    <p className="text-cyan-300 mt-2"><strong>Jawaban:</strong> <InlineMath math="2\frac{3}{8}" /></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentukDesimalPage;
