import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button>Hello</Button>
    <ModeToggle></ModeToggle>
    </main>
  );
}
