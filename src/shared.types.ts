export enum From {
  HUMAN,
  AI
}

export type Origin = From.HUMAN | From.AI

export interface Message {
  origin: Origin
  content: string
}
