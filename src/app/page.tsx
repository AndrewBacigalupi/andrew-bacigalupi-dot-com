"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "../data/resume";
import Image from "next/image";
import { ProjectCard } from "@/app/components/project-card";
import Head from "next/head";
import {
  Home as HomeIcon,
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Instagram as InstagramIcon,
  FileText as Resume
} from "lucide-react";
import BlurFade from "@/app/components/magicui/blur-fade";
import BlurFadeText from "@/app/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

function Section({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <section className="max-w-2xl mx-auto w-full mb-12">
      <div className="flex items-center gap-3 mb-2">
        {badge && <Badge variant="secondary">{badge}</Badge>}
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function BottomNavBar() {
  return (
    <>
      {/* Gradient background behind navbar */}
      <div className="fixed bottom-0 left-0 w-full h-20 pointer-events-none z-30 bg-gradient-to-t from-white/90 to-transparent" />
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center bg-white rounded-xl shadow-lg px-4 py-1.5 gap-3 border border-gray-100">
          {/* Left group */}
          <a href="#" className="p-1.5 hover:bg-gray-100 rounded-full" aria-label="Home">
            <HomeIcon className="w-5 h-5" />
          </a>
          <a href="/resume.pdf" className="p-1.5 hover:bg-gray-100 rounded-full" aria-label="Resume">
            <Resume className="w-5 h-5" />
          </a>
          <span className="h-5 w-px bg-gray-200 mx-2" />
          {/* Socials */}
          <a href="https://github.com/AndrewBacigalupi" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-100 rounded-full" aria-label="GitHub">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-bacigalupi-1169a8322/" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-100 rounded-full" aria-label="LinkedIn">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/andrewbacigalupi" target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-gray-100 rounded-full" aria-label="Instagram">
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-gray-900">
      <Head>
        <link rel="icon" href="/ab.png" type="image/png" />
      </Head>
      {/* Hero/About Section */}
      <section className="max-w-4xl w-full mx-auto flex flex-col md:flex-row text-left gap-6 px-4 pb-2">
        {/* Left: Title and About */}
        <div className="flex flex-col items-start text-left w-full gap-4">
          <div className="mt-5 mb-5 text-center sm:text-left w-full">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold"
              yOffset={8}
            >
              Andrew Bacigalupi
            </BlurFadeText>
          </div>
          
          
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="mt-1 text-2xl font-bold">About</h2>
            <div className="text-muted-foreground mb-4 max-w-xl mr-6">

              I&apos;m studying CS + a little Math / Philosophy in the School of
              Engineering at{" "}
              <a
                className=" text-blue-400 underline"
                href="https://tufts.edu/"
              >
                Tufts
              </a>
              . I&apos;m passionate about impactful computing and solutions that better
              the lives of others. I&apos;m most interested in software development and
              statistical analysis in the natural sciences, be it computational
              biology / astronomy, medical devices / technology, academic research, or
              any similar work that seeks to make a difference.
            </div>
          </BlurFade>
        </div>
        {/* Right: Image */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto md:mt-31 -ml-2">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white/80">
              <Link href="#">
                <Image
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  width={240}
                  height={240}
                  className=" object-cover w-[200px] h-[200px] md:w-[290px] md:h-[210px] transition-all duration-300 hover:scale-104 hover:text-white hover:bg-blue-200 transition-transform ease-in-out"
                  style={{ display: "block" }}
                />
              </Link>
            </div>
          </div>
        </BlurFade>
      </section>
      {/* Main Content */}
      <main className="max-w-4xl w-full px-4">
        <Section title="Experience">
          <div className="flex flex-col divide-y">
            {DATA.work.map((work, i) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 5 + i * 0.05}>
              <div className="flex items-start gap-4 py-5">
                <Avatar className="w-12 h-12 border-1 border-gray-300 p-1">
                  <AvatarImage src={work.logoUrl} alt={work.company} />
                  <AvatarFallback>{work.company[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center flex-wrap gap-2 font-semibold text-base mb-0.5">
                    <span>{work.company}</span>
                    {work.badges &&
                      work.badges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className=" transition-transform duration-300 ease-in-out"
                        >
                          {badge}
                        </Badge>
                      ))}
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-0.5">
                    {work.title}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    {work.start} - {work.end ?? "Present"}
                  </div>
                  <div className="text-xs text-gray-500 mb-1">
                    {work.description &&
                      work.description.map((bullet, idx) => (
                        <ol
                          key={bullet}
                         
                          className=" transition-transform duration-300 ease-in-out"
                        >
                          • {work.description[idx]}
                        </ol>
                      ))}
                  </div>
                </div>
              </div>
              </BlurFade>
            ))}
          </div>
        </Section>
        <Section title="Education">
          <div className="flex flex-col divide-y">
            {DATA.education.map((education, i) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 6 + i * 0.05}>
              <div
                key={education.school}
                className="flex items-start gap-4 py-5"
              >
                <Avatar className="w-12 h-12 border border-gray-300 p-1">
                  <AvatarImage src={education.logoUrl} alt={education.school} />
                  <AvatarFallback>{education.school[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="font-semibold text-base mb-0.5">
                      {education.school}
                    </div>
                    <div className="text-xs text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mb-0.5">
                    {education.degree}
                  </div>
                  <div className="text-sm text-gray-500">
                    {education.minors}
                  </div>
                </div>
              </div>
              </BlurFade>
            ))}
          </div>
        </Section>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Section title="Skills">
          <div className="flex flex-wrap gap-2 mt-2">
            {DATA.skills.map((skill) => (
              <BlurFade key={skill.title} delay={BLUR_FADE_DELAY * 8}>
              <Badge
                key={skill.title}
                variant="default"
                className="inline-flex text-sm items-center hover:scale-104 transition-transform duration-300 "
              >
                <Image
                  width={4}
                  height={4}
                  src={skill.logo}
                  alt={skill.title}
                  className="h-4 w-4 mr-1"
                />
                {skill.title}
              </Badge>
              </BlurFade>
            ))}
          </div>
        </Section>
        </BlurFade>
          <div className="max-w-4xl w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <Section title="Projects">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-4">
                  {DATA.projects.map((project, i) => (
                    <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 10 + i * 0.05}>
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
            </Section>
          </BlurFade>
          {/* Contact Section */}
          <section className="mb-20">
            <div className="grid items-center justify-start gap-4 py-12 w-full mb-14">
              <BlurFade delay={BLUR_FADE_DELAY * 10}>
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold  sm:text-5xl ">
                    Get in Touch
                  </h2>
                  <p className="mx-auto mt-6 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ideas? Feedback? Want to chat? Just shoot me an {" "}
                    <Link
                      href={DATA.contact.email}
                      className="text-blue-500 hover:underline"
                    >
                      email
                    </Link>{" "}
                    and I&apos;ll respond as soon as possible. I would love to hear what you have to say!
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
          <h4 className="text-center text-xs text-gray-400 mb-24">
            Template from <a className="underline" href="https://github.com/dillionverma">Dillion Verma</a>
          </h4>
          
        </div>
        
      </main>
      <BottomNavBar />



    </div>
  );
}
