/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
// import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
  <section id="hero">
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <div className="gap-4 flex flex-col md:flex-row justify-between items-start">
        <div className="gap-3 flex flex-col order-2 md:order-1 flex-1">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            className="text-5xl font-semibold tracking-tighter sm:text-7xl leading-tight"
            yOffset={8}
            text="Andrew Bacigalupi"
          />
        </div>
        <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 shrink-0 flex justify-center md:block order-1 md:order-2 shrink-0">
          <Image
            src={DATA.avatarUrl}
            alt='So glad you could make it to my site! This is a selfie of me, Andrew Bacigalupi on a beach in Massachussetts.'
            width={240}
            height={240}
            className=" mx-0 rounded-xl object-cover w-[250px] h-[200px] md:w-[230px] md:h-[210px] transition-all duration-300 hover:scale-101 hover:bg-blue-200 ease-in-out md:mr-4"
            style={{ display: "block" }}
          />
        </BlurFade>
      </div>
      

      {/* About — full width below name + image */}
      <div className="flex min-h-0 flex-col gap-y-2">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="mt-2 prose max-w-full text-pretty font-sans leading-relaxed  dark:prose-invert text-md">
            I'm from St. Paul, <a className="text-emerald-700 hover:text-green-200" href="https://www.exploreminnesota.com/live/why-move-to-minnesota">MN</a>, and I'm studying CS + Applied Math in the School of Engineering at <a className="text-blue-400 hover:text-blue-200" href="https://tufts.edu/">Tufts</a>. <Markdown>{DATA.summary}</Markdown>
          </div>
          <div>
            <p className="mt-6 prose max-w-full text-pretty font-sans leading-relaxed dark:prose-invert text-md">
              Currently, I'm interning as a Software Engineer at <a className="text-red-700 hover:text-red-200" href="https://appliedinvention.com/">Applied Invention</a>.
            </p>
          </div>

          <p className="mt-6 prose max-w-full text-pretty font-sans leading-relaxed dark:prose-invert text-md">
              Big fan of basketball, tennis, pickleball, running, weightlifting, piano, and chess.
            </p>
        </BlurFade>
      </div>
    </div>
  </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className={cn(
                          "size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-white dark:bg-white flex-none",
                          education.logoUrl.includes("tuftsLogo")
                            ? "object-contain p-1"
                            : "object-cover"
                        )}
                      />
                    ) : (
                      <div className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      {/* <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section> */}
      <div className="flex justify-center">
        <p className="text-xs text-muted-foreground">Thanks to <a className="underline hover:text-gray-300" href="https://dillion.io/">Dillion Verma</a> for the template!</p>
      </div>
    </main>
  );
}
