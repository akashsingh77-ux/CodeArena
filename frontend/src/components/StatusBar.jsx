import useEditorStore from "../store/editorStore";

function StatusBar() {
  const language = useEditorStore(
    (state) => state.language
  );

  const time = useEditorStore(
    (state) => state.time
  );

  const memory = useEditorStore(
    (state) => state.memory
  );

  return (
   <div
  className="
  min-h-8
  bg-slate-900
  border-t
  border-slate-800
  text-gray-300
  px-4
  py-1
  flex
  flex-wrap
  items-center
  gap-3
  text-xs
  "
>
      <span>
        Language: {language}
      </span>

      <span>
        Time: {time || "--"}
      </span>

      <span>
        Memory: {memory || "--"}
      </span>
    </div>
  );
}

export default StatusBar;