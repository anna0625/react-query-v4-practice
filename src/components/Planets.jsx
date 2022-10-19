import React, { useState, useEffect, useRef } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Planet } from "./Planet";

const fetchPlanets = async (page) => {
  console.log(page);
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

export const Planets = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageRef = useRef(1);

  // query
  const { data, status, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      staleTime: 0,
      onSuccess: () => {
        console.log("data fetched successfully");
      },
      keepPreviousData: true,
    }
  );

  // Prefetch the next page!
  useEffect(() => {
    queryClient.prefetchQuery(["planets", page + 1], () =>
      fetchPlanets(page + 1)
    );
    pageRef.current = page + 1;
    if (pageRef.current === 7) {
      setHasMore(false);
    }
  }, [page, queryClient]);

  return (
    <div>
      <h2 className="text-xl text-center m-5 font-bold">Planets</h2>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={page === 1}
              className="m-3 py-2 px-4 text-xl bg-slate-400 text-white rounded-md"
            >
              Prev
            </button>

            <span className="mx-3">{page}</span>
            <button
              onClick={() => setPage((prev) => (hasMore ? prev + 1 : prev))}
              disabled={!hasMore}
              className="m-3 py-2 px-4 text-xl bg-slate-400 text-white rounded-md"
            >
              Next
            </button>
          </div>
          <div>
            {data?.results.map((planet, idx) => (
              <Planet planet={planet} key={idx} id={idx} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// References:
// https://tanstack.com/query/v4/docs/examples/react/pagination
// https://swapi.dev/documentation
