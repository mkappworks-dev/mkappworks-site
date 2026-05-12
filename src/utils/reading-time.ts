const WORDS_PER_MINUTE = 200;

export function getMinutesRead(body: string | undefined): number {
  const wordCount = body?.trim().split(/\s+/).length ?? 0;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
