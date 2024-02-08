import { ModeToggle } from "@/components/theme-toggle";
import { robotoMono } from '@/lib/fonts';
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <h1 className={cn("text-2xl font-bold", robotoMono.className)}>Uncut: Get Real. Stay Anonymous.</h1>
      <ModeToggle />
    </div>
  );
}
