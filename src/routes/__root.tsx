import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This route drifted off into latent space.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">Something misfired</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

const themeInit = `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='light'){d.classList.add('light');d.classList.remove('dark');}else{d.classList.add('dark');d.classList.remove('light');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Saurabh Kumar Mohanka | AI Engineer | Computer Vision Engineer" },
      { name: "description", content: "Portfolio of Saurabh Kumar Mohanka showcasing production-grade AI systems in Computer Vision, Deep Learning, YOLO, Multi-Object Tracking, Real-Time Analytics and Machine Learning." },
      { name: "author", content: "Saurabh Kumar Mohanka" },
      { name: "keywords", content: "AI Engineer, Computer Vision, Deep Learning, YOLO, ByteTrack, PyTorch, Machine Learning, Saurabh Kumar Mohanka" },
      { property: "og:title", content: "Saurabh Kumar Mohanka | AI Engineer | Computer Vision Engineer" },
      { property: "og:description", content: "Portfolio of Saurabh Kumar Mohanka showcasing production-grade AI systems in Computer Vision, Deep Learning, YOLO, Multi-Object Tracking, Real-Time Analytics and Machine Learning." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Saurabh Kumar Mohanka" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saurabh Kumar Mohanka | AI Engineer | Computer Vision Engineer" },
      { name: "twitter:description", content: "Portfolio of Saurabh Kumar Mohanka showcasing production-grade AI systems in Computer Vision, Deep Learning, YOLO, Multi-Object Tracking, Real-Time Analytics and Machine Learning." },
      { name: "theme-color", content: "#08090C" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d92d018b-91a8-4850-bf1b-32ff170c58cd/id-preview-ebcf3399--4e79fb80-ee7b-490a-9b1e-fd4ed9daa160.lovable.app-1783969285913.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d92d018b-91a8-4850-bf1b-32ff170c58cd/id-preview-ebcf3399--4e79fb80-ee7b-490a-9b1e-fd4ed9daa160.lovable.app-1783969285913.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      { children: themeInit },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Saurabh Kumar Mohanka",
          jobTitle: "AI Engineer / Computer Vision Engineer",
          email: "mailto:saurabhkrmohanka@gmail.com",
          telephone: "+91-8969254578",
          address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "Maharashtra", addressCountry: "IN" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Lovely Professional University" },
          sameAs: [
            "https://github.com/mohankasaurabh",
            "https://linkedin.com/in/saurabhkumarmohanka",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
