import Link from "next/link";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <HeaderNav />
      <main className="flex-1 flex items-center justify-center py-32 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta-100 text-terracotta-600 font-heading font-extrabold text-2xl">
            404
          </div>
          <h1 className="font-heading font-bold text-3xl text-charcoal-900">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for does not exist or may have been moved.
          </p>
          <div>
            <Link href="/">
              <Button variant="primary" size="md" leftIcon={<ArrowLeft className="h-4 w-4" />}>
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
