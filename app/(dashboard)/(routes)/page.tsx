import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>Hi</p>
      <Button variant="destructive">Click Me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
