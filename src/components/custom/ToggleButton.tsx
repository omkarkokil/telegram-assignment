import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";
import { Button } from "../ui/button";

const ToggleButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
      variant="ghost"
      size="icon"
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ToggleButton;
