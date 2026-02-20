import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import LandingAlt from "./pages/LandingAlt";
import Work from "./pages/Work";
import Thinking from "./pages/Thinking";
import HowICanHelp from "./pages/HowICanHelp";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingAlt />} />
          <Route path="/original" element={<Landing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/how-i-can-help" element={<HowICanHelp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
