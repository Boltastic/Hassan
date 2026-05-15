/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Search, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Globe,
  Award,
  BookOpen,
  FileText,
  Users,
  Briefcase,
  MapPin,
  Mail,
  Shield,
  Gavel,
  Landmark,
  Anchor,
  Activity,
  Scroll
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useMemo } from 'react';

const stats = [
  { value: '21', label: 'years in the market' },
  { value: '306+', label: 'publications & media interviews' },
  { value: '34+', label: 'awards received' },
  { value: '2', label: 'offices in the UAE' },
  { value: '8000+', label: 'successful case' },
  { value: '124,473+', label: 'inquiry received' },
];

const expertise = [
  { title: 'Family Law', icon: Users, desc: 'With the team of dependent Family Lawyers in Dubai will provide you strategies that would be beneficial in your cause.' },
  { title: 'Criminal Law', icon: Gavel, desc: 'UAE criminal law contains many provisions derived from Islamic Shariah law that requires specific knowledge and understanding.' },
  { title: 'Arbitration', icon: Scroll, desc: 'A form of alternative dispute resolution outside the court process. The parties to a dispute refer it to arbitration and agree to be bound by the arbitration decision.' },
  { title: 'Construction Law', icon: Briefcase, desc: 'Drafting complex agreements, memorandums of understanding, and subcontracting agreements are just some of his skills in this field.' },
  { title: 'Banking Law', icon: Landmark, desc: 'Dr. Elhais has advised large international banks including Emirates NBD and Dubai Islamic Bank on commercial matters within the UAE.' },
  { title: 'Civil Law', icon: Shield, desc: 'With strength in complex, multi-jurisdictional cases, Dr. Elhais is an excellent practitioner, distinguished by his breadth of expertise across all aspects of civil law.' },
  { title: 'Inheritance Law', icon: Scroll, desc: 'Drafting complex legal wills and guardianship custody agreements is just one of his unparalleled skills in inheritance law.' },
  { title: 'Company Incorporation', icon: Briefcase, desc: 'Dr. Elhais is adept at handling company registration, assisting with company set-ups for foreigners and contract execution matters.' },
  { title: 'Maritime Law', icon: Anchor, desc: 'Dr. Elhais has advised many clients in maritime disputes, including in arrest and seizure of vessels, maritime pollution, and maritime insurance.' },
  { title: 'Sports Law', icon: Activity, desc: 'Our team of qualified lawyers and legal consultants provides effective legal services related to sports law in the UAE, including individual athletes, local companies, and sports organizations.' },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpertise = useMemo(() => {
    if (!searchTerm.trim()) return expertise;
    return expertise.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-elegant-accent/30 bg-elegant-bg text-elegant-text-secondary">
      {/* Top Bar */}
      <div className="bg-elegant-surface border-b border-elegant-border py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-elegant-text-muted font-semibold">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 cursor-pointer hover:text-elegant-accent transition-colors">
              <Globe size={12} />
              <span>Select Your Language:</span>
              <span className="text-elegant-accent">English</span>
            </span>
            <div className="flex space-x-1 text-white">
              <span>🇦🇪</span>
              <span>🇺🇸</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-elegant-accent transition-colors">Awards & Accolades</a>
            <a href="#" className="hover:text-elegant-accent transition-colors">Testimonials</a>
            <a href="#" className="hover:text-elegant-accent transition-colors">Success Stories</a>
            <a href="#" className="hover:text-elegant-accent transition-colors">Media Interviews</a>
            <a href="#" className="hover:text-elegant-accent transition-colors">Case Studies</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-elegant-bg border-b border-elegant-border sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo Placeholder */}
            <div className="h-12 w-48 border border-elegant-border flex items-center justify-center text-elegant-text-primary font-display uppercase tracking-widest text-lg rounded bg-elegant-surface">
              HASSAN ELHAIS
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="bg-elegant-surface px-4 py-2 rounded-lg flex items-center space-x-3 border border-elegant-border group cursor-pointer hover:border-elegant-accent transition-all">
              <div className="bg-elegant-accent p-2 rounded-full text-elegant-bg group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-[10px] text-elegant-accent font-bold uppercase tracking-wider">Connect with us:</p>
                <p className="text-sm font-bold text-elegant-text-primary">+971 50 506 5861</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-bold items-center py-2">
              <div className="flex flex-col items-end">
                <p className="text-[10px] text-elegant-accent uppercase tracking-wider font-bold">Contact us now:</p>
                <p className="text-elegant-text-primary">Dubai: +971 4 378 2013</p>
                <p className="text-elegant-text-primary">Abu Dhabi: +971 2 650 1211</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-elegant-bg border-t border-elegant-border">
          <div className="max-w-7xl mx-auto px-6">
            <ul className="flex items-center justify-end space-x-8 h-12 text-[12px] uppercase tracking-widest font-bold text-elegant-text-muted">
              <li className="text-elegant-accent border-b-2 border-elegant-accent h-full flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>Home</li>
              <li className="hover:text-elegant-accent transition-colors h-full flex items-center cursor-pointer" onClick={() => scrollTo('expertise')}>Expertise</li>
              <li className="hover:text-elegant-accent transition-colors h-full flex items-center cursor-pointer" onClick={() => scrollTo('publications')}>Publications</li>
              <li className="hover:text-elegant-accent transition-colors h-full flex items-center cursor-pointer" onClick={() => scrollTo('articles')}>Articles</li>
              <li className="hover:text-elegant-accent transition-colors h-full flex items-center cursor-pointer" onClick={() => scrollTo('ask')}>Ask Elhais</li>
              <li className="hover:text-elegant-accent transition-colors h-full flex items-center cursor-pointer" onClick={() => scrollTo('contact')}>Contact</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative h-[700px] overflow-hidden bg-elegant-bg">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-elegant-bg"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-elegant-text-primary">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-3 py-1 border border-elegant-accent/30 bg-elegant-surface rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-elegant-accent mb-8 shadow-lg">
              Legal Consultancy Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-display mb-10 leading-tight">
              The New Legal Standard in the UAE.
            </h1>
            <p className="text-lg md:text-xl text-elegant-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
              Transforming complex legal challenges into high-performance solutions with precision expertise and refined strategy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollTo('expertise')}
                className="bg-elegant-text-primary text-elegant-bg px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-elegant-accent transition-all shadow-2xl"
              >
                Explore Expertise
              </button>
              <button 
                onClick={() => scrollTo('publications')}
                className="bg-transparent border border-elegant-border text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:border-white transition-all"
              >
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-elegant-surface py-20 border-y border-elegant-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group cursor-default"
              >
                <p className="text-4xl font-display text-elegant-accent mb-3 group-hover:scale-110 transition-transform">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-elegant-text-muted font-bold leading-tight">
                  {stat.label.split(' ').map((word, j) => (
                    <span key={j} className="block">{word}</span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Bio Content */}
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-5xl font-display text-elegant-text-primary mb-12 leading-tight">
              Dr. Hassan Elhais, One of the Best Legal Consultant in Dubai, UAE
            </h2>

            {/* Announcement Box */}
            <div className="border border-elegant-border bg-elegant-surface p-8 rounded-lg mb-16 shadow-2xl">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-elegant-accent mb-4">Urgent Announcement:</p>
              <p className="text-base text-elegant-text-secondary leading-relaxed">
                As of February 2026, Dr. Hassan Elhais is no longer with <span className="text-elegant-text-primary font-semibold">Awatif Mohammad Shoqi Advocates & Legal Consultancy</span> and moved to <span className="text-elegant-text-primary font-semibold">Amal Alrashedi Lawyers & Legal Consultants</span>.
              </p>
              <p className="text-base text-elegant-text-secondary mt-6 leading-relaxed">
                Please note that the previous contact number <span className="text-elegant-text-primary underline decoration-elegant-accent underline-offset-4">+971 4 355 8000</span> has no relationship with Dr. Hassan Elhais.
              </p>
              <div className="mt-8 pt-8 border-t border-elegant-border">
                <p className="text-base text-elegant-text-primary font-bold flex items-center">
                  <Phone size={18} className="text-elegant-accent mr-3" />
                  Direct Consultation: <span className="text-elegant-accent ml-2">+971 50 506 5861</span>
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-elegant-text-secondary text-lg leading-relaxed space-y-8">
              <p>
                Dr. Hassan Elhais, along with the team of legal consultants and prominent local lawyers across the UAE, has made a name for himself as a renowned specialist in the fields of civil law, <span className="text-elegant-accent border-b border-elegant-accent/30 py-1">corporate law, construction law</span>, maritime law, banking law, criminal law, family law, inheritance law, and arbitration.
              </p>
              <p>
                Dr. Elhais is proud to be a part of a team at Amal Alrashedi Lawyers & Legal Consultants. The esteemed firm is headquartered in Dubai with a branch office in Abu Dhabi. The firm's strategic locations enable its team to provide robust and careful <span className="text-elegant-text-primary font-semibold whitespace-nowrap">legal advice</span> to clients and partners in the United Arab Emirates.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-elegant-surface border border-elegant-border rounded-lg p-1 flex">
              <input 
                type="text" 
                placeholder="SEARCH EXPERTISE..." 
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  scrollTo('expertise');
                }}
                className="flex-1 bg-transparent px-6 py-4 text-[10px] tracking-widest outline-none text-white placeholder:text-elegant-text-muted"
              />
              <button 
                onClick={() => scrollTo('expertise')}
                className="bg-white text-black px-8 py-4 text-[10px] uppercase font-bold tracking-widest hover:bg-elegant-accent transition-colors"
              >
                GO
              </button>
            </div>

            <div className="relative group overflow-hidden rounded-lg border border-elegant-border shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                alt="Dr. Hassan Elhais" 
                className="w-full h-[500px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-bg via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-6 right-6">
                <span className="flex items-center space-x-2 bg-elegant-bg/80 backdrop-blur-md px-4 py-2 rounded-full border border-elegant-accent/50">
                  <span className="w-2 h-2 bg-elegant-accent rounded-full animate-ping"></span>
                  <span className="text-[10px] font-bold text-elegant-accent tracking-tighter">LIVE SUPPORT AVAILABLE</span>
                </span>
              </div>
              <button 
                onClick={() => scrollTo('contact')}
                className="absolute bottom-10 inset-x-10 bg-white text-black py-5 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center space-x-2 hover:bg-elegant-accent transition-all"
              >
                <span>Direct Consultation</span>
              </button>
            </div>
          </aside>
        </div>
      </main>

      {/* Expertise Section */}
      <section id="expertise" className="bg-elegant-surface py-32 border-y border-elegant-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-elegant-accent mb-4 block">Specialized Services</span>
            <h2 className="text-4xl md:text-6xl font-display text-elegant-text-primary">Areas of Expertise</h2>
            {searchTerm && (
              <p className="mt-4 text-xs text-elegant-text-muted uppercase tracking-widest">
                Showing results for: <span className="text-elegant-accent">"{searchTerm}"</span>
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {filteredExpertise.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-8 border border-elegant-border hover:border-elegant-accent/50 transition-all duration-500 bg-elegant-bg/50"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-4 bg-elegant-surface rounded-full border border-elegant-border group-hover:border-elegant-accent transition-colors">
                    <item.icon size={28} className="text-elegant-accent" />
                  </div>
                  <h3 className="text-xl font-display text-elegant-text-primary group-hover:text-elegant-accent transition-colors">{item.title}</h3>
                </div>
                <p className="text-sm text-elegant-text-secondary leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <button 
              onClick={() => {
                alert('Dr. Hassan Elhais\'s full legal profile is being prepared for download. Please contact us if it does not start automatically.');
              }}
              className="border border-elegant-border px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold bg-white text-black hover:bg-elegant-accent transition-all shadow-xl"
            >
              Download Full Profile
            </button>
          </div>
        </div>
      </section>

      {/* Seen On Section */}
      <section className="py-20 bg-elegant-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <div className="text-3xl font-display uppercase tracking-widest">Bloomberg</div>
            <div className="text-3xl font-display uppercase tracking-widest">Post</div>
            <div className="text-3xl font-display uppercase tracking-widest text-elegant-accent">Reuters</div>
            <div className="text-3xl font-display uppercase tracking-widest">AP</div>
          </div>
        </div>
      </section>

      {/* Publications & Testimonials Grid */}
      <section id="publications" className="py-32 bg-elegant-surface border-y border-elegant-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Publications */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Journal & Publications</h2>
              <button 
                onClick={() => scrollTo('publications')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-elegant-accent hover:text-white transition-colors"
              >
                ARCHIVE
              </button>
            </div>
            <div className="space-y-12">
              {[
                { date: 'APRIL 28, 2026', title: 'DUBAI COURT: WHATSAPP CHATS MUST BE EXAMINED IN DIVORCE CASES', source: 'KHALEEJ TIMES' },
                { date: 'APRIL 26, 2026', title: 'CAN YOUR JOB COST YOU CHILD CUSTODY? RULING EXPLAINED', source: 'MENAFN' }
              ].map((pub, i) => (
                <div key={i} className="group cursor-pointer border-l-2 border-transparent hover:border-elegant-accent pl-6 transition-all">
                  <p className="text-[10px] text-elegant-accent font-bold mb-3 tracking-widest">{pub.date}</p>
                  <h4 className="text-lg font-display text-elegant-text-primary leading-tight mb-4">{pub.title}</h4>
                  <p className="text-[10px] text-elegant-text-muted font-bold tracking-widest italic">{pub.source}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Block */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Client Verdict</h2>
            </div>
            <div className="bg-elegant-bg p-12 rounded-lg border border-elegant-border relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-6xl text-elegant-accent/5 font-display">“</div>
              <p className="font-display text-2xl text-elegant-text-primary leading-relaxed relative z-10 mb-12">
                "The extraordinary effort that has been exerted by the staff, and we specially thank Dr. Hassan Mohsen Alhais."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-elegant-accent"></div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white mb-1">Sheikh Saeed Bin Mohammed Hashir Al Maktoum</p>
                  <p className="text-[9px] text-elegant-accent font-bold uppercase tracking-[0.3em]">Official Statement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Articles & Global Media Grid */}
      <section id="articles" className="py-32 bg-elegant-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Legal Articles */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Legal Articles</h2>
              <button 
                onClick={() => scrollTo('articles')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-elegant-accent hover:text-white transition-colors"
              >
                LIBRARY
              </button>
            </div>
            <div className="space-y-12">
              {[
                { date: 'MAY 14, 2026', title: 'HOW TO HANDLE BREACH OF TRUST CASES IN DUBAI: EXPERT GUIDE' },
                { date: 'MAY 13, 2026', title: 'NAVIGATING ANTI MONEY LAUNDERING UAE REGULATIONS' }
              ].map((art, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-[10px] text-elegant-accent font-bold mb-3 tracking-widest">{art.date}</p>
                  <h4 className="text-lg font-display text-elegant-text-primary group-hover:text-elegant-accent transition-colors mb-4">{art.title}</h4>
                  <button className="flex items-center text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-elegant-border pb-1 group-hover:border-elegant-accent transition-all">
                    DOCUMENTATION <ChevronRight size={12} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Global Media */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Global Media</h2>
            </div>
            <div className="bg-elegant-surface p-12 rounded-lg border border-elegant-border relative shadow-2xl">
               <div className="absolute top-0 left-0 p-8 text-6xl text-elegant-accent/5 font-display">“</div>
              <p className="font-display text-xl text-elegant-text-secondary leading-relaxed text-center relative z-10 mb-10 italic">
                “According to Reuters, Dr. Hassan Elhais demonstrates a high level of expertise in handling cross-border legal matters.”
              </p>
              <div className="text-center font-bold font-display text-2xl text-white tracking-widest uppercase opacity-80">
                REUTERS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Of Section */}
      <section className="py-24 bg-elegant-surface border-y border-elegant-border">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-elegant-text-muted mb-16 text-center">Accredited Member of International Institutions</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            <div className="text-2xl font-bold border border-elegant-border px-6 py-2 rounded">ECBA</div>
            <div className="text-2xl font-bold border border-elegant-border px-6 py-2 rounded">ABA</div>
            <div className="text-2xl font-bold border border-elegant-border px-6 py-2 rounded">IBA</div>
            <div className="text-2xl font-bold border border-elegant-border px-6 py-2 rounded">AEA</div>
          </div>
        </div>
      </section>

      {/* Case Studies & Ask Elhais Grid */}
      <section id="ask" className="py-32 bg-elegant-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Case Studies */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Legal Intelligence</h2>
              <button 
                onClick={() => scrollTo('ask')}
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-elegant-accent hover:text-white transition-colors"
              >
                CASES
              </button>
            </div>
            <div className="space-y-12">
              {[
                { date: 'MAY 12, 2026', title: 'FROM SOLE CUSTODY TO CO-PARENTING: UAE MODERN FAMILY LAW' },
                { date: 'MAY 6, 2026', title: 'FINANCIAL INCAPACITY IN THE FAMILY COURT: A STUDY' }
              ].map((cs, i) => (
                <div key={i} className="group cursor-pointer">
                  <p className="text-[10px] text-elegant-accent font-bold mb-3 tracking-widest">{cs.date}</p>
                  <h4 className="text-lg font-display text-elegant-text-primary group-hover:text-elegant-accent transition-colors mb-4">{cs.title}</h4>
                  <button className="flex items-center text-[10px] font-bold text-white uppercase tracking-[0.2em] border-b border-elegant-border pb-1 group-hover:border-elegant-accent transition-all">
                    ANALYZE <ChevronRight size={12} className="ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Ask Elhais Column */}
          <div>
            <div className="flex items-center justify-between mb-12 border-b border-elegant-border pb-6">
              <h2 className="text-3xl font-display text-elegant-text-primary">Ask Elhais</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-elegant-text-secondary font-light leading-relaxed">
                Connect with Dr. Hassan Elhais to bridge the gap between legal theory and complex practical applications.
              </p>
              <p className="text-base text-elegant-text-muted leading-relaxed italic">
                Direct inquiry portal for drafting, memos, and high-stakes litigation consultation.
              </p>
              <button 
                onClick={() => scrollTo('contact')}
                className="bg-elegant-accent text-elegant-bg px-10 py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-all shadow-xl"
              >
                Open Inquiry Portal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="bg-elegant-surface py-24 border-t border-elegant-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-12">Premier Legal Advisory in the United Arab Emirates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-elegant-text-secondary leading-relaxed font-light">
            <div>
              <p>
                Specialized legal practice requires a synthesis of profound experience and refined tactics. Dr. Hassan Elhais provides an unparalleled depth of insight for clients navigating the UAE legal landscape. The selection of a legal advisor is a strategic decision that determines the outcome of high-stakes proceedings across commercial, criminal, and civil domains.
              </p>
            </div>
            <div>
              <p>
                As a full-service consultancy, we leverage a multidisciplinary approach to legal strategy. Our registered advocates and consultants are committed to the highest ethical standards, ensuring every consultation is underpinned by integrity and a relentless drive for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-elegant-bg text-elegant-text-muted pt-32 pb-16 border-t border-elegant-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            {/* Brand column */}
            <div className="space-y-8">
              <div className="text-white font-display text-3xl uppercase tracking-widest">HASSAN ELHAIS</div>
              <p className="text-[11px] leading-loose tracking-[0.2em] uppercase max-w-xs font-bold">
                Elite Legal Advisory & Strategic Consultancy in Dubai. EST. 2005.
              </p>
              <div className="flex space-x-6 pt-4">
                <Instagram size={20} className="hover:text-elegant-accent cursor-pointer transition-colors" />
                <Facebook size={20} className="hover:text-elegant-accent cursor-pointer transition-colors" />
                <Linkedin size={20} className="hover:text-elegant-accent cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-elegant-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Contact column */}
            <div className="space-y-10">
              <h4 className="text-white text-[10px] uppercase font-bold tracking-[0.4em] border-b border-elegant-accent w-fit pb-2">HQ / LOCATIONS</h4>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin size={18} className="text-elegant-accent mt-1 shrink-0" />
                  <div className="text-[11px] uppercase tracking-widest leading-relaxed">
                    <p className="text-white font-bold mb-2">Dubai Principal Office</p>
                    <p>Latifa Tower, Sheikh Zayed Road, Floor 37.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={18} className="text-elegant-accent mt-1 shrink-0" />
                  <div className="text-[11px] uppercase tracking-widest">
                    <p>+971 4 378 2013</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu column */}
            <div className="space-y-10">
              <h4 className="text-white text-[10px] uppercase font-bold tracking-[0.4em] border-b border-elegant-accent w-fit pb-2">NAVIGATION</h4>
              <ul className="text-[11px] uppercase tracking-[0.3em] space-y-4 font-bold">
                <li onClick={() => scrollTo('expertise')} className="hover:text-white transition-colors cursor-pointer">EXPERTISE</li>
                <li onClick={() => scrollTo('articles')} className="hover:text-white transition-colors cursor-pointer">ARTICLES</li>
                <li onClick={() => scrollTo('publications')} className="hover:text-white transition-colors cursor-pointer">RECORDS</li>
                <li onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">CONTACT</li>
              </ul>
            </div>

            {/* Expertise column */}
            <div className="space-y-10">
              <h4 className="text-white text-[10px] uppercase font-bold tracking-[0.4em] border-b border-elegant-accent w-fit pb-2">DISCIPLINES</h4>
              <ul className="text-[11px] uppercase tracking-[0.3em] space-y-4 font-bold">
                <li onClick={() => { setSearchTerm('Criminal'); scrollTo('expertise'); }} className="hover:text-white transition-colors cursor-pointer">CRIMINAL DEFENSE</li>
                <li onClick={() => { setSearchTerm('Maritime'); scrollTo('expertise'); }} className="hover:text-white transition-colors cursor-pointer">MARITIME LAW</li>
                <li onClick={() => { setSearchTerm('Banking'); scrollTo('expertise'); }} className="hover:text-white transition-colors cursor-pointer">BANKING & FINANCE</li>
                <li onClick={() => { setSearchTerm('Corporate'); scrollTo('expertise'); }} className="hover:text-white transition-colors cursor-pointer">CORPORATE STRATEGY</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-elegant-border pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em] font-bold text-elegant-text-muted">
            <div className="flex space-x-12 mb-8 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
            <div className="tracking-[0.8em]">
              © 2026 ELHAIS DIGITAL
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
