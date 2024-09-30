"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Email = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false); // Track email sent status

  // Function to handle form submission (email sending)
  const sendEmail = (e) => {
    e.preventDefault();

    // Use emailjs to send the form data
    emailjs
      .sendForm(
        "service_pfn8olp",
        "template_aa987of",
        form.current,
        "1KOpfYA2jaXvbVW5A"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setEmailSent(true); // Set success state
          setTimeout(() => setEmailSent(false), 3000); // Hide success alert after 3 seconds
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      {/* Success Alert */}
      {emailSent && (
        <div
          className="fixed z-50 flex items-center gap-2 p-4 mb-4 text-green-500 bg-green-100 rounded-md shadow-lg top-4 right-4"
          role="alert"
        >
          {/* Tick Icon */}
          <Image src="/assets/skills/tick.svg" alt="" className="w-6 h-6" width={24} height={24}/>

          {/* Success Message */}
          <span>Email sent successfully!</span>
        </div>
      )}

      {/* Contact Form */}
      <form
        className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3> 
        <p className="text-white/60">
          Reach out to us for collaborations, services, or inquiries.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Input type="text" placeholder="First Name" name="f_name" required />
          <Input type="text" placeholder="Last Name" name="l_name" required />
          <Input type="email" placeholder="Email" name="gmail" required />
          <Input type="tel" placeholder="Phone Number" name="phone" required />
        </div>

        <Textarea
          className="h-[200px]"
          placeholder="Type your message here."
          name="message"
          required
        />

        <Button size="md" className="w-full text-lg" type="submit">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Email;
