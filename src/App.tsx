
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Transparency from "./pages/Transparency";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import News from "./pages/News";
import Programs from "./pages/Programs";
import Directory from "./pages/Directory";
import Support from "./pages/Support";
import ChatAssistant from "./components/transparency/ChatAssistant";

const queryClient = new QueryClient();

const App = () => {
  const [isSeniorMode, setIsSeniorMode] = useState(false);

  // Apply senior mode styles globally
  useEffect(() => {
    if (isSeniorMode) {
      document.body.classList.add('senior-mode');
    } else {
      document.body.classList.remove('senior-mode');
    }
  }, [isSeniorMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className={`min-h-screen ${isSeniorMode ? 'senior-mode' : ''}`}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:categoryId/:serviceId" element={<ServiceDetails />} />
              <Route path="/news" element={<News />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/transparency" element={<Transparency />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/support" element={<Support />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatAssistant isSeniorMode={isSeniorMode} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
