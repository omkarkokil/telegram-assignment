import { Moon, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";
import { Button } from "../ui/button";

const ToggleButton = () => {
  const { setTheme, theme } = useTheme();
  console.log(`🚀 ~ file: ToggleButton.tsx:8 ~ theme:`, theme);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <Button
        onClick={() => {
          if (theme === "dark") {
            ref.current?.classList.add(
              "!scale-[150]",
              "!bg-white",
              "!opacity-[0.7]"
            );
          } else {
            ref.current?.classList.add(
              "!scale-[150]",
              "!bg-black",
              "!opacity-[0.7]"
            );
          }
          setTimeout(() => {
            setTheme(theme === "light" ? "dark" : "light");
            ref.current?.classList.remove(
              "!scale-[150]",
              "!bg-white",
              "!bg-black",
              "!opacity-[0.7]"
            );
          }, 1000);
        }}
        variant="ghost"
        size="icon"
      >
        <div
          ref={ref}
          className={`absolute h-[30px] w-[30px] rounded-full z-20 transition-all duration-1000`}
        ></div>

        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export default ToggleButton;
