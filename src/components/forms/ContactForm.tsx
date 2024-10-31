"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { Dispatch, SetStateAction } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { css } from "root/styled-system/css";
import { Textarea } from "../ui/textarea";

const formClasses = css({
  maxWidth: "300px",
  width: "100%",
  background: "zinc.50",
  padding: "2",
  rounded: "lg",
  spaceY: "2",
  borderWidth: "!1px",
  borderColor: "!zinc.300",
  height: "100%",
});

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Not valid Email"),
  message: z.string().min(1, "Message is required"),
});

interface ContactFormProps {
  updateTitle: Dispatch<SetStateAction<string | undefined>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ updateTitle }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const sendReq = async (fields: z.infer<typeof formSchema>) => {
    const res = await fetch("/api", {
      method: "POST",

      body: JSON.stringify(fields),
    });

    if (!res.ok) {
      return;
    }

    const responseData: PostContactResponse = await res.json();

    updateTitle(responseData.message);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    sendReq(values);
  };
  return (
    <Form {...form}>
      <form className={formClasses} onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className={css({ maxHeight: "200px" })}
                  placeholder="Your message here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={css({ marginTop: "!2" })}>Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
