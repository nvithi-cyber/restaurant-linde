/*
 * Design Reminder — Editorial Hospitality Modernism
 * Warme Naturtöne, grosszügiger Weissraum, elegante Serif-Headlines,
 * ruhige Premium-Typografie und versetzte Bild-Text-Kompositionen.
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import BistroPage from "./pages/BistroPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import LoungeWineRoomPage from "./pages/LoungeWineRoomPage";
import ReservationPage from "./pages/ReservationPage";
import SaeaeliPage from "./pages/SaeaeliPage";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bistro" component={BistroPage} />
      <Route path="/saeaeli" component={SaeaeliPage} />
      <Route path="/lounge-wine-room" component={LoungeWineRoomPage} />
      <Route path="/reservation" component={ReservationPage} />
      <Route path="/kontakt" component={ContactPage} />
      <Route path="/impressum-datenschutz" component={LegalPage} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router hook={useHashLocation}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
