"use client";

import { useState } from "react";

export default function Translate() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleTranslate = () => {
    // Simple mock translation: reverse the string
    setOutput(input.split("").reverse().join(""));
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="text-sm font-medium">Enter text to translate:</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded px-2 py-1"
        placeholder="Type something..."
      />
      <button
        onClick={handleTranslate}
        className="bg-primary text-primary-foreground px-3 py-1 rounded"
      >
        Translate
      </button>
      {output && (
        <div className="mt-2 p-2 bg-muted rounded">
          <strong>Translated:</strong> {output}
        </div>
      )}
    </div>
  );
}
