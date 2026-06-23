"use client";

import { useState } from "react";
import { Send, Download, CheckCircle } from "lucide-react";
import AnimatedSection from "@/app/components/ui/AnimatedSection";

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const mailtoLink = `mailto:robin.bergmann8@gmail.com?subject=Contact Portfolio — ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`De: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.open(mailtoLink, "_blank");

        setStatus("sent");
        setTimeout(() => {
            setStatus("idle");
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <div className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <AnimatedSection>
                    <div className="flex flex-col gap-3 mb-12">
                        <span className="text-indigo-400 text-xs font-medium tracking-widest uppercase">Contact</span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/30">
                            Me contacter
                        </h2>
                        <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent mt-2" />
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatedSection delay={80}>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm text-white/60">Nom</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-300"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-white/60">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-300"
                                    placeholder="votre@email.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm text-white/60">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                                    placeholder="Votre message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="group flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sent" ? (
                                    <>
                                        <CheckCircle size={16} />
                                        Envoyé !
                                    </>
                                ) : (
                                    <>
                                        <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                        Envoyer
                                    </>
                                )}
                            </button>
                        </form>
                    </AnimatedSection>

                    <AnimatedSection delay={160}>
                        <div className="flex flex-col gap-6 h-full justify-between">
                            <div className="flex flex-col gap-6">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300">
                                    <h3 className="text-white font-semibold mb-2">Email</h3>
                                    <a href="mailto:robin.bergmann8@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200">
                                        robin.bergmann8@gmail.com
                                    </a>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300">
                                    <h3 className="text-white font-semibold mb-2">Localisation</h3>
                                    <p className="text-white/60">Strasbourg, France</p>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 hover:bg-white/[0.06] transition-all duration-300">
                                    <h3 className="text-white font-semibold mb-2">Disponibilité</h3>
                                    <p className="text-white/60">En alternance — ouvert aux opportunités</p>
                                </div>
                            </div>

                            <a
                                href="/assets/CV/CV_BERGMANN_Robin.pdf"
                                download
                                className="group flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                                Télécharger mon CV
                            </a>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
}
