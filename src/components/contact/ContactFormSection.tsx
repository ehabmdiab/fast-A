import { useState, FormEvent } from "react";
import { Button, Input, Label, Textarea } from "@relume_io/relume-ui";
import axios from "axios";

// HubSpot configuration
const HUBSPOT_PORTAL_ID = "21753076";
const HUBSPOT_FORM_ID = "ee56ecf5-0a99-416b-99fe-4dfceef31ee3";
const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

// Field mapping for HubSpot
const FIELD_MAPPING = {
  name: "firstname",
  email: "email",
  message: "message",
};

export const ContactFormSection = () => {
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate required fields
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
      // Prepare HubSpot data
      const hubspotData = {
        fields: [
          { name: FIELD_MAPPING.name, value: name },
          { name: FIELD_MAPPING.email, value: email },
          { name: FIELD_MAPPING.message, value: message },
        ],
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      // Submit to HubSpot
      await axios.post(HUBSPOT_ENDPOINT, hubspotData, {
        headers: { "Content-Type": "application/json" },
      });

      // Success handling
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
        className="relative z-10 justify-items-center w-full px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="/customer-journey-blueprint.png"
              alt="Relume placeholder image"
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
              <div className="p-4  bg-neutral-light-dark bg-opacity-20 rounded-md">
                <p className="text-white">
                  Thank you for your message! We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                id="contact-form"
                className="grid grid-cols-1 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2">
                    Name
                  </Label>
                  <Input type="text" id="name" name="name" required />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="message" className="mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message..."
                    className="min-h-[11.25rem] overflow-auto p-3"
                    required
                  />
                </div>
                {/* <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4"> */}
                {/* <Checkbox
                    className="bg-neutral-800"
                    id="terms"
                    // checked={acceptTerms}
                    // onChange={(e) =>
                    //   setAcceptTerms((e.target as HTMLInputElement).checked)
                    // }
                  />
                  <Label htmlFor="terms" className="cursor-pointer">
                    I accept the Terms
                  </Label> */}
                {/* </div> */}

                {submitError && (
                  <div className="text-red-400 text-sm">{submitError}</div>
                )}

                <div>
                  <Button
                    className="bg-neutral-800"
                    title="Submit"
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
