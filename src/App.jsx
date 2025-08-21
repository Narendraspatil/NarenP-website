import React from 'react';
import { motion } from 'framer-motion';

/**
 * NarenP - Single-file React + Tailwind landing page
 * - Default export a React component
 * - Tailwind CSS classes used throughout (assumes Tailwind is configured)
 * - Framer Motion for subtle animations
 * - Replace placeholder text, links, and images with real content
 *
 * How to preview:
 * 1. Create a React app (Vite or CRA).
 * 2. Install tailwindcss and configure per Tailwind docs.
 * 3. Install framer-motion: `npm i framer-motion`.
 * 4. Drop this file into `src/components/NarenPApp.jsx` and import in App.jsx.
 */

const services = [
  {
    id: 1,
    title: 'Web Applications & Websites',
    desc: 'Modern, responsive web apps and websites built for performance and scale.',
    bullets: ['Responsive UI', 'SEO-friendly pages', 'Progressive Web Apps']
  },
  {
    id: 2,
    title: 'Custom Software Solutions',
    desc: 'Tailored tools and integrations that fit your unique workflows.',
    bullets: ['API Integrations', 'Business-specific tools', 'Secure architecture']
  },
  {
    id: 3,
    title: 'Automation Tools',
    desc: 'Automate repetitive tasks to save time and reduce errors.',
    bullets: ['Python automation', 'ETL & scheduling', 'Email & CRM automation']
  },
  {
    id: 4,
    title: 'Data Analysis & Visualization',
    desc: 'Turn raw data into clear insights and interactive dashboards.',
    bullets: ['Data cleaning', 'Interactive dashboards', 'Ad-hoc analysis']
  }
];

