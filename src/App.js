import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./Components/Header";
import Watch from "./Components/Watch";
import Body from "./Pages/Body";
import MainCtn from "./Components/MainCtn";
import Results from "./Components/Results";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainCtn />,
      },
      {
        path: "/watch",
        element: <Watch />,
      },
      {
        path: "/results/",
        element: <Results />,
      },
    ],
  },
]);
function App() {
  // createBrowserRouter

  return (
    <div className="bg-[#0f0f0f]  h-screen w-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
