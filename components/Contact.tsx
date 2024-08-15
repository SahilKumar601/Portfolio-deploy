"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/cn";
import { GlobeDemo } from "./Globe";
import { TextArea } from "./ui/textarea";
import emailjs from '@emailjs/browser'
import { toast } from "sonner";

export function Contact() {
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  })
  const [loading,setLoading] = useState(false);
  const handleChange = (e:any) =>{
    const {target} = e;
      const {id,value} =target;
      setForm({
        ...form,
        [id]: value,
      });
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    emailjs.send(
      `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
      {
        from_name: form.name,
        to_name: "Sahil Kumar",
        from_email: form.email,
        to_email: "sahilku601@gmail.com",
        message: form.message,
        reply_to:form.email
      },
      `${process.env.NEXT_PUBLIC_API_KEY}`
    ).then(()=>{
      setLoading(false);
      toast.success("Thank you, I'll contact as soon as possible")
      setForm({
        name:"",
        email:"",
        message:"",
      })
      console.log("email Sent")
      
    },(error)=>{
      setLoading(false);
      toast.error("Something went wrong");
    }
  )
  };
  return (
    <div id='contact' className="py-10">
      <h1 className="heading text-white">
        Contact <span className="text-purple">Me</span>
      </h1>

      <div className="flex flex-row items-center justify-start gap-x-24 gap-y-8 ml-20">
        <div className="max-w-md  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Get In Touch
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Let &apos; s collaborate on a project and bring our ideas to life
          </p>

          <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-1">
              <LabelInputContainer>
                <Label htmlFor="firstname">Your name</Label>
                <Input id="name" placeholder="Tyler" type="text" value={form.name} onChange={handleChange} required />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="contact@me.com" type="email" value={form.email} onChange={handleChange} required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-2">
              <Label htmlFor="message">Your Message</Label>
              <TextArea id="message" placeholder="write your message" value={form.message} onChange={handleChange} />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
        <div className="w-1/2 pb-15 mb-10 bg-black-100">
            <GlobeDemo />
        </div>

      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
