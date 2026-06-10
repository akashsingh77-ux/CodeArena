import useEditorStore from "../store/editorStore";

function ThemeSelector() {
  const theme = useEditorStore(
    (state) => state.theme
  );

  const setTheme = useEditorStore(
    (state) => state.setTheme
  );

  return (
    <select
      value={theme}
      onChange={(e) =>
        setTheme(e.target.value)
      }
      className="bg-slate-800 text-white px-3 py-2 rounded-lg"
    >
      <option value="vs-dark">
        Dark
      </option>

      <option value="vs-light">
        Light
      </option>
    </select>
  );
}

export default ThemeSelector;