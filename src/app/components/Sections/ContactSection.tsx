import { Mail, MapPin, Briefcase, Download, Github, Linkedin } from "lucide-react";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import Link from "next/link";

export default function ContactSection() {
    return (
        <div className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <AnimatedSection>
                    <div className="flex flex-col gap-3 mb-12">
                        <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Contact</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-white/30">
                            Me contacter
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={80}>
                    <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl p-8 md:p-10 hover:border-indigo-500/30 hover:bg-black/[0.06] dark:hover:bg-white/[0.06] transition-all duration-300">
                        <p className="text-gray-700 dark:text-white/70 leading-relaxed mb-8">
                            Une question, une opportunité ou simplement envie d&#39;échanger ?
                            N&#39;hésitez pas à me contacter par email.
                        </p>

                        <div className="grid grid-cols-2 gap-auto">
                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                                    <div className="shrink-0 p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <Mail size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs text-gray-500 dark:text-white/40 mb-1">Email</p>
                                        <a href="mailto:robin.bergmann8@gmail.com" className="text-sm text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200 break-all">
                                            robin.bergmann8@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-white/40 mb-1">Localisation</p>
                                        <p className="text-sm text-gray-700 dark:text-white/70">Strasbourg, France</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                        <Briefcase size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-white/40 mb-1">Statut</p>
                                        <p className="text-sm text-gray-700 dark:text-white/70">En alternance</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <Link
                                    href="mailto:robin.bergmann8@gmail.com"
                                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
                                >
                                    <Mail size={16} />
                                    Envoyer un email
                                </Link>
                                <Link
                                    href="/assets/CV/CV_BERGMANN_Robin.pdf"
                                    download
                                    className="group flex items-center justify-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    Télécharger mon CV
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/robin-bergmann-450521189/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Linkedin size={16} />
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
