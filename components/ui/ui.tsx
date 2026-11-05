"use client";
import { useState } from "react";
export function Button({ children, href = "#", small, className = "" }: { children: React.ReactNode; href?: string; small?: boolean; className?: string }) {
  return <a href={href} className={`inline-flex items-center justify-center bg-brand text-white font-medium tracking-wide hover:bg-[#2a74b2] transition-colors ${small ? "rounded-full px-5 py-2 text-[11px]" : "rounded-sm px-6 py-3 text-xs"} min-h-11 ${className}`}>{children}</a>;
}
export function SectionHeading({ label, title, text }: { label?: string; title: string; text?: string }) {
  return <div className="mx-auto max-w-3xl text-center">
    {label && <p className="text-[10px] font-semibold uppercase tracking-[.25em] text-brand">{label}</p>}
    <h2 className="mt-2 text-2xl font-light uppercase tracking-wide sm:text-3xl">{title}</h2>
    {text && <p className="mt-3 text-[13px] text-mute">{text}</p>}
  </div>;
}
// Shows a grey block if the file is missing, so layout never breaks.
export function Img({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [bad, setBad] = useState(false);
  return <div className={`bg-neutral-300 overflow-hidden ${className}`}>
    {!bad && <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
  </div>;
}
export const Section = ({ id, gray, children, className = "" }: { id?: string; gray?: boolean; children: React.ReactNode; className?: string }) =>
  <section id={id} className={`${gray ? "bg-soft" : "bg-white"} py-14 sm:py-16 ${className}`}><div className="mx-auto max-w-6xl px-5">{children}</div></section>;
