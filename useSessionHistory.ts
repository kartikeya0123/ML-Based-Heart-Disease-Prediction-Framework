import { useState, useCallback, useEffect } from "react";
import type { SessionPrediction } from "@/types";

const STORAGE_KEY = "cardiosense_predictions";

export function useSessionHistory() {
  const [predictions, setPredictions] = useState<SessionPrediction[]>([]);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPredictions(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const addPrediction = useCallback((result: SessionPrediction) => {
    setPredictions((prev) => {
      const updated = [result, ...prev].slice(0, 20);
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const clearHistory = useCallback(() => {
    setPredictions([]);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return { predictions, addPrediction, clearHistory };
}
