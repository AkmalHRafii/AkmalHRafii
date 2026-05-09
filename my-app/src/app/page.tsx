
import ProfileCard from "./components/profileCard";
import SkillCard from "./components/skillCard";
import EducationCard from "./components/educationCard";
import WorkExpCard from "./components/workExp";
import ProjectCard from "./components/projectCard";




//Create Portofolio website using nextjs and tailwindcss
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ProfileCard />
        <SkillCard />
        <EducationCard />
        <WorkExpCard />
        <ProjectCard />
      </main>
    </div>
  );
}
