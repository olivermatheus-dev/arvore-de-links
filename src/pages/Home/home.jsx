import profileImg from "../../assets/images/profile.jpg";
import { IconsSection } from "./components/IconsSection";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

export function Home() {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-200 dark:bg-zinc-700 h-screen  transition-all">
      <div className="flex flex-col justify-center items-center gap-3 w-11/12 h-11/12">
        <div className="flex justify-end w-full">
          <ToggleThemeButton />
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src={profileImg} className="rounded-full w-28 h-28" />
          <h1 className="font-semibold dark:text-zinc-100 transition-all">
            Oliver Matheus
          </h1>
          <h2 className="text-sm dark:text-zinc-100 transition-all">
            Full Stack Developer
          </h2>
        </div>
        <div>
          <IconsSection />
        </div>
        <div className="w-56 h-[1px] bg-zinc-800 rounded-full dark:bg-zinc-100" />
        <div className="flex flex-col gap-3 items-center">
          <button className="h-10 w-64 bg-neutral-800 rounded-md shadow-md shadow-neutral-500 dark:shadow-neutral-800 font-normal text-sm text-zinc-100 transition-all">
            Projects
          </button>
          <button className="h-10 w-64 bg-sky-600 rounded-md shadow-md shadow-neutral-500 dark:shadow-neutral-800 font-normal text-sm text-zinc-100 transition-all">
            Linkedin
          </button>
          <button className="h-10 w-64 bg-red-500 rounded-md shadow-md shadow-neutral-500 dark:shadow-neutral-800 font-normal text-sm text-zinc-800 transition-all">
            GitHub
          </button>
        </div>
      </div>
      <footer className="text-xs mb-5">Oliver Matheus - 2023</footer>
    </div>
  );
}
