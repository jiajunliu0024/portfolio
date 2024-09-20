import React from "react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const BlogEventSchedule = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div id="schedule" className="flex flex-col w-full h-auto items-center">
      <div className="flex flex-col mb-20 w-3/4 h-[400px] rounded-lg items-center bg-gray-50">
        <div className="flex flex-col items-center mt-20">
          <p className="text-5xl font-weight:800 mt-10">
            Let's Talk about your project
          </p>
          <p className="text-xl opacity-50 mt-5">
            Any good ideas on your mind, let's have a chat
          </p>
        </div>
        <div className="w-full space-x-4 mt-5 flex md:justify-center sm:justify-center">
          <button
            data-cal-namespace="15min"
            data-cal-link="jiajun-liu/15min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex text-white bg-gray-900 border-0 py-2 px-2 focus:outline-none hover:bg-white hover:text-black hover:scale-110 transition duration-700 ease-in-out rounded-lg text-base"
          >
            Schedule a Meeting
          </button>
          <a
            href="/contact"
            className="ml-2 inline-flex text-black bg-gray-100 border-0 py-2 px-2 focus:outline-none hover:bg-gray-200 hover:text-white transition duration-700 ease-in-out rounded-lg text-base"
          >
            Send me a message
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogEventSchedule;
