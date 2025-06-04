import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { contactMethods, inquiryTypes, contactInfo, faqSections } from "./data";

export default function ContactPage() {
  return (
    <div>
      <section className="px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container py-20 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-4 text-5xl font-bold text-primary-600">
              Get in Touch with Us
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Have questions about our platform? Want to become a partner?
              We&apos;re here to help you transform your healthcare supply
              chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact-form">
                <Button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  Send us a Message
                </Button>
              </Link>
              <Link href="#faq">
                <Button
                  variant="outline"
                  className="px-8 py-3 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  View FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 bg-white">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              How to Reach Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-center items-center bg-primary-600 w-16 h-16 rounded-lg mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                <div className="space-y-1">
                  {method.details.map((detail, idx) => (
                    <div
                      key={`${method.id}-detail-${idx}`}
                      className="text-primary-600 font-medium text-sm"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="px-4 bg-gray-50">
        <div className="container py-16 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. Whether you&apos;re a pharmacy looking to
                streamline your procurement or a supplier wanting to expand your
                reach, we&apos;re here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.items.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <item.icon className="w-5 h-5 text-primary-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your first name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your last name"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <Input
                    type="text"
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.id} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 bg-white">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about Kulobal Health
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {faqSections.map((section) => (
                <div key={section.id}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.faqs.map((faq) => (
                      <div key={faq.id} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Don&apos;t see your question here?
              </p>
              <Link href="#contact-form">
                <Button
                  variant="outline"
                  className="px-8 py-3 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Ask Us Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 bg-gray-50">
        <div className="container py-16 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600">
              Visit us at our office in Accra, Ghana
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">
                  Interactive map will be embedded here
                </p>
                <p className="text-gray-400 text-sm">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
