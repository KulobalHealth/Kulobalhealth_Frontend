import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, contactMethods, faqSections, inquiryTypes } from "./data";

export default function ContactPage() {
  return (
    <div>
      {" "}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-md px-4">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Icons.Banner className="h-full w-full object-cover opacity-20" />
        </div>
        <div className="container relative mx-auto py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-5xl text-primary-600 dark:text-primary-400">
              Get in Touch with Us
            </h1>
            <p className="mb-8 text-gray-600 text-lg dark:text-white">
              Have questions about our platform? Want to become a partner?
              We&apos;re here to help you transform your healthcare supply
              chain.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="#contact-form">
                <Button className="rounded-lg bg-primary-600 px-8 py-3 text-white transition-colors hover:bg-primary-700">
                  Send us a Message
                </Button>
              </Link>
              <Link href="#faq">
                <Button
                  className="rounded-lg border-primary-600 px-8 py-3 text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
                  variant="outline"
                >
                  View FAQs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="bg-white px-4 dark:bg-background">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              How to Reach Us
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-white">
              Choose the method that works best for you
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {contactMethods.map((method) => (
              <div
                className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
                key={method.id}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-800 text-lg dark:text-gray-100">
                  {method.title}
                </h3>
                <p className="mb-4 text-gray-600 text-sm dark:text-white">
                  {method.description}
                </p>
                <div className="space-y-1">
                  {method.details.map((detail, idx) => (
                    <div
                      className="font-medium text-primary-600 text-sm dark:text-primary-400"
                      key={`${method.id}-detail-${idx}`}
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="bg-gray-50 px-4 dark:bg-background" id="contact-form">
        <div className="container mx-auto py-16">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
                Send Us a Message
              </h2>
              <p className="mb-8 text-gray-600 dark:text-white">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible. Whether you&apos;re a pharmacy looking to
                streamline your procurement or a supplier wanting to expand your
                reach, we&apos;re here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.items.map((item) => (
                  <div className="flex items-start" key={item.id}>
                    <item.icon className="mt-1 mr-3 h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm dark:text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-background">
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                      First Name *
                    </label>
                    <Input
                      className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                      placeholder="Your first name"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                      Last Name *
                    </label>
                    <Input
                      className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                      placeholder="Your last name"
                      required
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                    Email Address *
                  </label>
                  <Input
                    className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                    placeholder="your.email@example.com"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                    Phone Number
                  </label>
                  <Input
                    className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                    placeholder="+233 XX XXX XXXX"
                    type="tel"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                    Company/Organization
                  </label>
                  <Input
                    className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                    placeholder="Your company name"
                    type="text"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                    Inquiry Type *
                  </label>
                  <select
                    className="w-full rounded-lg border border-gray-300 p-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 dark:border-neutral-600 dark:bg-neutral-900 dark:text-gray-100"
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
                  <label className="mb-2 block font-medium text-gray-700 text-sm dark:text-white">
                    Message *
                  </label>
                  <Textarea
                    className="w-full dark:border-neutral-600 dark:bg-neutral-900"
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                  />
                </div>

                <Button
                  className="w-full rounded-lg bg-primary-600 py-3 text-white transition-colors hover:bg-primary-700"
                  type="submit"
                >
                  Send Message
                </Button>

                <p className="text-center text-gray-500 text-xs dark:text-gray-400">
                  By submitting this form, you agree to our Privacy Policy and
                  Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="bg-white px-4 dark:bg-background" id="faq">
        <div className="container mx-auto py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-4xl text-gray-800 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-white">
              Find quick answers to common questions about Kulobal Health
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {faqSections.map((section) => (
                <div key={section.id}>
                  <h3 className="mb-4 font-semibold text-gray-800 text-xl dark:text-gray-100">
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.faqs.map((faq) => (
                      <div
                        className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
                        key={faq.id}
                      >
                        <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-100">
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 text-sm dark:text-white">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600 dark:text-white">
                Don&apos;t see your question here?
              </p>
              <Link href="#contact-form">
                <Button
                  className="rounded-lg border-primary-600 px-8 py-3 text-primary-600 transition-colors hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20"
                  variant="outline"
                >
                  Ask Us Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-4 dark:bg-background">
        <div className="container mx-auto py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-800 dark:text-white">
              Our Location
            </h2>
            <p className="text-gray-600 dark:text-white">
              Visit us at Wangara Green Ventures in Accra, Ghana
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-4">
                <h3 className="mb-2 font-semibold text-gray-800 text-xl dark:text-gray-100">
                  Wangara Green Ventures
                </h3>
                <div className="mb-2 flex items-center text-gray-600 dark:text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Accra, Ghana</span>
                </div>
                <div className="mb-4 flex items-center text-gray-600 dark:text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+233 25 678 0758</span>
                </div>
              </div>

              <div className="h-64 overflow-hidden rounded-lg bg-gray-200 dark:bg-neutral-800">
                <iframe
                  allowFullScreen={true}
                  className="rounded-lg"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6946925847515!2d-0.15756278546422656!3d5.635001994336073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b0074a0f5b1%3A0x26dc1c7e5a6684a5!2sWangara%20Green%20Ventures!5e0!3m2!1sen!2sgh!4v1733661600000!5m2!1sen!2sgh"
                  style={{ border: 0 }}
                  title="Google Map"
                  width="100%"
                />
              </div>

              <div className="mt-4 text-center">
                <a
                  className="inline-flex items-center font-medium text-primary-600 text-sm hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  href="https://www.google.com/maps/place/Wangara+Green+Ventures/@5.6350019,-0.1575628,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b0074a0f5b1:0x26dc1c7e5a6684a5!8m2!3d5.6350019!4d-0.1575628!16s%2Fg%2F11fqptfxfx?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MapPin className="mr-1 h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
