<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { africanRealities, pricingPlans } from "./data";

export default function AfricanRealitiesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Built for African realities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {africanRealities.map((item, index) => (
            <div key={index} className="text-center max-w-[275px] mx-auto">
              <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8  mx-auto mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.isPopular ? "border-[#0EA5E9] border-2 relative" : ""
              }`}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0EA5E9] rounded-full text-white">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className={`text-3xl font-bold ${plan.priceColor}`}>
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className={
                    plan.title === "Enterprise"
                      ? "w-full"
                      : `w-full ${plan.buttonClass}`
                  }
                  variant={plan.title === "Enterprise" ? "outline" : "default"}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { africanRealities, pricingPlans } from './data';

export default function AfricanRealitiesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold text-3xl">
          Built for African realities
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {africanRealities.map((item, index) => (
            <div className="mx-auto max-w-[275px] text-center" key={index}>
              <item.icon className={`h-12 w-12 ${item.color} mx-auto mb-4`} />
              <h3 className="mb-2 font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mb-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card
              className={`${
                plan.isPopular ? 'relative border-2 border-[#0EA5E9]' : ''
              }`}
              key={index}
            >
              {plan.isPopular && (
                <Badge className="-top-3 -translate-x-1/2 absolute left-1/2 transform rounded-full bg-[#0EA5E9] text-white">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className={`font-bold text-3xl ${plan.priceColor}`}>
                  {plan.price}
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className={
                    plan.title === 'Enterprise'
                      ? 'w-full'
                      : `w-full ${plan.buttonClass}`
                  }
                  variant={plan.title === 'Enterprise' ? 'outline' : 'default'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50