const projects = [
  {
    id: 1,
    title: 'Real Estate Sales Dashboard',
    subtitle: 'Live performance tracking for field sales teams',
    tags: ['Power BI', 'Automation'],
    excerpt: 'A dashboard to track campaigns, leads, and sales performance across regions.'
  },
  {
    id: 2,
    title: 'CRM Automation Suite',
    subtitle: 'Reduced manual workload by 70%',
    tags: ['Python', 'CRM'],
    excerpt: 'Automated lead assignment, sanitization and daily reporting pipelines.'
  },
  {
    id: 3,
    title: 'Marketing Analytics Portal',
    subtitle: 'Campaign ROI and qualification analytics',
    tags: ['Looker', 'SQL'],
    excerpt: 'Interactive portal for marketing managers to inspect campaign-level metrics.'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-teal-400 flex items-center justify-center text-white font-bold">NP</div>
            <div>
              <div className="text-lg font-semibold">NarenP</div>
              <div className="text-xs text-gray-600">Software Development • Data Science</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#projects" className="hover:text-indigo-600">Portfolio</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:opacity-95">Get a Consultation</a>
          </nav>
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 rounded-md bg-gray-100">☰</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Turning Data into Decisions —
              <span className="text-indigo-600"> Ideas into Powerful Software</span>
            </motion.h1>

            <p className="mt-6 text-gray-700 text-lg max-w-xl">
              NarenP builds modern web applications and data solutions that help businesses automate workflows, visualize insights, and scale with confidence. We focus on clean code, secure architecture, and measurable outcomes.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:opacity-95">Book a Free Consultation</a>
              <a href="#projects" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-md text-gray-700">See Portfolio</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Projects Delivered</div>
                <div className="text-2xl font-semibold">25+</div>
              </div>
              <div className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="text-sm text-gray-500">Happy Clients</div>
                <div className="text-2xl font-semibold">12+</div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
            >
              {/* Mock interactive dashboard card */}
              <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-80">Live Dashboard</div>
                    <div className="text-2xl font-bold">Sales Performance</div>
                  </div>
                  <div className="text-right text-xs opacity-80">Updated: Aug 21, 2025</div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/8 rounded">
                    <div className="text-xs opacity-80">This Month</div>
                    <div className="text-lg font-semibold">₹ 12.5L</div>
                  </div>
                  <div className="p-3 bg-white/8 rounded">
                    <div className="text-xs opacity-80">Leads</div>
                    <div className="text-lg font-semibold">1,250</div>
                  </div>
                </div>

                <div className="mt-6 h-36 bg-white/8 rounded flex items-center justify-center text-sm opacity-80">[Interactive chart placeholder]</div>
              </div>

              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div className="text-sm">Recent Activity</div>
                  <div className="text-xs text-gray-500">Automations running</div>
                </div>

                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>• Lead assignment succeeded — 23s ago</li>
                  <li>• Daily report exported — 12m ago</li>
                  <li>• Campaign sync completed — 2h ago</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-16">
          <h2 className="text-2xl font-bold">What we do</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">Software development focused on web apps and custom solutions, plus data analysis and visualization to power decisions.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <motion.div key={s.id} whileHover={{ y: -6 }} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="text-indigo-600 font-semibold">{s.title}</div>
                <div className="mt-2 text-gray-700 text-sm">{s.desc}</div>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {s.bullets.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
                <div className="mt-4">
                  <a href="#contact" className="inline-block text-sm font-medium text-indigo-600">Start a project →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="projects" className="mt-16">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Selected Work</h2>
              <p className="text-gray-600 mt-1">A few projects that showcase our approach to software + data.</p>
            </div>
            <a href="#contact" className="hidden sm:inline-block text-sm font-medium text-indigo-600">Work with us →</a>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(p => (
              <motion.article key={p.id} whileHover={{ scale: 1.02 }} className="rounded-lg border border-gray-100 bg-white shadow-sm overflow-hidden">
                <div className="p-5">
                  <div className="text-sm text-gray-500">{p.tags.join(' • ')}</div>
                  <h3 className="mt-2 font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>
                </div>
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                  <div className="text-sm text-gray-700">{p.subtitle}</div>
                  <a href="#" className="text-indigo-600 text-sm">Details →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-indigo-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">About NarenP</h2>
              <p className="mt-3 text-gray-700">We are a compact team—engineers, analysts, and designers—focused on delivering software and data products that solve real business problems. Our approach is collaborative: we study the business, design the right solution, and ship with speed and quality.</p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="p-3 bg-white rounded shadow-sm border border-gray-100">Fast prototyping & MVPs</li>
                <li className="p-3 bg-white rounded shadow-sm border border-gray-100">Secure, maintainable codebases</li>
                <li className="p-3 bg-white rounded shadow-sm border border-gray-100">Automated reporting & ETL</li>
                <li className="p-3 bg-white rounded shadow-sm border border-gray-100">Interactive dashboards</li>
              </ul>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-56 h-56 bg-gradient-to-tr from-indigo-600 to-teal-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl">NP</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="mt-2 text-gray-600">Tell us about your project or ask for a demo. We reply quickly.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="space-y-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input className="mt-1 w-full border border-gray-200 p-3 rounded-md" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input className="mt-1 w-full border border-gray-200 p-3 rounded-md" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea className="mt-1 w-full border border-gray-200 p-3 rounded-md" rows={5} placeholder="Tell us about your project..." />
              </div>
              <div className="flex items-center gap-3">
                <button type="button" className="px-5 py-3 bg-indigo-600 text-white rounded-md">Send Message</button>
                <button type="button" className="px-4 py-2 border rounded-md">Request Demo</button>
              </div>
            </form>

            <div className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm">
              <h3 className="font-semibold">Contact Details</h3>
              <p className="text-gray-600 mt-2">Pune, India</p>
              <p className="text-gray-600">Email: contact@narenp.com</p>
              <p className="text-gray-600">Phone: +91 xxxxx xxxxx</p>

              <div className="mt-6">
                <h4 className="text-sm font-medium">Quick Facts</h4>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Focused on web apps, custom solutions, and automation</li>
                  <li>• Data analysis, visualization & BI</li>
                  <li>• Fast MVPs and secure deployments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mt-16 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-700 to-teal-500 text-white p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Ready to build something great?</h3>
              <p className="mt-1 text-sm opacity-90">Let's design a solution that fits your business and scales with you.</p>
            </div>
            <div>
              <a href="#contact" className="px-6 py-3 bg-white text-indigo-700 rounded-md font-medium">Start a Project</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t bg-white/60 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} NarenP — Software Development & Data Science</div>
          <div className="text-sm text-gray-600">Built with code & data • Pune, India</div>
        </div>
      </footer>
    </div>
  );
}
