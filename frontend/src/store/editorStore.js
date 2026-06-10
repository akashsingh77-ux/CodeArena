import { create } from "zustand";

const templates = {
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World";
    return 0;
}`,

  python: `print("Hello World")`,

  javascript: `console.log("Hello World");`,

  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
};

const savedCodes =
  JSON.parse(
    localStorage.getItem("savedCodes")
  ) || templates;

const useEditorStore = create((set) => ({
  language: "cpp",

  theme: "vs-dark",

  codes: savedCodes,

  input: "",

  output: "",

  loading: false,

  time: "",

  memory: "",

  setLanguage: (language) =>
    set({ language }),

  setTheme: (theme) =>
    set({ theme }),

  setLoading: (loading) =>
    set({ loading }),

  setTime: (time) =>
    set({ time }),

  setMemory: (memory) =>
    set({ memory }),

  setCode: (code) =>
    set((state) => {
      const updatedCodes = {
        ...state.codes,
        [state.language]: code,
      };

      localStorage.setItem(
        "savedCodes",
        JSON.stringify(updatedCodes)
      );

      return {
        codes: updatedCodes,
      };
    }),

  setInput: (input) =>
    set({ input }),

  setOutput: (output) =>
    set({ output }),
}));

export default useEditorStore;