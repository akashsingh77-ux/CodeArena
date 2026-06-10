import { useEffect } from "react";

import {
  FaPlay,
  FaCopy,
  FaDownload,
} from "react-icons/fa";

import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

import useEditorStore from "../store/editorStore";

import { executeCode } from "../services/api";

function Navbar() {
  const language = useEditorStore(
    (state) => state.language
  );

  const code = useEditorStore(
    (state) =>
      state.codes[state.language]
  );

  const input = useEditorStore(
    (state) => state.input
  );

  const loading = useEditorStore(
    (state) => state.loading
  );

  const setLoading = useEditorStore(
    (state) => state.setLoading
  );

  const setOutput = useEditorStore(
    (state) => state.setOutput
  );

  const setTime = useEditorStore(
    (state) => state.setTime
  );

  const setMemory = useEditorStore(
    (state) => state.setMemory
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob(
      [code],
      { type: "text/plain" }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "code.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleRun = async () => {
    try {
      setLoading(true);

      setOutput("Running...");

      const result =
        await executeCode({
          source_code: code,
          stdin: input,
          language,
        });

      if (result.stdout) {
        setOutput(result.stdout);
      } else if (result.stderr) {
        setOutput(result.stderr);
      } else if (
        result.compile_output
      ) {
        setOutput(
          result.compile_output
        );
      } else {
        setOutput("No Output");
      }

      setTime(result.time || "");
      setMemory(
        result.memory || ""
      );

      setLoading(false);
    } catch (err) {
      setOutput(
        "Execution Failed"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const handler = (e) => {
      if (
        e.ctrlKey &&
        e.key === "Enter"
      ) {
        handleRun();
      }
    };

    window.addEventListener(
      "keydown",
      handler
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handler
      );
  }, []);

  return (
    <div
      className="
      bg-slate-950
      border-b
      border-slate-800
      px-3
      py-3
      flex
      flex-col
      md:flex-row
      items-center
      justify-between
      gap-3
      "
    >

      <div
        className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-2
        "
      >

        <h1
          className="
          text-white
          text-lg
          md:text-xl
          font-bold
          "
        >
          ⚡ Online Compiler
        </h1>

        <LanguageSelector />
        <ThemeSelector />

      </div>

      <div
        className="
        flex
        flex-wrap
        justify-center
        gap-2
        "
      >

        <button
          onClick={handleCopy}
          className="
          bg-slate-800
          text-white
          px-3
          py-2
          rounded-lg
          hover:bg-slate-700
          "
        >
          <FaCopy />
        </button>

        <button
          onClick={handleDownload}
          className="
          bg-slate-800
          text-white
          px-3
          py-2
          rounded-lg
          hover:bg-slate-700
          "
        >
          <FaDownload />
        </button>

        <button
          onClick={handleRun}
          disabled={loading}
          className="
          bg-green-600
          text-white
          px-4
          py-2
          rounded-lg
          flex
          items-center
          gap-2
          hover:bg-green-500
          disabled:opacity-50
          "
        >
          <FaPlay />

          {loading
            ? "Running..."
            : "Run"}
        </button>

      </div>

    </div>
  );
}

export default Navbar;