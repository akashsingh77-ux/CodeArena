import useEditorStore from "../store/editorStore";

function LanguageSelector() {
  const language = useEditorStore(
    (state) => state.language
  );

  const setLanguage = useEditorStore(
    (state) => state.setLanguage
  );

  return (
    <select
      value={language}
      onChange={(e) =>
        setLanguage(e.target.value)
      }
      className="bg-slate-800 text-white px-3 py-2 rounded-lg"
    >
      <option value="cpp">C++</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="javascript">JavaScript</option>
    </select>
  );
}

export default LanguageSelector;