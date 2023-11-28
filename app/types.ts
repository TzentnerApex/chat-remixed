import type OpenAI from "openai";

export type Role = "user" | "system" | "assistant";

export type ChatCompletionMessage = Omit<
  OpenAI.Chat.ChatCompletionMessage,
  "role"
> & {
  role: Role;
};
