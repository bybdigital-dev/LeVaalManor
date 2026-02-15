import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { Phone } from "lucide-react";
import { useRef } from "react";

const WORKER_URL = "https://forms.afriwafel.co.za/submit";
const FORM_ID = "vaal-contact";


const bookingFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const t0Ref = useRef(Date.now())

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      startDate: "",
      endDate: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      // Build payload the Worker expects (same style as your working example)
      const payload: Record<string, any> = {
        ...data,

        // REQUIRED: Worker identifies the KV form config from this
        formId: FORM_ID,

        // Often used in templates / emails
        name: [data.firstName, data.lastName].filter(Boolean).join(" "),

        // Anti-bot timer (matches your working example approach)
        _t0: t0Ref.current,

        // Optional honeypot (safe to include even if Worker ignores it)
        hp: "",
      };

      // IMPORTANT: Post to WORKER_URL ONLY (no /{FORM_ID} at end)
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // If the Worker ever redirects, treat as success (same as your working example)
      if (response.type === "opaqueredirect" || response.redirected) {
        return { ok: true };
      }

      // Try parse json, but keep useful error text if not JSON
      const text = await response.text();
      let json: any = {};
      try {
        json = text ? JSON.parse(text) : {};
      } catch {
        // not json; leave json as {}
      }

      if (!response.ok || json?.ok === false) {
        throw new Error(json?.error || text || "Submission failed");
      }

      return json;
    },

    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Enquiry Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
    },

    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error?.message || "Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: BookingFormData) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Book Your Stay
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
            Ready to experience Le Vaal Manor? Submit your enquiry and we'll respond within 24 hours.
          </p>
        </div>

        {/* SINGLE COLUMN STACK */}
        <div className="flex flex-col space-y-8">

          {/* Booking Enquiry Card */}
          <Card className="bg-card border-card-border">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Send className="w-4 h-4 text-accent" />
                Booking Enquiry
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your enquiry has been submitted successfully. We'll be in touch soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSubmitted(false)}
                    data-testid="button-new-enquiry"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">First Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                data-testid="input-first-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Smith"
                                data-testid="input-last-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+27 12 345 6789"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Check-In Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                data-testid="input-start-date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm">Check-Out Date</FormLabel>
                            <FormControl>
                              <Input
                                type="date"
                                data-testid="input-end-date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your stay requirements, special requests, or any questions you have..."
                              className="min-h-[120px] resize-none"
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={mutation.isPending}
                      data-testid="button-submit-enquiry"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          {/* CALL US TODAY */}
          <Card className="bg-card border-card-border">
            <CardContent className="p-6 text-center">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Prefer to talk?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Call us today and we’ll be happy to assist you.
              </p>
              <Button
                variant="default"
                size="lg"
                className="w-full flex items-center justify-center"
                asChild
              >
                <a href="tel:+27844787501">
                  <Phone className="w-4 h-4 mr-2" /> Call now
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* MAP */}
          <Card className="bg-card border-card-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.07726929478!2d27.42!3d-26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e96ef63893c1e25%3A0x1c03dd7c8d4f77dd!2sParys%20Golf%20%26%20Country%20Estate!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Parys Golf Estate Location"
                  data-testid="map-location"
                />
              </div>
            </CardContent>
          </Card>

          {/* Property Address */}
          <Card className="bg-card border-card-border">
            <CardContent className="p-6">
              <h3 className="text-base font-semibold text-foreground mb-3">
                Property Address
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Le Vaal Manor</p>
                <p>2980 Kingfisher Ave</p>
                <p>Parys Golf & Country Estate</p>
                <p>South Africa, 9585</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
