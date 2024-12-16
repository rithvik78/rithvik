import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectDialog from "./ProjectDialog";

interface ProjectCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  link: string;
  features?: string[];
  technologies?: string[];
}

const ProjectCard = ({ title, description, fullDescription, image, tags, link, features, technologies }: ProjectCardProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden card-hover bg-white/80 backdrop-blur-sm cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <ProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        project={{
          title,
          description,
          fullDescription,
          image,
          tags,
          link,
          features,
          technologies,
        }}
      />
    </>
  );
};

export default ProjectCard;