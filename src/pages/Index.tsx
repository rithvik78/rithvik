import { Github, Linkedin, Mail, Code, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer passionate about creating beautiful web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="default" size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Project 1"
              description="A beautiful web application built with React and TypeScript"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              tags={["React", "TypeScript", "Tailwind"]}
              link="#"
            />
            <ProjectCard
              title="Project 2"
              description="Full-stack application with modern technologies"
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              tags={["Next.js", "Node.js", "MongoDB"]}
              link="#"
            />
            <ProjectCard
              title="Project 3"
              description="Mobile-first responsive design project"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              tags={["React Native", "Firebase"]}
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard icon={Code} title="Frontend" items={["React", "TypeScript", "Tailwind CSS"]} />
            <SkillCard icon={Briefcase} title="Backend" items={["Node.js", "Python", "PostgreSQL"]} />
            <SkillCard icon={User} title="Design" items={["Figma", "Adobe XD", "UI/UX"]} />
            <SkillCard icon={Code} title="Tools" items={["Git", "Docker", "AWS"]} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
            <a href="mailto:your.email@example.com">
              <Button variant="outline" size="lg">
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