"use client";

import { useState, useEffect } from "react";

// Simulate a delay by throwing a Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let isLoading = true; // Track whether the component is loading
const Views = () => {
  if (isLoading) {
    // Suspend rendering by throwing a Promise
    throw delay(3000).then(() => {
      isLoading = false; // Mark as loaded after the delay
    });
  }

  // Render the final content after the delay
  return (
    <div style={{ textAlign: "center" }}>
      10.3k Views 🪟
    </div>
  );
};

export default Views;