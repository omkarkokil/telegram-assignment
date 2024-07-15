import {
  BookmarkAddOutlined,
  Menu,
  PersonOutline,
  PlayArrowOutlined,
} from "@mui/icons-material";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

export function DropdownMenuCheckboxes() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-white/70 !rounded-lg" // Adjust the opacity as needed
        style={{
          backdropFilter: "blur(10px)",
          position: "absolute", // Ensure it's positioned absolutely within its relative parent
          left: 0,
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <DropdownMenuGroup className="rounded-lg space-y-1">
          <DropdownMenuLabel className="flex gap-4">
            <BookmarkAddOutlined />
            Saved Message
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex gap-4">
            <PersonOutline />
            Contacts
          </DropdownMenuLabel>
          <DropdownMenuLabel className="flex gap-4">
            <PlayArrowOutlined />
            My Stories
          </DropdownMenuLabel>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
