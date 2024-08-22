"use client"
import Header from "@/components/header"
import ExerciseCard from "@/components/ui/exerciseCard";
import TextContainer from "@/components/ui/textContainer";
import Controls from "@/components/ui/controls";

export default function Home() {
  return (
    <main className="flex h-screen flex-col">
      <Header/>
      <ExerciseCard/>
      <TextContainer/>
      <Controls/>
    </main>
  );
}
