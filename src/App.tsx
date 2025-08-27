import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Loading animation started');
    
    // Loading timer - minimum 4 seconds for the amazing animation
    const loadingTimer = setTimeout(() => {
      console.log('Starting fade out');
      setFadeOut(true);
      // Additional delay for fade out animation
      setTimeout(() => {
        console.log('Loading complete');
        setIsLoading(false);
      }, 1000);
    }, 4000);

    return () => clearTimeout(loadingTimer);
  }, []);

  console.log('App render - isLoading:', isLoading, 'fadeOut:', fadeOut);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-50 ${fadeOut ? 'loading-fade-exit-active' : 'loading-fade-enter-active'}`}>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
