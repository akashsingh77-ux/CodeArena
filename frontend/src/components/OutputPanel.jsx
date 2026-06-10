import useEditorStore from "../store/editorStore";

function OutputPanel() {
  const output = useEditorStore(
    (state) => state.output
  );

  return (
    <div className="w-full h-full bg-black text-green-400 p-4 overflow-auto">
      <pre>{output}</pre>
    </div>
  );
}

export default OutputPanel;