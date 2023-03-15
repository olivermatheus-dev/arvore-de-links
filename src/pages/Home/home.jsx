import profileImg from "../../assets/images/profile.jpg";
import { IconsSection } from "./components/IconsSection";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 dark:bg-zinc-700 ">
      <div>
        <ToggleThemeButton />
      </div>
      <div className="flex flex-col items-center gap-1">
        <img src={profileImg} className="rounded-full w-28 h-28" />
        <h1 className="font-semibold">Oliver Matheus</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div>
        <IconsSection />
      </div>
      <div className="w-52 h-[1px] bg-zinc-800 rounded-full" />
    </div>
  );
}
