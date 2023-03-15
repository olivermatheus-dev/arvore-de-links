import htmlIcon from "../../../../assets/icons/html5.svg";
import csslIcon from "../../../../assets/icons/css3.svg";
import javascriptIcon from "../../../../assets/icons/javascript.svg";
import tailwindIcon from "../../../../assets/icons/tailwind.svg";

export function IconsSection() {
  return (
    <div className="flex gap-2">
      <img
        src={htmlIcon}
        className="w-7 shadow-md hover:scale-105 transition-all"
      />
      <img
        src={csslIcon}
        className="w-7 shadow-md hover:scale-105 transition-all"
      />
      <img
        src={javascriptIcon}
        className="w-7 shadow-md hover:scale-105 transition-all"
      />
      <img
        src={tailwindIcon}
        className="w-7 shadow-md hover:scale-105 transition-all "
      />
    </div>
  );
}
