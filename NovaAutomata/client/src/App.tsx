import { Switch, Route, Router, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import ScrollToTop from "@/components/common/ScrollToTop";
import PageTransition from "@/components/common/PageTransition";

import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Projects from "@/pages/Projects"; // Add this import

function AppRouter() {
  const [location] = useLocation();
  console.log("Current location:", location);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full">
        <ErrorBoundary>
          <Router>
            <PageTransition>
              <Switch>
                <Route path="/">
                  {() => {
                    console.log("Rendering Home");
                    return <Home />;
                  }}
                </Route>
                <Route path="/about">
                  {() => {
                    console.log("Rendering About");
                    return <About />;
                  }}
                </Route>
                <Route path="/solutions">
                  {() => {
                    console.log("Rendering Solutions");
                    return <Solutions />;
                  }}
                </Route>
                <Route path="/team">
                  {() => {
                    console.log("Rendering Team");
                    return <Team />;
                  }}
                </Route>
                <Route path="/contact">
                  {() => {
                    console.log("Rendering Contact");
                    return <Contact />;
                  }}
                </Route>
                <Route path="/projects">
                  {() => {
                    console.log("Rendering Projects");
                    return <Projects />;
                  }}
                </Route>
                <Route>
                  {() => {
                    console.log("Rendering NotFound");
                    return <NotFound />;
                  }}
                </Route>
              </Switch>
            </PageTransition>
          </Router>
        </ErrorBoundary>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AppRouter />
        <Toaster />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;