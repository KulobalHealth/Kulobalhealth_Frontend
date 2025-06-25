import { Card, CardContent } from '@/components/ui/card';

export default function SubscriptionStatus() {
  const plan = 'Premium (1 Year)';
  const expiryDate = 'June 30, 2025';
  const features = [
    'Patient Management',
    'Rapid Testing',
    'DDI Assessment',
    'Marketplace',
  ];

  return (
    <Card className="w-full rounded-xl">
      <div className="p-4 pb-0">
        <h2 className="font-semibold text-lg">Subscription Status</h2>
        <p className="text-muted-foreground text-sm">
          Your current plan and features
        </p>
      </div>

      <CardContent className="space-y-4 pt-4">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-muted-foreground">
            Current Plan
          </span>
          <span className="font-medium">{plan}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium text-muted-foreground">Expiry Date</span>
          <span className="font-medium">{expiryDate}</span>
        </div>

        <div>
          <h3 className="mb-1 font-semibold text-sm">Active Features</h3>
          <ul className="space-y-1 text-muted-foreground text-sm">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
