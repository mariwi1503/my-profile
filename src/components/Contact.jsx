import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import LeafletMap from "./LeafletMap";

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact" className="px-5 mt-12">
      <div className="mb-6">
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
          <form
            action="#"
            className="flex flex-col gap-3 text-md mx-auto"
            onSubmit={handleSendMessage}
          >
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
                  className="focus:border-t-gray-900 lg:w-[230px] md:w-52 text-primary px-2 md:px-3"
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
                  className="focus:border-t-gray-900 lg:w-[230px] md:w-52 text-primary px-2 md:px-3"
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
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg text-center text-primary">
            <ExclamationTriangleIcon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2 ">Feature Under Development</h4>
            <p className="mb-4">
              This feature is currently under development. As an alternative, you can contact me through <strong>LinkedIn, Instagram</strong>, and other social media platforms.
            </p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-full px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
