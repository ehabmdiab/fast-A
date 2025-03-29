import { useState, FormEvent } from "react";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import axios from "axios";

// HubSpot configuration
const HUBSPOT_PORTAL_ID = "21753076";
const HUBSPOT_FORM_ID = "ee56ecf5-0a99-416b-99fe-4dfceef31ee3";
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

// Field mapping for HubSpot
const FIELD_MAPPING: Record<string, string> = {
  name: "firstname",
  email: "email",
  message: "message",
  title: "jobtitle",
  company: "company",
  website: "website",
  mobile: "mobilephone",
};

export const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Required fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      setSubmitError("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const hubspotData = {
        fields: Object.entries(FIELD_MAPPING)
          .map(([formField, hubspotField]) => {
            const value = formData.get(formField);
            return value ? { name: hubspotField, value } : null;
          })
          .filter(Boolean),
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      await axios.post(HUBSPOT_ENDPOINT, hubspotData, {
        headers: { "Content-Type": "application/json" },
      });

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-neutral-dark flex flex-col items-center justify-center">
      <div
        className="absolute brightness-[0.7] inset-0 bg-[url('/contact-sec-1.webp')] bg-cover bg-center bg-no-repeat opacity-[0.5]"
        aria-hidden="true"
      ></div>

      <div
        id="relume"
        className="relative z-10 w-full px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="/customer-journey-blueprint.png"
              alt="Relume placeholder"
              className="size-full object-cover"
            />
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4">Connect</p>
              <h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-6xl">
                Get in Touch
              </h2>
              <p className="md:text-md">
                We're here to assist you with any inquiries.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-4 bg-neutral-light-dark bg-opacity-20 rounded-md">
                <p className="text-white">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                <div className="grid w-full items-center">
                  <Label htmlFor="name">Name *</Label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email">Email *</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    className="min-h-[11.25rem] p-3"
                  />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="title">Title</Label>
                  <Input type="text" id="title" name="title" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="company">Company</Label>
                  <Input type="text" id="company" name="company" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="website">Website</Label>
                  <Input type="text" id="website" name="website" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="mobile">Mobile</Label>
                  <Input type="number" id="mobile" name="mobile" />
                </div>

                {submitError && (
                  <div className="text-red-400 text-sm">{submitError}</div>
                )}

                <div>
                  <Button
                    className="bg-neutral-800"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
