import Navbar from "../components/Navbar";
import CodeEditor from "../components/CodeEditor";
import InputPanel from "../components/InputPanel";
import OutputPanel from "../components/OutputPanel";

function Home() {
  return (
    <div className="h-screen bg-slate-950 flex flex-col">

      <Navbar />

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Editor */}

        <div
          className="
          w-full
          md:w-[70%]
          h-[50vh]
          md:h-full
          border-b
          md:border-b-0
          md:border-r
          border-slate-800
          "
        >
          <CodeEditor />
        </div>

        {/* Input + Output */}

        <div
          className="
          w-full
          md:w-[30%]
          h-[50vh]
          md:h-full
          flex
          flex-col
          "
        >

          {/* Input */}

          <div
            className="
            h-[35%]
            border-b
            border-slate-800
            "
          >
            <div
              className="
              h-10
              bg-slate-900
              text-white
              px-4
              flex
              items-center
              text-sm
              font-semibold
              "
            >
              INPUT
            </div>

            <div className="h-[calc(100%-40px)]">
              <InputPanel />
            </div>
          </div>

          {/* Output */}

          <div className="h-[65%]">
            <div
              className="
              h-10
              bg-slate-900
              text-white
              px-4
              flex
              items-center
              text-sm
              font-semibold
              "
            >
              OUTPUT
            </div>

            <div className="h-[calc(100%-40px)]">
              <OutputPanel />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;