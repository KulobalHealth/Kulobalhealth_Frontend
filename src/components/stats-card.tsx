interface StatCardProps {
  title: string;
  value: number;
  status: string;
  statusColor?: string;
}

export function StatCard({
  title,
  value,
  status,
  statusColor = "text-emerald-500",
}: StatCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-muted-foreground text-sm uppercase">
            {title}
          </p>
          <h2 className="font-bold text-4xl">{value}</h2>
        </div>
        <span className={`text-sm ${statusColor}`}>{status}</span>
      </div>
    </div>
  );
}
