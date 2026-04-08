import Link from "next/link";
import {Github, Linkedin} from "lucide-react";

export default function Footer() {
    return(
        <footer className="flex flex-col gap-4 w-full items-center text-white py-5 mx-auto mt-auto">
            <div className="flex flex-row justify-between items-center w-full max-w-lg">
                <div className="flex flex-row gap-5">
                    <Link href={"/about"}>A propos</Link>
                    <Link href={"/about"}>Mes projets</Link>
                    <Link href={"/about"}>A propos</Link>
                </div>
                <div className="flex flex-row gap-5">
                    <Link href={"https://github.com/R0biboy0305"} target={"_blank"}><Github/></Link>
                    <Link href={"https://www.linkedin.com/in/robin-bergmann-450521189/"} target={"_blank"}><Linkedin/></Link>
                </div>
            </div>
            <div>
                <p className="text-sm text-white/50">© 2026 Robin Bergmann. Tous droits réservés.</p>
            </div>
        </footer>
    )
}