<<<<<<< HEAD
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface TableHeaderProps {
    title: string;
    text: string;
    component: React.ReactNode;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

export default function  TableHeaderComponent ({ handleSearch , title , text, component ,}: TableHeaderProps) {
    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <small className="text-gray-500"> {text}</small>
                </div>
                {component  }
            </div>
            <div className="relative w-full max-w-md mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10"
                    onChange={handleSearch}
                />
            </div>
        </>
    )
}
  
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
