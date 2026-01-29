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
      const response = await apiRequest("POST", "/api/booking-enquiry", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Enquiry Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
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

          <div className="space-y-6">
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

            <Card className="bg-card border-card-border">
              <CardContent className="p-6">
                <h3 className="text-base font-semibold text-foreground mb-3">
                  Property Address
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Le Vaal Manor</p>
                  <p>Parys Golf & Country Estate</p>
                  <p>Parys, Free State</p>
                  <p>South Africa, 9585</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
