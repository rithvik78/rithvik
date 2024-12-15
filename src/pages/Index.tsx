import { Github, Linkedin, Mail, Code, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Rithvik Vukka</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Data Scientist passionate about creating impactful solutions through data analysis and machine learning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg" className="w-full sm:w-auto">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Yelp Data Analysis"
              description="Strategic business insights using SQL++ and AsterixDB"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              tags={["SQL++", "AsterixDB", "Data Analysis"]}
              link="#"
            />
            <ProjectCard
              title="Crime Data Analysis"
              description="Spatial analysis using Spark SQL and QGIS"
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              tags={["Spark SQL", "QGIS", "Big Data"]}
              link="#"
            />
            <ProjectCard
              title="Network Analysis"
              description="Influential node identification in multilayered networks"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              tags={["K-means", "DBSCAN", "Network Analysis"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Get In Touch</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/rithvik78" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/rithvik-vukka/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:rvukk002@ucr.edu">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
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