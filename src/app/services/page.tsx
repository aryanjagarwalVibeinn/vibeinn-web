import React from "react";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Navbar from "../../components/home/Navbar";
import Footer from "@/components/home/Footer";

const ServicesPage = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12 text-[#0066FF]" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "Native iOS & Android Development",
        "React Native & Flutter Apps",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Offline Functionality",
        "Third-party Integrations",
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase"],
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-500" />,
      title: "Website Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user engagement.",
      features: [
        "Responsive Web Design",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "SEO Optimization",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress"],
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements and streamline your operations.",
      features: [
        "Enterprise Applications",
        "API Development & Integration",
        "Microservices Architecture",
        "Legacy System Modernization",
        "Automation Solutions",
        "Business Intelligence Tools",
      ],
      technologies: ["Python", "Java", ".NET", "PHP", "Ruby on Rails"],
    },
    {
      icon: <Database className="w-12 h-12 text-blue-700" />,
      title: "Database Solutions",
      description:
        "Robust database design, optimization, and management services to ensure your data is secure, accessible, and scalable.",
      features: [
        "Database Design & Architecture",
        "Data Migration Services",
        "Performance Optimization",
        "Backup & Recovery Solutions",
        "Data Analytics Setup",
        "Real-time Data Processing",
      ],
      technologies: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
      ],
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-800" />,
      title: "Cloud Services",
      description:
        "Comprehensive cloud solutions including deployment, scaling, and management of applications in modern cloud environments.",
      features: [
        "Cloud Migration",
        "DevOps & CI/CD",
        "Containerization",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Cost Optimization",
      ],
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
    },
    {
      icon: <Zap className="w-12 h-12 text-[#0052CC]" />,
      title: "Digital Transformation",
      description:
        "Modernize your business processes and workflows with cutting-edge technology solutions that drive efficiency and growth.",
      features: [
        "Process Automation",
        "Digital Strategy Consulting",
        "System Integration",
        "Legacy System Migration",
        "Workflow Optimization",
        "Technology Roadmapping",
      ],
      technologies: [
        "AI/ML",
        "Automation Tools",
        "Integration Platforms",
        "Analytics",
        "Business Intelligence",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed project roadmap.",
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our team designs the system architecture and technical specifications.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Smooth deployment and ongoing maintenance and support services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            We provide comprehensive development solutions to bring your digital
            ideas to life. From mobile apps to web platforms, we've got you
            covered.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0066FF] to-blue-500 hover:from-[#0052CC] hover:to-blue-600 text-white rounded-full px-8"
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066FF] to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0066FF] mb-2">150+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0066FF] to-blue-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help bring your ideas to life with our
            expert development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-full px-8"
            >
              <Users className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-[#0066FF] rounded-full px-8"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
