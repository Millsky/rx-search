import { QueryClientProvider, QueryClient } from "react-query";
import Routes from './Routes';


const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-sans">
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    </div>
  );
}

export default App;
