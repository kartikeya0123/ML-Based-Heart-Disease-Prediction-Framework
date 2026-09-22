import { useState } from "react";
import { ToastProvider } from "@/components/Toast";
import { HomePage } from "@/pages/HomePage";
import { AssessmentPage } from "@/pages/AssessmentPage";
import { ResultsPage } from "@/pages/ResultsPage";
import type { PatientInput, PredictionResult } from "@/types";

type Page = "home" | "assessment" | "results";

function AppContent() {
  const [page, setPage] = useState<Page>("home");
  const [lastInput, setLastInput] = useState<PatientInput | null>(null);
  const [lastResult, setLastResult] = useState<PredictionResult | null>(null);

  const navigate = (target: Page) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  if (page === "home") {
    return <HomePage onStart={() => navigate("assessment")} />;
  }

  if (page === "assessment") {
    return (
      <AssessmentPage
        onBack={() => navigate("home")}
        onComplete={(input, result) => {
          setLastInput(input);
          setLastResult(result);
          navigate("results");
        }}
      />
    );
  }

  if (page === "results" && lastInput && lastResult) {
    return (
      <ResultsPage
        input={lastInput}
        result={lastResult}
        onBack={() => navigate("assessment")}
        onNewAssessment={() => navigate("assessment")}
      />
    );
  }

  return <HomePage onStart={() => navigate("assessment")} />;
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
