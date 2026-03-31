import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/services/ServicePage";
import ProgramsPage from "./pages/programs/ProgramsPage";
import EquipmentPage from "./pages/equipment/EquipmentPage";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/admin/Dashboard";
import EquipmentForm from "./pages/admin/EquipmentForm";
import WorkshopForm from "./pages/admin/WorkshopForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          {/* Admin CMS routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/equipment" element={<EquipmentForm />} />
          <Route path="/admin/workshop" element={<WorkshopForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;