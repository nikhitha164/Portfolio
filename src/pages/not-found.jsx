import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold mb-3">This page doesn't exist</h1>
        <p className="text-muted-foreground mb-8">
          The link may be broken or the page may have moved. You can head back to the portfolio.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </a>
      </div>
    </main>
  );
}
