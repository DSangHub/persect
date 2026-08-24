import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"PERSECT AI Personal Secretary",description:"Delegate the daily chores that take up your time. Your day, handled.",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},openGraph:{title:"PERSECT AI Personal Secretary",description:"Your daily chores, handled."},twitter:{card:"summary",title:"PERSECT",description:"Your daily chores, handled."}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
