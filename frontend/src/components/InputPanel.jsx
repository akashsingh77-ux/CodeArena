import useEditorStore from "../store/editorStore";

function InputPanel() {
  const input = useEditorStore(
    (state) => state.input
  );

  const setInput = useEditorStore(
    (state) => state.setInput
  );

  return (
    <textarea
      value={input}
      onChange={(e) =>
        setInput(e.target.value)
      }
      placeholder="Enter Input..."
      className="w-full h-full bg-slate-900 text-white p-4 resize-none outline-none"
    />
  );
}

export default InputPanel;