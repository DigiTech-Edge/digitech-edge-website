"use client";

import { Input, Textarea, Checkbox, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/schemas/contact.schema";
import { sendContactEmail } from "@/utils/email";

export default function GetInTouchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await sendContactEmail(data);
      
      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.form
      className="flex flex-col gap-4 h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-grow flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            radius="sm"
            labelPlacement="outside"
            label="First Name"
            placeholder="Eg. John"
            {...register("firstName")}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
          />
          <Input
            radius="sm"
            labelPlacement="outside"
            label="Last Name"
            placeholder="Eg. Doe"
            {...register("lastName")}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
          />
        </div>

        <Input
          radius="sm"
          labelPlacement="outside"
          label="Email Address"
          placeholder="Eg. johndoe@gmail.com"
          {...register("email")}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
        />
        <Textarea
          radius="sm"
          labelPlacement="outside"
          label="Message"
          placeholder="Leave a message"
          {...register("message")}
          isInvalid={!!errors.message}
          errorMessage={errors.message?.message}
        />
        <Checkbox
          {...register("privacyPolicy")}
          isInvalid={!!errors.privacyPolicy}
        >
          I agree to our privacy policy
        </Checkbox>
        {errors.privacyPolicy && (
          <span className="text-danger text-sm">
            {errors.privacyPolicy.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        color="primary"
        className="w-full mt-auto"
        isLoading={isSubmitting}
      >
        Send message
      </Button>
    </motion.form>
  );
}
