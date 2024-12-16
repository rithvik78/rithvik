import { Github, Linkedin, Mail, Code, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const highlightExperience = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  const projectsData = [
    {
      title: "EdgeAvatar",
      description: "Edge computing-based Text-to-Speech system using Nvidia Jetson Nano",
      fullDescription: "An innovative edge computing project that implements a Text-to-Speech system on Nvidia Jetson Nano hardware. This system processes text input locally and generates natural-sounding speech output with minimal latency.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      tags: ["Edge Computing", "TTS", "OpenAI API", "YourTTS"],
      link: "#",
      features: [
        "Real-time text-to-speech conversion",
        "Low-latency processing on edge device",
        "Natural voice synthesis using YourTTS",
        "OpenAI API integration for enhanced text processing"
      ],
      technologies: ["Nvidia Jetson Nano", "Python", "TensorFlow", "OpenAI API", "YourTTS"]
    },
    {
      title: "CryptoCart",
      description: "Secure shopping platform with crypto payments integration",
      fullDescription: "A modern e-commerce platform that enables secure cryptocurrency payments. The system integrates with MetaMask wallet and provides real-time conversion rates for multiple cryptocurrencies.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
      tags: ["MetaMask", "SQLAlchemy", "Python", "Crypto"],
      link: "#",
      features: [
        "Cryptocurrency payment integration",
        "Real-time price conversion",
        "Secure wallet connections",
        "Transaction history tracking"
      ],
      technologies: ["React", "Python", "MetaMask", "SQLAlchemy", "Web3.js"]
    },
    {
      title: "Network Analysis",
      description: "Influential node identification in multilayered networks",
      fullDescription: "A comprehensive network analysis tool that identifies influential nodes in complex, multilayered networks using advanced clustering algorithms and graph theory principles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["K-means", "DBSCAN", "Network Analysis"],
      link: "#",
      features: [
        "Multi-layer network visualization",
        "Influential node detection",
        "Cluster analysis with K-means and DBSCAN",
        "Interactive network graphs"
      ],
      technologies: ["Python", "NetworkX", "Scikit-learn", "D3.js"]
    },
    {
      title: "Yelp Data Analysis",
      description: "Strategic business insights using SQL++ and AsterixDB",
      fullDescription: "An advanced data analysis platform that processes and analyzes Yelp's extensive dataset using SQL++ and AsterixDB to provide valuable business insights and trends.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["SQL++", "AsterixDB", "Data Analysis"],
      link: "#",
      features: [
        "Large-scale data processing",
        "Business trend analysis",
        "Customer behavior insights",
        "Interactive data visualization"
      ],
      technologies: ["SQL++", "AsterixDB", "Python", "Tableau"]
    },
    {
      title: "Crime Data Analysis",
      description: "Spatial analysis using Spark SQL and QGIS",
      fullDescription: "A sophisticated crime data analysis tool that combines Spark SQL's processing power with QGIS's spatial analysis capabilities to identify and visualize crime patterns.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Spark SQL", "QGIS", "Big Data"],
      link: "#",
      features: [
        "Spatial crime pattern analysis",
        "Real-time data processing",
        "Interactive map visualization",
        "Predictive hotspot mapping"
      ],
      technologies: ["Spark SQL", "QGIS", "Python", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="hero-gradient">Rithvik Vukka</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Data Scientist passionate about creating impactful solutions through data analysis and machine learning
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-8">
            <Button 
              variant="default" 
              size="lg" 
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              onClick={() => {
                scrollToProjects();
                highlightExperience();
              }}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200 shadow hover:shadow-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isHighlighted ? 'bg-primary/10' : 'bg-white/80'
      } backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-3">Data Scientist</h3>
              <p className="text-muted-foreground mb-6">AAPI Data, Riverside | October 2023 - October 2024</p>
              <ul className="list-disc list-inside space-y-4 text-muted-foreground">
                <li>Developed and maintained dashboards visualizing 2020 Census data for over 40 Asian and 34 Native Hawaiian/Pacific Islander origin groups, improving community access to essential data resources. <a href="http://counts.aapidata.com/census2020/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Census Dashboard</a></li>
                <li>Enhanced the State Policy Portal, offering comprehensive insights into legislative trends affecting AAPI communities and fostering collaboration between state-level advocacy groups. <a href="http://facts.aapidata.com/policy-portal/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Policy Portal</a></li>
                <li>Conducted longitudinal analysis of state legislative representation, including the identification of patterns in representation by Asian American ethnic names.</li>
                <li>Performed descriptive analysis of the ACS IPUMS demographic data, focusing on Korea Town supermarket workers, utilizing the cleaned ACS 5-year dataset provided by the UCLA Labor Center.</li>
                <li>Analyzed patterns and trends in campaign contributions to federal offices based on public FEC records, providing insights into racial and ethnic contributions. <a href="http://facts.aapidata.com/campaign_contributions/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Campaign Contributions</a></li>
                <li>Built interactive web applications using R Shiny, Python and SQL to enhance user navigation of demographic data, adopted by multiple community organizations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 section-gradient text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={Code}
              title="Languages"
              items={["Python", "R", "SQL", "SQL++", "C"]}
            />
            <SkillCard
              icon={Briefcase}
              title="Data Technologies"
              items={["Apache Spark", "Hadoop", "BigQuery"]}
            />
            <SkillCard
              icon={User}
              title="Visualization"
              items={["Tableau", "Power BI", "R Shiny", "Plotly"]}
            />
            <SkillCard
              icon={Code}
              title="Cloud & Databases"
              items={["AWS", "Azure", "PostgreSQL", "MongoDB"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="https://github.com/rithvik78" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rithvik-vukka/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:rvukk002@ucr.edu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-200">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
