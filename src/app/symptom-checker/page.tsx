"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const symptomsList = [
    "Fever",
    "Cough",
    "Headache",
    "Sore Throat",
    "Runny Nose",
    "Fatigue",
    "Nausea",
    "Chest Pain",
    "Shortness of Breath",
  ];

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((item) => item !== symptom)
        : [...prev, symptom]
    );
  };
  interface FormEvent {
    preventDefault: () => void;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom.");
      return;
    }

    setLoading(true);
    setResponse(null);

    // Simulate an AI-powered response
    setTimeout(() => {
      setLoading(false);
      setResponse(
        `Based on the symptoms you selected (${selectedSymptoms.join(
          ", "
        )}), you may have a mild viral infection. Please consult a doctor for an accurate diagnosis.`
      );
    }, 1500);
  };

  return (
    <div className="bg-background text-foreground min-h-screen p-6">
      <div className="container mx-auto max-w-3xl bg-card p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          Symptom Checker
        </h1>
        <p className="text-card-foreground mb-8 text-center">
          Select your symptoms below, and our AI-powered system will provide an
          initial assessment.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-4">
              Select Your Symptoms
            </label>
            <div className="grid grid-cols-2 gap-4">
              {symptomsList.map((symptom) => (
                <div key={symptom} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={symptom}
                    name="symptoms"
                    value={symptom}
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => toggleSymptom(symptom)}
                    className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor={symptom}
                    className="text-card-foreground cursor-pointer"
                  >
                    {symptom}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-80"
          >
            {loading ? "Checking..." : "Submit Symptoms"}
          </button>
        </form>
        {response && (
          <div className="mt-8 p-4 bg-green-100 text-green-800 rounded-lg">
            <p className="font-semibold">AI Response:</p>
            <p>{response}</p>
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                Consult a doctor for an accurate diagnosis.
              </p>
              <button
                onClick={() => router.push("/doctors")}
                className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-opacity-80"
              >
                View Doctors List
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
