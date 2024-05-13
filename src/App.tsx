import "./App.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./library/QueryClient";
import { Customers } from "./pages/Customers";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./library/theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Customers />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
