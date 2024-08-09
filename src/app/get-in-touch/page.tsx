"use client";

import {
  Input,
  Textarea,
  Checkbox,
  Button,
  Image,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import CustomBanner from "@/components/global/CustomBanner";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function GetInTouch() {
  return (
    <div className="relative mb-10">
      <CustomBanner title="Get in Touch" imageSrc="/images/banner.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-40 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-xl h-full">
              <CardBody className="p-8">
                <p className="text-primary text-sm font-bold">Get in Touch</p>
                <h2 className="text-4xl font-bold mb-4">
                  Let&apos;s Chat, Reach Out to Us
                </h2>
                <p className=" text-gray-600">
                  Have questions or feedback? We&apos;re here to help. Send us a
                  message, and we&apos;ll respond within 24 hours.
                </p>
                <Divider className="my-6" />
                <form className="flex flex-col gap-2 h-full">
                  <div className="flex-grow">
                    <div className="grid grid-cols-2 gap-4 mb-4">
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
                      className="mb-4"
                    />
                    <Textarea
                      radius="sm"
                      labelPlacement="outside"
                      label="Message"
                      placeholder="Leave a message"
                      className="mb-4"
                    />
                    <Checkbox className="mb-4">
                      I agree to our privacy policy
                    </Checkbox>
                  </div>
                  <Button color="primary" className="w-full mt-auto">
                    Send message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-xl h-full">
              <CardBody className="p-8">
                <motion.img
                  src="/images/get-in-touch.png"
                  alt="Contact"
                  className="rounded-lg w-full h-1/2 object-fit object-center mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start gap-2 p-4 bg-gray-100 rounded-lg">
                    <p className="p-2 bg-gray-300 rounded-full">
                      <MdEmail size={24} color="blue" />
                    </p>
                    <div className="flex flex-col">
                      <span className="text-primary text-sm font-bold">
                        Email
                      </span>
                      <span>papakwadwobona@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-4 bg-gray-100 rounded-lg">
                    <p className="p-2 bg-gray-300 rounded-full">
                      <MdPhone size={24} color="blue" />
                    </p>
                    <div className="flex flex-col">
                      <span className="text-primary text-sm font-bold">
                        Phone
                      </span>
                      <span>(+233) 540 575 329</span>
                    </div>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-center space-x-4 pt-0 text-3xl">
                <FaFacebookF className="text-gray-600 hover:text-primary cursor-pointer" />
                <FaTwitter className="text-gray-600 hover:text-primary cursor-pointer" />
                <FaLinkedinIn className="text-gray-600 hover:text-primary cursor-pointer" />
                <FaInstagram className="text-gray-600 hover:text-primary cursor-pointer" />
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
