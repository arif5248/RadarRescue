import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HypothesisSearchProps {
  onSearch: (situation: string) => void;
  isLoading: boolean;
}

export const HypothesisSearch = ({ onSearch, isLoading }: HypothesisSearchProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
        <div className="relative flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-2 focus-within:border-primary focus-within:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all">
          <Search className="w-5 h-5 text-muted-foreground ml-2" />
          <Input
            type="text"
            placeholder='Enter a scenario (e.g., "What if forest loss increases by 15%?")'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Generate
          </Button>
        </div>
      </div>
    </form>
  );
};
