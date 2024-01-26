import Image from "next/image";

import document from "@/images/documents.png";
import document_dark from "@/images/documents-dark.png";

import reading from "@/images/reading.png";
import reading_dark from "@/images/reading-dark.png";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src={document.src}
            fill
            className="object-contain dark:hidden"
            alt="Documents"
          />
          <Image
            src={document_dark.src}
            fill
            className="object-contain hidden dark:block"
            alt="Documents"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden lg:block">
          <Image
            src={reading.src}
            fill
            className="object-contain dark:hidden"
            alt="Reading"
          />
          <Image
            src={reading_dark.src}
            fill
            className="object-contain hidden dark:block"
            alt="Reading"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
