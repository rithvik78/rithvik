import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const SkillCard = ({ icon: Icon, title, items }: SkillCardProps) => {
  return (
    <Card className="transition-transform hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <Icon className="w-8 h-8 text-primary mb-2" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;