import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Revolutionize Your Workflow
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline your tasks, boost productivity, and collaborate seamlessly with our cutting-edge SaaS platform.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10">
                Get started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Powerful Features for Your Business
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={plan.featured ? "border-blue-500 border-2" : ""}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">${plan.price}<span className="text-base font-normal">/month</span></p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.featured ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                  Choose plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start your free trial today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              Discover how our SaaS platform can transform your business operations and boost productivity.
            </p>
            <Button className="mt-8 w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50">
              Get started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Task Management",
    description: "Organize and prioritize your tasks with our intuitive interface.",
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members in real-time.",
  },
  {
    title: "Analytics Dashboard",
    description: "Gain insights into your productivity with detailed analytics.",
  },
  {
    title: "Integration Hub",
    description: "Connect with your favorite tools and streamline your workflow.",
  },
  {
    title: "Automated Reporting",
    description: "Generate comprehensive reports with just a few clicks.",
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock support.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 29,
    features: [
      "Up to 5 team members",
      "Basic task management",
      "Limited integrations",
      "Email support",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    price: 79,
    featured: true,
    features: [
      "Up to 20 team members",
      "Advanced task management",
      "Unlimited integrations",
      "Priority email and chat support",
      "Analytics dashboard",
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: 199,
    features: [
      "Unlimited team members",
      "Custom features",
      "Dedicated account manager",
      "24/7 phone support",
      "Advanced security features",
    ],
  },
];

export default Index;
