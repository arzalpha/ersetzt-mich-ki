export interface ScoreResult {
  routine: number
  rule_based: number
  creativity: number
  human: number
  physical: number
  score: number
  horizon: 'niedrig' | 'mittel' | 'hoch'
  reasons: string[]
  what_to_do: string[]
}

export interface ScoreRequest {
  job: string
  tasks?: string
}
