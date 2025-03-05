import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const useCalendar = (namespace) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [namespace]);
};
