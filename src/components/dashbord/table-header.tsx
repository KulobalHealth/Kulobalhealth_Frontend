import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface TableHeaderProps {
  title: string;
  text: string;
  component: React.ReactNode;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export default function TableHeaderComponent({
  handleSearch,
  title,
  text,
  component,
}: TableHeaderProps) {
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <small className="text-gray-500"> {text}</small>
        </div>
        {component}
      </div>
      <div className="relative mb-4 w-full max-w-md">
        <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10"
          onChange={handleSearch}
          placeholder="Search..."
          type="text"
        />
      </div>
    </>
  );
}
