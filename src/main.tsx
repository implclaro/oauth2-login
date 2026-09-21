import ErrorBoundaryPage from "./app/errors/pages/ErrorBoundaryPage.page.tsx";
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css"
import App from "./App.tsx"
import TanstackQueryClientProvider from "./commons/base-providers/QueryClient.provider.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" />
    <BrowserRouter>
        <ErrorBoundary fallbackRender={ErrorBoundaryPage}>
          <TanstackQueryClientProvider>
            <App />
          </TanstackQueryClientProvider>
        </ErrorBoundary>
    </BrowserRouter>,
  </StrictMode>,
)
