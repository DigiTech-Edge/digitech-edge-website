"use client";

import { Input, Textarea, Checkbox, Button } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function GetInTouchForm() {
  return (
    <motion.form
      className="flex flex-col gap-4 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-grow flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            radius="sm"
            labelPlacement="outside"
            label="First Name"
            placeholder="Eg. John"
          />
          <Input
            radius="sm"
            labelPlacement="outside"
            label="Last Name"
            placeholder="Eg. Doe"
          />
        </div>

        <Input
          radius="sm"
          labelPlacement="outside"
          label="Email Address"
          placeholder="Eg. johndoe@gmail.com"
        />
        <Textarea
          radius="sm"
          labelPlacement="outside"
          label="Message"
          placeholder="Leave a message"
        />
        <Checkbox className="mb-4">I agree to our privacy policy</Checkbox>
      </div>
      <Button color="primary" className="w-full mt-auto">
        Send message
      </Button>
    </motion.form>
  );
}
