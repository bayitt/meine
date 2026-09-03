import { Button } from "../Button";
import { HiMail } from "react-icons/hi";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-8">
      <p className="text-lg font-semibold">Ọmọ́gẹ </p>
      <Button handleClick={() => {}}>
        Message <HiMail size={18} />
      </Button>
    </header>
  );
};
