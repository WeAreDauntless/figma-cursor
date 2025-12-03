"use client";

import { useEffect } from "react";
import markerSDK from "@marker.io/browser";

export function MarkerProvider() {
  useEffect(() => {
    // Don't load marker.io in development
    if (process.env.NODE_ENV === "development") {
      return;
    }

    async function initMarker() {
      try {
        await markerSDK.loadWidget({
          project: "692dc1a10623ad511cb676db",
        });
      } catch (error) {
        console.error("Failed to load Marker.io widget:", error);
      }
    }

    initMarker();
  }, []);

  return null;
}

