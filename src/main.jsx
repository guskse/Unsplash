import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";

//react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

//react devtools
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppProvider>
);
