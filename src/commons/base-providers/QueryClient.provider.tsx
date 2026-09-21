import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export type TanstackQueryClientProviderProps = {
  children?: React.ReactNode;
};

const queryClient = new QueryClient();

function TanstackQueryClientProvider(props: TanstackQueryClientProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default TanstackQueryClientProvider;