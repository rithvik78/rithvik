import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const SkillCard = ({ icon: Icon, title, items }: SkillCardProps) => {
  return (
    <Card className="card-hover bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <Icon className="w-10 h-10 text-white mb-3" />
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item} className="text-white/80">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;