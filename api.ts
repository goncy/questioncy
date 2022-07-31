import {Question} from "./types";

const api = {
  question: {
    list: async (): Promise<Question[]> => fetch(`/api/questions`).then((res) => res.json()),
    create: async (question: string): Promise<Question[]> =>
      fetch(`/api/questions`, {
        method: "POST",
        body: JSON.stringify({
          question,
        }),
      }).then((res) => res.json()),
  },
};

export default api;
