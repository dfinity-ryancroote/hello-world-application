export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
            <span className="text-lg font-bold text-primary-foreground">H</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Hello World</span>
        </div>
      </div>
    </header>
  );
}
