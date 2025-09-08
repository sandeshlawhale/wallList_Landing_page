"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Copy } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("support@wallist.com");
    toast({
      title: "Copied!",
      description: "support@wallist.com copied to clipboard.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    toast({
      title: "Message sent!",
      description: "We’ll get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="flex-1 relative w-full py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Get in Touch
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reach out directly or drop us a message below.
          </p>
        </motion.div>

        <motion.div className="flex items-center justify-center gap-4 w-full">
          <Button
            variant="outline"
            className="flex-1 flex items-center gap-2 rounded-md cursor-pointer"
            onClick={handleCopy}
          >
            <Copy className="h-4 w-4" />
            Copy Email
          </Button>
          <Button className="flex-1 flex items-center gap-2 rounded-md" asChild>
            <a href="mailto:sandeshlawhale@gmail.com" target="_blank">
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </Button>
        </motion.div>

        <div className="relative flex items-center justify-center my-6">
          <div className="w-full h-px bg-border"></div>
          <span className="absolute px-3 text-sm text-muted-foreground bg-background">
            or
          </span>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md"
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="rounded-md"
          />
          <Button
            type="submit"
            className="w-full rounded-md shadow-sm hover:shadow-md transition"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
