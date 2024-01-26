import Image from "next/image";
import { Poppins } from "next/font/google";
import logo from "@/images/logo.svg";
import logo_dark from "@/images/logo-dark.svg";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src={logo.src}
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src={logo_dark.src}
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
      />
      <p className={cn("font-semibold", font.className)}>Jotion</p>
    </div>
  );
};
export default Logo;
