import { Navbar, NavbarItem, NavbarButton } from "@/components/Navbar";
import GlareHover from "@/components/GlareHover";
import { ShieldCheck, Printer, Truck, MapPin, Users, Building2, Lock, FileText, Globe, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 overflow-x-hidden">
            <Navbar>
                <NavbarItem label="Home" href="/" />
                <NavbarItem label="Shop" href="/shop" />
                <NavbarItem label="About" href="/about-us" />
                <NavbarButton label="Login" href="/login" variant="simple" />
                <NavbarButton label="Signup" href="/signup" variant="colored" />
            </Navbar>

            {/* Hero Section - Text Focused */}
            <section className="relative pt-32 pb-16 px-4 z-10 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 text-xs font-medium uppercase tracking-widest">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>EST. 2014 &bull; Jamnagar, Gujarat</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                        PRECISION<br />
                        <span className="text-slate-800 text-stroke-thin">SECURITY</span><br />
                        SCALE
                    </h1>
                </div>
            </section>

            {/* Identity - Bento Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    
                    {/* Main Stat - Glare Effect */}
                    <div className="md:col-span-6 md:row-span-2 relative group">
                        <GlareHover 
                            width="100%" 
                            height="100%" 
                            borderRadius="24px"
                            glareColor="#6366f1"
                            glareOpacity={0.15}
                            borderColor="rgba(255,255,255,0.05)"
                            background="radial-gradient(circle at center, #1e1b4b 0%, #020617 100%)"
                        >
                            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                                <span className="text-8xl md:text-9xl font-black text-indigo-500/90 tracking-tighter leading-none">
                                    10<span className="text-4xl align-top">+</span>
                                </span>
                                <p className="text-xl md:text-2xl font-medium text-slate-300 mt-4">Years of Operational Excellence</p>
                                <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                                    Trusted by Government & Enterprise sectors for high-stakes printing.
                                </p>
                            </div>
                        </GlareHover>
                    </div>

                    {/* Secondary Stat 1 */}
                    <div className="md:col-span-3 bg-slate-900/40 rounded-[24px] border border-white/5 p-8 flex flex-col justify-between hover:bg-slate-900/60 transition-colors">
                        <Printer className="w-8 h-8 text-indigo-400 mb-4" />
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">End-to-End</h3>
                            <p className="text-sm text-slate-400">Design to Secure Dispatch</p>
                        </div>
                    </div>

                    {/* Secondary Stat 2 */}
                    <div className="md:col-span-3 bg-slate-900/40 rounded-[24px] border border-white/5 p-8 flex flex-col justify-between hover:bg-slate-900/60 transition-colors">
                        <Users className="w-8 h-8 text-emerald-400 mb-4" />
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-1">Diverse</h3>
                            <p className="text-sm text-slate-400">Edu, Gov, Corp, Health</p>
                        </div>
                    </div>

                    {/* Wide Descriptive Block */}
                    <div className="md:col-span-6 bg-slate-900/20 rounded-[24px] border border-white/5 p-8 flex items-center">
                         <p className="text-lg text-slate-400 leading-relaxed text-balance">
                            Dwarkadhish Paper Products is not just a printer; we are a strategic partner for institutions requiring zero-error, confidential, and high-volume document processing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Secure Printing - Split Screen Creative */}
            <section className="py-24 bg-slate-900/20 border-y border-white/5 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        {/* Creative Composition for Security */}
                        <div className="relative z-10 space-y-4">
                             <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm max-w-md ml-auto translate-x-4">
                                <div className="flex items-center gap-3 mb-2 text-emerald-400 text-xs font-mono uppercase">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Access Granted
                                </div>
                                <p className="text-slate-300 font-medium">Fingerprint-based biometric entry</p>
                             </div>
                             
                             <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm max-w-md -translate-x-4">
                                <div className="flex items-center gap-3 mb-2 text-indigo-400 text-xs font-mono uppercase">
                                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                    Surveillance
                                </div>
                                <p className="text-slate-300 font-medium">24/7 CCTV in Production, QC & Dispatch</p>
                             </div>

                             <div className="p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm max-w-md ml-auto translate-x-8">
                                <div className="flex items-center gap-3 mb-2 text-rose-400 text-xs font-mono uppercase">
                                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                                    Zero Leakage
                                </div>
                                <p className="text-slate-300 font-medium">100,000+ Exam Papers Printed Securely</p>
                             </div>
                        </div>
                        {/* Abstract bg element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-3xl rounded-full pointer-events-none" />
                    </div>

                    <div className="order-1 md:order-2">
                        <Lock className="w-12 h-12 text-white mb-6 opacity-80" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Fortress-Level <br/>Confidentiality.
                        </h2>
                        <p className="text-slate-400 text-xl leading-relaxed mb-8">
                             We operate a <span className="text-white font-medium">5000 sq ft secure facility</span> designed explicitly for high-stakes documentation. When data leakage is not an option, institutions choose us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workflow - Horizontal Steps */}
            <section className="py-24 px-4 overflow-x-auto selection:bg-transparent">
                 <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white">The Workflow</h2>
                    </div>

                    <div className="flex gap-4 md:gap-8 pb-8 min-w-max md:min-w-0">
                        {[
                            { step: "01", title: "Consult", desc: "Requirements & Timeline" },
                            { step: "02", title: "Plan", desc: "Resource & Security Prep" },
                            { step: "03", title: "Print", desc: "High-Speed Production" },
                            { step: "04", title: "Verify", desc: "Quality Assurance Check" },
                            { step: "05", title: "Dispatch", desc: "Secure Logistics" },
                        ].map((item, i) => (
                            <div key={i} className="w-[200px] md:w-[240px] p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors group">
                                <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-indigo-500/20 transition-colors">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>

            {/* Capabilities - Asymmetric Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                 <div className="grid md:grid-cols-2 gap-8">
                    {/* Variable Data - Featured with Glare */}
                    <GlareHover
                         width="100%"
                         height="400px" // Fixed height for visual consistency
                         borderRadius="24px"
                         glareColor="#ffffff"
                         glareOpacity={0.1}
                         background="#0f172a" // Slate-900
                         borderColor="rgba(255,255,255,0.05)"
                    >
                         <div className="h-full p-10 flex flex-col justify-end relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-10">
                                <FileText className="w-32 h-32" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Variable Data Printing</h3>
                            <p className="text-slate-400 relative z-10">
                                Personalization at industrial scale. Unique barcodes, addressing, and data points per sheet for direct mail and records.
                            </p>
                         </div>
                    </GlareHover>

                    {/* Industrial Scale - Standard Card */}
                     <div className="h-[400px] rounded-[24px] bg-slate-900/20 border border-white/5 p-10 flex flex-col justify-end relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Building2 className="w-32 h-32" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2 relative z-10">Industrial Scale</h3>
                        <p className="text-slate-400 relative z-10">
                            Equipped for massive tenders. Consistent quality across millions of impressions for Education Boards and Government.
                        </p>
                     </div>
                 </div>
            </section>

            {/* Clients - Minimalist Cloud */}
            <section className="py-24 border-t border-white/5 text-center">
                 <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-medium text-white mb-12">Trusted Infrastructure Partners</h2>
                    
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-xl md:text-2xl font-bold text-slate-600 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using text representations as requested for clean look, could be logos */}
                        {["Indian Army", "Indian Navy", "DRDO", "LIC", "Indian Air Force", "ESIC", "Kendriya Vidyalaya", "Gujarat Govt"].map((client, i) => (
                             <span key={i} className="cursor-default hover:text-white transition-colors">{client}</span>
                        ))}
                    </div>

                    <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Registered on GeM (Government e-Marketplace)</span>
                    </div>
                 </div>
            </section>

            {/* Footer Location - Simple */}
            <section className="py-12 bg-slate-950 border-t border-white/10 flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto text-sm text-slate-500">
                 <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <MapPin className="w-4 h-4" />
                    <span>Jamnagar, Gujarat</span>
                 </div>
                 
                 <div className="flex gap-8">
                     <span>Nepal</span>
                     <span>Bhutan</span>
                     <span>Pan-India</span>
                 </div>
            </section>
        </div>
    );
}