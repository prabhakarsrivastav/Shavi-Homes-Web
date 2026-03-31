import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import WhyUsPage from "./pages/WhyUsPage.tsx";
import ProcessPage from "./pages/ProcessPage.tsx";

import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import LoginPage from "./pages/admin/LoginPage.tsx";
import DashboardPage from "./pages/admin/DashboardPage.tsx";
import LeadsPage from "./pages/admin/LeadsPage.tsx";
import ProfilePage from "./pages/admin/ProfilePage.tsx";
import AdminTestimonialsPage from "./pages/admin/TestimonialsPage.tsx";
import AdminAuth from "./pages/admin/AdminAuth.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route 
            path="/admin" 
            element={
              <AdminAuth>
                <DashboardPage />
              </AdminAuth>
            } 
          />
          <Route 
            path="/admin/leads" 
            element={
              <AdminAuth>
                <LeadsPage />
              </AdminAuth>
            } 
          />
          <Route 
            path="/admin/testimonials" 
            element={
              <AdminAuth>
                <AdminTestimonialsPage />
              </AdminAuth>
            } 
          />
          <Route 
            path="/admin/profile" 
            element={
              <AdminAuth>
                <ProfilePage />
              </AdminAuth>
            } 
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
