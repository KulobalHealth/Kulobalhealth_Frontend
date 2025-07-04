import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet } from "lucide-react";

interface ExportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
}

export function ExportModal({ open, onOpenChange, title }: ExportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>("");

  const exportFormats = [
    { id: "xls", label: "XLS", icon: FileSpreadsheet, color: "bg-green-500" },
    { id: "doc", label: "DOC", icon: FileText, color: "bg-blue-500" },
    { id: "pdf", label: "PDF", icon: FileText, color: "bg-red-500" },
  ];

  const handleExport = () => {
    if (selectedFormat) {
      console.log(`Exporting ${title} as ${selectedFormat.toUpperCase()}`);
      onOpenChange(false);
      setSelectedFormat("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md ">
        <DialogHeader className="relative flex justify-center items-center">
          <div className="flex items-center text-center flex-col space-y-2 mb-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-14 h-14 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-center">{title}</DialogTitle>
              <p className="text-sm text-muted-foreground text-center">
                Kindly select the format to export data.
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="flex justify-center space-x-4 my-6">
          {exportFormats.map((format) => (
            <button
              key={format.id}
              type="button"
              onClick={() => setSelectedFormat(format.id)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-lg border-2 transition-colors ${
                selectedFormat === format.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`w-12 h-12 ${format.color} rounded-lg flex items-center justify-center`}
              >
                <format.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium">{format.label}</span>
            </button>
          ))}
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            rounded="full"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            rounded="full"
            onClick={handleExport}
            disabled={!selectedFormat}
            className="flex-1"
          >
            Export Data
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
