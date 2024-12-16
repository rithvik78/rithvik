import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription?: string;
    image: string;
    tags: string[];
    link: string;
    features?: string[];
    technologies?: string[];
  };
}

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-lg mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          {project.fullDescription && (
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>
          )}

          {project.features && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="pt-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              View Project
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;