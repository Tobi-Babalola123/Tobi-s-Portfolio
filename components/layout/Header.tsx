// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { site } from "@/lib/data";

// const navigation = [
//   { label: "Home", href: "/" },
//   { label: "Our Work", href: "/#work" },
//   { label: "Services", href: "/#services" },
//   { label: "Gallery", href: "/#gallery" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 text-white backdrop-blur-md">
//       <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
//         <Link
//           href="/"
//           className="text-lg font-light tracking-[.3em]"
//           onClick={() => setOpen(false)}
//         >
//           {site.short}
//           <span className="block text-[8px] tracking-[.5em]">PRODUCTION</span>
//         </Link>

//         {/* Desktop navigation */}
//         <nav
//           aria-label="Main navigation"
//           className="hidden items-center gap-6 text-xs md:flex"
//         >
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="py-2 opacity-85 transition-opacity hover:opacity-100"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="grid size-11 place-items-center md:hidden"
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           aria-controls="mobile-navigation"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={22} /> : <Menu size={22} />}
//         </button>
//       </div>

//       {/* Mobile navigation */}
//       {open && (
//         <nav
//           id="mobile-navigation"
//           aria-label="Mobile navigation"
//           className="border-t border-white/10 bg-black/95 px-5 pb-4 md:hidden"
//         >
//           {navigation.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setOpen(false)}
//               className="block border-b border-white/10 py-3 text-sm transition-colors hover:text-white/60"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }
