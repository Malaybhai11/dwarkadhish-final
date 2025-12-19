import Image from "next/image";
import { Shield, Award, Headphones, CheckCircle2, TrendingUp, MapPin } from "lucide-react";

const certifications = [
  {
    id: 1,
    image: "/made-in-india.png",
    label: "Made in India",
    metric: "ISO 9001:2015 Certified"
  },
  {
    id: 2,
    image: "/GEM-logo.png",
    label: "GeM Verified",
    metric: "Authorized Seller"
  },
  {
    id: 3,
    image: "/service-photo.png",
    label: "Quality Assured",
    metric: "BIS Compliant"
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "100% Quality Guarantee",
    description: "Every product undergoes rigorous quality inspection before dispatch"
  },
  {
    icon: Award,
    title: "Trusted by 500+ Institutions",
    description: "Government offices, schools, and enterprises rely on us daily"
  },
  {
    icon: Headphones,
    title: "Support in 2 Hours",
    description: "Expert assistance via phone, WhatsApp, or email on business days"
  },
];

export default function TrustBadges() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(30 64 175) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Header with Stats */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 shadow-lg shadow-blue-600/25">
            <CheckCircle2 className="w-4 h-4" />
            Certified & Trusted
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-[1.1] tracking-tight px-4">
            Why 10,000+ Customers Choose Dwarkadhish
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
            India's most reliable paper and printing solutions provider, delivering excellence since establishment
          </p>
        </div>

        {/* Impact Metrics - Premium Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={2.5} />
            </div>
            <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-none">10,000+</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Happy Customers</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={2.5} />
            </div>
            <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-none">100+</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Cities Served</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={2.5} />
            </div>
            <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-none">500+</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Institutions</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl hover:scale-105 hover:border-blue-300/50 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" strokeWidth={2.5} />
            </div>
            <p className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1 leading-none">100%</p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">Quality Assured</p>
          </div>
        </div>

        {/* Certifications Row - Clean & Professional */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-evenly gap-8 sm:gap-6 md:gap-10 lg:gap-16">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="relative flex flex-col items-center gap-3 group">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out">
                  <Image
                    src={cert.image}
                    alt={cert.label}
                    fill
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-bold text-gray-900 leading-tight">{cert.label}</p>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">{cert.metric}</p>
                </div>
                {index < certifications.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 md:-right-5 lg:-right-8 top-1/2 -translate-y-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
