export type EngineProvider = "OPENAI" | "AZURE";

function getProviderImageSrc(provider: EngineProvider) {
  switch (provider) {
    case "OPENAI":
      return "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg";
    case "AZURE":
      return "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg";
  }
}

export type EngineCardProps = {
  provider: EngineProvider;
  name: string;
  model: string;
};

export default function EngineCard({ provider, name, model }: EngineCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-16 space-y-4 border border-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center justify-center w-12 h-12 bg-transparent">
        <img src={getProviderImageSrc(provider)} alt="LLM Provider Logo" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="text-3xl font-semibold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{model}</div>
      </div>
    </div>
  );
}
