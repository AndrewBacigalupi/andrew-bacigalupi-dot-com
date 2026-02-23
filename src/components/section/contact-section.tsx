import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    
      <div className="relative mb-24 flex flex-col items-center gap-4 text-center">

        <p className="mx-auto max-w-[500px] text-gray-700 text-xl  leading-relaxed">
                    Feel free to shoot me an{" "}
                    <Link href={`mailto:${DATA.contact.email}`} className="text-blue-500 hover:underline">
                      email.
                    </Link>{" "}
                    
                  </p>
      </div>
  );
}

