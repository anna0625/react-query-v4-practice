import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/Planets";
import { People } from "./components/People";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// remove nested ternary operators
function RenderPage({ page }) {
  if (page === "planets") return <Planets />;
  if (page === "people") return <People />;
}

function App() {
  const [page, setPage] = useState("planets");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto h-screen w-full">
        <div className="flex items-center justify-center">
          <h1 className="text-5xl text-center m-5 p-5">Start Wars Info</h1>
          <div className="flex flex-row items-center justify-center m-3">
            <Navbar setPage={setPage} />
          </div>
        </div>
        <div className="container m-5 p-5 flex flex-col justify-center items-center">
          {/* {page === "planets" ? <Planets /> : <People />} */}
          <RenderPage page={page} />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
