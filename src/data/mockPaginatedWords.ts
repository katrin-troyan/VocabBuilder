import { mockOwnWords } from "./mockOwnWords";

export function getMockWordsPage(page: number, limit: number = 4) {
  const start = (page - 1) * limit;
  const end = start + limit;

  const sliced = mockOwnWords.results.slice(start, end);

  return {
    page,
    totalPages: Math.ceil(mockOwnWords.results.length / limit),
    results: sliced,
  };
}
