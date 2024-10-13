// function Contact() {
//   return (
//     <div>
//       <div className=""></div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import LeafletMap from "./LeafletMap";

export function Contact() {
  return (
    <section id="contact" className="px-5 mt-10">
      <div className="mb-10">
        <h3 className="text-3xl sm:text-4xl font-medium">Contact</h3>
        <div className="h-1 w-28 bg-orange rounded-lg mt-2"></div>
      </div>
      <p className="mb-5 text-lg font-semibold">
        For business inquiries, professional opportunities, or networking,
        please feel free to contact me
      </p>
      {/* map container */}
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="z-10 w-full md:w-1/2">
          <LeafletMap />
        </div>
        <div className="w-full md:w-1/2">
          <form action="#" className="flex flex-col gap-3 text-md mx-auto">
            <div className="flex gap-3 justify-between">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium "
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900 lg:w-52 md:w-48 text-primary px-2 md:px-3"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900 lg:w-52 md:w-48 text-primary px-2 md:px-3"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder=" name@email.com"
                name="email"
                className="focus:border-t-gray-900 px-2 md:px-3 text-primary"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium "
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder=" Message"
                name="message"
                className="focus:border-t-gray-900 p-2 md:p-3 text-primary rounded-lg"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full bg-orange text-primary">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
