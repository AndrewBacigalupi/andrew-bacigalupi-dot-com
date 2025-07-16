import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React, { useRef, useEffect, useState } from "react";

// Simple Intersection Observer hook
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  links,
  className,
}: Props) {
  const [ref, inView] = useInView();
  return (
    <Card
      ref={ref}
      className={
        `flex flex-col overflow-hidden border rounded-2xl shadow-sm bg-white h-full hover:scale-103 transition-transform duration-300 ease-in-out max-w-full p-0 fade-in-up${inView ? ' in-view' : ''}`
      }
    >
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer m-0 p-0", className)}
      >
        {image && (
          <div className="w-full flex justify-center overflow-x-auto m-0 p-0">
            <Image
              width={220}
              height={80}
              src={image}
              alt={title}
              className="w-78 h-48 object-cover object-top m-0 p-0"
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col flex-1 justify-between">
        <CardHeader className="px-2 pt-0 pb-0 m-0">
          <CardTitle className="text-sm font-bold leading-tight mb-0.5 mt-0">{title}</CardTitle>
          <time className="font-sans text-xs text-gray-500 block leading-tight mt-0">{dates}</time>
          <div className="hidden font-sans text-[9px] underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-xs text-gray-400 leading-snug mb-2 mt-0">
            <Markdown>{description}</Markdown>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col px-2 pb-1 pt-0 m-0">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-1 mt-0">
              {tags?.map((tag) => (
                <Badge
                  className="px-2 py-1 text-[10px] font-medium bg-gray-100 text-gray-800"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="px-2 pt-0 pb-0 m-0">
          <div className="flex flex-row flex-wrap items-center gap-1 w-full mb-2 p-0">
            {links && links.length > 0 ? (
              links.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge className="w-20 flex items-center justify-center gap-1 bg-black text-white px-2 py-1 text-xs font-semibold transition hover:scale-104 hover:bg-gray-700">
                    {typeof link.icon === 'string' && (
                      <Image width={3.5} height={3.5} src={link.icon} alt={link.type + ' icon'} className="w-3.5 h-3.5 inline mr-1" />
                    )}
                    {link.type}
                  </Badge>
                </Link>
              ))
            ) : (
              <div className="w-20 " />
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}


/*className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert"*/