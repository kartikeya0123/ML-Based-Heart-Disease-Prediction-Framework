import { Logo } from "@/components/Logo";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { GlassCard } from "@/components/GlassCard";
import { HeartVisual } from "@/components/HeartVisual";
import { Brain, ShieldCheck, TrendingUp, FileText, Sparkles, ArrowRight, Activity, BarChart3, Lightbulb } from "lucide-react";

interface HomePageProps {
  onStart: () => void;
}

export function HomePage({ onStart }: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundOrbs />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 md:px-12 py-6 flex items-center justify-between">
          <Logo size="md" />
          <button onClick={onStart} className="btn-ghost px-5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2">
            Start Assessment <ArrowRight className="w-4 h-4" />
          </button>
        </header>

        {/* Hero */}
        <section className="px-6 md:px-12 pt-8 md:pt-16 pb-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle mb-6">
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span className="text-xs font-medium text-slate-600">Explainable AI · Interactive · Visual</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Cardiovascular <span className="gradient-text">Intelligence</span>
                <br />
                Reimagined
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl">
                Understand how patient health characteristics influence an AI-based
                cardiovascular risk estimate. Predict, explain, visualize, and explore —
                all in one intelligent framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onStart}
                  className="btn-primary px-8 py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Begin Assessment
                </button>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  { icon: <Activity className="w-4 h-4" />, label: "Real-time Prediction" },
                  { icon: <Brain className="w-4 h-4" />, label: "Explainable AI" },
                  { icon: <TrendingUp className="w-4 h-4" />, label: "What-If Analysis" },
                  { icon: <FileText className="w-4 h-4" />, label: "Report Generation" },
                ].map((pill, i) => (
                  <div key={i} className="flex items-center gap-2 glass-subtle rounded-full px-4 py-2 fade-in-up" style={{ animationDelay: `${0.3 + i * 0.1}s`, opacity: 0 }}>
                    <span className="text-sky-500">{pill.icon}</span>
                    <span className="text-xs font-medium text-slate-600">{pill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Heart Visual */}
            <div className="fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <HeartVisual />
            </div>
          </div>
        </section>

        {/* Five Principles */}
        <section className="px-6 md:px-12 pb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-2">
            The CardioSense AI Experience
          </h2>
          <p className="text-center text-slate-400 mb-12">Five principles guiding every assessment</p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: <Brain className="w-6 h-6 text-white" />, title: "Predict", desc: "ML-based risk estimation from structured patient data", bg: "gradient-bg" },
              { icon: <Lightbulb className="w-6 h-6 text-white" />, title: "Explain", desc: "SHAP-style feature attribution for every prediction", bg: "bg-gradient-to-br from-amber-400 to-orange-500" },
              { icon: <BarChart3 className="w-6 h-6 text-white" />, title: "Visualize", desc: "Transform numerical output into intuitive intelligence", bg: "bg-gradient-to-br from-teal-400 to-teal-600" },
              { icon: <TrendingUp className="w-6 h-6 text-white" />, title: "Explore", desc: "Interactive what-if simulation and counterfactual reasoning", bg: "bg-gradient-to-br from-sky-400 to-sky-600" },
              { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: "Understand", desc: "Clear, responsible, human-readable assessment report", bg: "bg-gradient-to-br from-violet-400 to-purple-500" },
            ].map((item, i) => (
              <GlassCard key={i} className="p-6 text-center fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto">
          <GlassCard subtle className="p-6 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-teal-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-slate-700 mb-1 text-sm">Medical Disclaimer</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                CardioSense AI is an academic research project demonstrating machine learning,
                explainable AI, and visualization. It is not a medical diagnostic device.
                Model predictions are estimates, not definitive diagnoses. Any medical decisions
                should be made by qualified healthcare professionals.
              </p>
            </div>
          </GlassCard>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
          <div className="glass rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Logo size="sm" />
            <p className="text-xs text-slate-400">
              CardioSense AI — Predict. Explain. Visualize. Explore. Understand.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
