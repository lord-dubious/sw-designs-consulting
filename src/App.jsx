import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import {
  Building2,
  Pickaxe,
  Cog,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Zap,
  Shield,
  Target
} from 'lucide-react'
import './App.css'

function App() {
  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Expert Engineers" },
    { number: "99%", label: "Client Satisfaction" }
  ]

  const workProcess = [
    {
      step: "01",
      title: "CONSULTATION & ANALYSIS",
      description: "We begin with a comprehensive consultation to understand your specific requirements and challenges. Our team conducts detailed site analysis and feasibility studies to develop the optimal approach for your project."
    },
    {
      step: "02",
      title: "DESIGN & PLANNING",
      description: "Our expert engineers create detailed designs and comprehensive project plans. We utilize cutting-edge technology and industry best practices to ensure efficient, safe, and cost-effective solutions."
    },
    {
      step: "03",
      title: "IMPLEMENTATION & EXECUTION",
      description: "We execute the project with precision and attention to detail. Our experienced team manages all aspects of implementation, ensuring adherence to timelines, budgets, and quality standards."
    },
    {
      step: "04",
      title: "MONITORING & SUPPORT",
      description: "Post-implementation, we provide ongoing monitoring and support services. Our commitment extends beyond project completion to ensure sustained performance and client satisfaction."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold text-gradient">S&amp;W DESIGNS</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-yellow-500 transition-colors">ABOUT</a>
              <a href="#services" className="hover:text-yellow-500 transition-colors">SERVICES</a>
              <a href="#process" className="hover:text-yellow-500 transition-colors">PROCESS</a>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">CONTACT</a>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md h-9 px-4 py-2 text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 hover-glow">
              Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 wireframe-bg"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gradient">Engineering Excellence</span>
                <br />
                <span className="text-white">in Mining &amp; Design</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                S&amp;W Designs Consulting and Engineering Ltd delivers innovative solutions for the mining and engineering industry.
                With over 25 years of experience, we transform complex challenges into successful projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center rounded-md h-10 px-8 text-sm font-medium bg-yellow-500 text-black hover:bg-yellow-400 hover-glow">
                  Start Your Project
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-md h-10 px-8 text-sm font-medium border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  View Our Work
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-2xl glow-effect bg-gradient-to-br from-yellow-900/30 to-gray-900 h-80 flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <Pickaxe className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                  <p className="text-yellow-500 font-semibold text-lg">Mining Operations</p>
                  <p className="text-gray-400">Excellence in Every Project</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-black p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6" />
                  <div>
                    <div className="font-bold">Industry Leader</div>
                    <div className="text-sm">25+ Years Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="process" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">How We Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven methodology ensures successful project delivery through systematic planning,
              expert execution, and continuous optimization.
            </p>
          </div>
          <div className="space-y-16">
            {workProcess.map((process, index) => (
              <div key={index} className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl lg:text-8xl font-bold text-gradient opacity-50">
                    {process.step}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-bold text-yellow-500 mb-4 tracking-wide">
                    {process.title}
                  </h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Services We Offer</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-8 h-8 text-yellow-500" />
                  <CardTitle className="text-yellow-500">TECHNICAL EXPERTISE</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li>• Mining Engineering</li>
                  <li>• Geological Assessment</li>
                  <li>• Structural Design</li>
                  <li>• Process Optimization</li>
                  <li>• Environmental Compliance</li>
                  <li>• Safety Systems</li>
                  <li>• Equipment Selection</li>
                  <li>• Resource Planning</li>
                  <li>• Quality Assurance</li>
                  <li>• Risk Management</li>
                  <li>• Project Consulting</li>
                  <li>• Technical Training</li>
                  <li>• Importation Services</li>
                  <li>• Exportation Services</li>
                  <li>• Manufacturing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-yellow-500" />
                  <CardTitle className="text-yellow-500">OUR APPROACH</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-gray-300">
                    After your initial consultation, we provide a comprehensive project assessment
                    and detailed proposal outlining scope, timeline, and deliverables.
                  </p>
                  <p className="text-gray-300">
                    Our team works closely with you throughout the project lifecycle, ensuring
                    transparent communication and adherence to the highest industry standards.
                  </p>
                  <p className="text-gray-300">
                    We deliver projects on time and within budget, with ongoing support and
                    maintenance services available upon request.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover-glow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-yellow-500" />
                  <CardTitle className="text-yellow-500">INDUSTRY FOCUS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li>• Open Pit Mining</li>
                  <li>• Underground Mining</li>
                  <li>• Mineral Processing</li>
                  <li>• Infrastructure Development</li>
                  <li>• Industrial Engineering</li>
                  <li>• Environmental Engineering</li>
                  <li>• Geotechnical Analysis</li>
                  <li>• Mine Closure Planning</li>
                  <li>• Automation Systems</li>
                  <li>• Sustainability Solutions</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Import/Export Operations</li>
                  <li>• Manufacturing Solutions</li>
                  <li>• ...and more</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                <span className="text-gradient">About S&amp;W Designs</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                S&amp;W Designs Consulting and Engineering Ltd is a premier engineering and mining consultancy
                with over 25 years of industry experience. We specialize in delivering innovative solutions
                for complex mining and engineering challenges.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our team of expert engineers and consultants brings together decades of combined experience
                in mining operations, structural engineering, and project management. We are committed to
                excellence, safety, and sustainable practices in every project we undertake.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span>Industry Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-yellow-500" />
                  <span>Safety First</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-yellow-500" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-yellow-500" />
                  <span>Results Driven</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gradient-to-br from-yellow-900/30 to-gray-900 h-48 flex items-center justify-center border border-yellow-500/20">
                <div className="text-center">
                  <Users className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Engineering Team</p>
                </div>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-yellow-900/30 to-gray-900 h-48 flex items-center justify-center border border-yellow-500/20 mt-8">
                <div className="text-center">
                  <Cog className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Mine Planning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today for a free consultation
              and discover how we can help bring your vision to life.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500 mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Head Office</div>
                    <div className="text-gray-300">123 Mining District, Industrial Zone</div>
                    <div className="text-gray-300">Engineering City, EC 12345</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@swdesigns.com</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-yellow-500">Request a Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  name="consultation"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  action="/success"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="consultation" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 w-full"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400 w-full"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                  />
                  <textarea
                    name="projectDescription"
                    placeholder="Project Description"
                    rows={4}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-400"
                  ></textarea>
                  <Button type="submit" className="w-full bg-yellow-500 text-black hover:bg-yellow-400 hover-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="w-8 h-8 text-yellow-500" />
                <span className="text-xl font-bold text-gradient">S&amp;W DESIGNS</span>
              </div>
              <p className="text-gray-400 mb-4">Engineering excellence in mining and design solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-500 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mining Engineering</li>
                <li>Structural Design</li>
                <li>Project Management</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-500 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-500 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+1 (555) 123-4567</li>
                <li>info@swdesigns.com</li>
                <li>123 Mining District</li>
                <li>Engineering City, EC 12345</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2026 S&amp;W Designs Consulting and Engineering Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
