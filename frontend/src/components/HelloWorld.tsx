import { Sparkles } from 'lucide-react';

export function HelloWorld() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 px-4 text-center">
      <div className="relative">
        <div className="absolute -inset-4 animate-pulse rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
        <div className="relative flex items-center gap-3">
          <Sparkles className="h-10 w-10 text-primary md:h-12 md:w-12" />
          <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
            Hello, World!
          </h1>
          <Sparkles className="h-10 w-10 text-primary md:h-12 md:w-12" />
        </div>
      </div>
      <p className="max-w-md text-lg text-muted-foreground sm:text-xl">
        Welcome to your first application on the Internet Computer
      </p>
    </div>
  );
}
