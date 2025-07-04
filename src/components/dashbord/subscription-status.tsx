<<<<<<< HEAD
import { Crown, CheckCircle, Star } from "lucide-react"

export default function SubscriptionStatus() {
  const features = [
    { name: "Patient Management", included: true },
    { name: "Lab Integration", included: true },
    { name: "Prescription System", included: true },
    { name: "Advanced Analytics", included: false },
    { name: "Telemedicine", included: false },
  ]

  return (
    <div className="bg-white border-2 border-green-100 rounded-2xl p-6 dark:bg-transparent dark:text-white dark:border-gray-800 cursor-pointer">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Subscription</h3>
        <Crown className="w-6 h-6 text-green-600" />
      </div>

      <div className="mb-6 ">
        <div className="flex items-center justify-between mb-4 ">
          <span className="text-sm font-semibold text-gray-700 dark:text-white">Current Plan</span>
          <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-xl border-2 border-green-200">
            <Star className="w-4 h-4 text-green-700" />
            <span className="text-green-800 font-bold text-sm">Professional</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600 dark:text-white">Monthly Cost</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">GHS 299</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-600 dark:text-white">Renewal Date</span>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">March 15, 2024</span>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white">Plan Features</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl dark:bg-transparent dark:text-white border-2 border-transparent hover:border-green-200 transition-all duration-200">
            <span className="text-sm text-gray-700 dark:text-white">{feature.name}</span>
            <CheckCircle className={`w-5 h-5 ${feature.included ? "text-green-600" : "text-gray-300 "}`} />
          </div>
        ))}
      </div>

      <button className="w-full bg-green-600 dark:bg-transparent dark:border hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 border-2 cursor-pointer dark:hover:bg-green-700 border-green-600 hover:border-green-700">
        Upgrade to Premium
      </button>
    </div>
  )
}
=======
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
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
