import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <div className="flex gap-4">
      Hello
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Primary</Button>
      <Button variant={"destructive"}>Primary</Button>
      <Button variant={"ghost"}>Primary</Button>
      <Button variant={"muted"}>Primary</Button>
      <Button variant={"teritary"}>Primary</Button>
    </div>
  );
}
