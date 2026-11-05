"use client";
import { useState } from "react";
import { mapSrc } from "@/lib/map";
import { Section, SectionHeading } from "@/components/ui/ui";
const inp = "mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm min-h-11";
export default function Enquiry() {
  const [err, setErr] = useState<Record<string, string>>({}); const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const f = new FormData(e.currentTarget); const x: Record<string, string> = {};
    if (!String(f.get("name")).trim()) x.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(f.get("email")))) x.email = "Enter a valid email address.";
    if (!String(f.get("details")).trim()) x.details = "Tell us a little about the project.";
    setErr(x); if (Object.keys(x).length) return;
    // TODO: send `f` to your backend or form service. Nothing is sent yet.
    setDone(true);
  };
  const field = (id: string, label: string, el: React.ReactNode) => <div key={id}><label htmlFor={id} className="text-xs font-medium">{label}</label>{el}{err[id] && <p role="alert" className="text-xs text-red-600">{err[id]}</p>}</div>;
  return <Section id="contact" gray><SectionHeading title="Let us help build your next production team" text="Tell us what you are planning and we will reply with a plan and a list of crew and services for your shoot." />
    <div className="mt-8 grid gap-4 lg:grid-cols-[360px_1fr]">
      {done ? <p role="status" className="bg-white p-6 text-sm">Thanks. Your enquiry passed validation; connect a backend in ProductionEnquiry.tsx to deliver it.</p> :
      <form onSubmit={submit} noValidate className="space-y-3 bg-white p-5">
        {field("name", "Name", <input id="name" name="name" className={inp} />)}
        {field("email", "Email", <input id="email" name="email" type="email" className={inp} />)}
        {field("type", "Production type", <select id="type" name="type" className={inp}><option>Video production</option><option>Music recording</option><option>Live event</option><option>Corporate video</option></select>)}
        {field("location", "Location", <input id="location" name="location" className={inp} />)}
        {field("details", "Project details", <textarea id="details" name="details" rows={4} className={inp} />)}
        <button className="min-h-11 w-full bg-brand text-xs font-medium text-white hover:bg-[#2a74b2]">SEND ENQUIRY</button></form>}
      <iframe title="Studio map" src={mapSrc()} loading="lazy" className="h-[420px] w-full border-0 bg-neutral-200 lg:h-full lg:min-h-[480px]" /></div></Section>;
}
