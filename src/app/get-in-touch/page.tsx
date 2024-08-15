import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { MdEmail, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import CustomBanner from "@/components/global/CustomBanner";
import GetInTouchForm from "@/components/pages/get-in-touch/GetInTouchForm";
import Image from "next/image";

export default function GetInTouch() {
  return (
    <div className="relative mb-10">
      <CustomBanner title="Get in Touch" imageSrc="/images/banner.png" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-xl h-full">
            <CardBody className="p-8 overflow-hidden">
              <p className="text-primary text-sm font-bold">Get in Touch</p>
              <h2 className="text-4xl font-bold mb-4">
                Let&apos;s Chat, Reach Out to Us
              </h2>
              <p className="text-gray-600">
                Have questions or feedback? We&apos;re here to help. Send us a
                message, and we&apos;ll respond within 24 hours.
              </p>
              <Divider className="my-6" />
              <GetInTouchForm />
            </CardBody>
          </Card>

          <Card className="shadow-xl h-full">
            <CardBody className="p-8">
              <Image
                src="/images/get-in-touch.png"
                alt="Contact"
                width={400}
                height={300}
                className="rounded-lg w-full h-1/2 object-cover object-center mb-6"
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
        </div>
      </div>
    </div>
  );
}
