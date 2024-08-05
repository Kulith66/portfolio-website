"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 752246087",
  },
  {
    icon: <FaEnvelope />,
    title: "E-mail",
    description: "Kulithsathnindu123@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Gampaha, Sri Lanka",
  },
];

const Contact = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="flex flex-col justify-center items-center min-h-screen py-6 bg-black text-white"
    >
      <div className="container mx-auto">
        <div className="flex flex-row xl:flex-row gap-8">
          <div className="flex-1 flex flex-col items-start justify-center order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-blue-600">Let's Work Together</h3>
              <Input type="text" placeholder="First Name" className="rounded-md" />
              <Input type="text" placeholder="Last Name" className="rounded-md" />
              <Input type="email" placeholder="Email" className="rounded-md" />
              <Input type="tel" placeholder="Phone" className="rounded-md" />
              <Select>
                <SelectTrigger className="rounded-md border border-blue-600 px-4 py-2 text-base bg-primary text-white">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="rounded-md border border-blue-600 bg-[#27272c] text-white">
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="fullstack" className="p-2">FullStack Development</SelectItem>
                    <SelectItem value="backend" className="p-2">BackEnd Development</SelectItem>
                    <SelectItem value="ml" className="p-2">Machine Learning</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea placeholder="Your Message" className="rounded-md" />
              <Button type="submit" className="text-white hover:bg-blue-400 border border-blue-400 hover:border-blue-600 shadow-lg px-4 py-3 rounded-full font-semibold transition-all">Send</Button>
            </form>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] bg-[#27272c] text-blue-600 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
