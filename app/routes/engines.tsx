import { useMemo } from "react";
import type { EngineCardProps } from "~/components/EngineCard";
import EngineCard from "~/components/EngineCard";

export default function EnginesPage() {
  const engines: (EngineCardProps & {
    id: number;
  })[] = useMemo(
    () => [
      {
        id: 1,
        provider: "OPENAI",
        name: "OpenAI ChatGPT",
        model: "gpt-3.5-turbo",
      },
      {
        id: 2,
        provider: "AZURE",
        name: "Azure",
        model: "Azure R&D GPT-3.5",
      },
    ],
    []
  );

  return (
    <main className="container mx-auto rounded-lg h-full p-4 pb-0 sm:p-8 sm:pb-0 max-w-full sm:max-w-auto">
      Choose a model to start chatting with:
      <div className="w-4/5 grid grid-flow-col gap-4">
        {engines.map((engine) => (
          <EngineCard key={engine.id} {...engine} />
        ))}
      </div>
    </main>
  );
}
