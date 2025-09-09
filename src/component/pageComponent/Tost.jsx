import React from 'react'
import { Toaster } from "react-hot-toast";

const Tost = () => {
  return (
    <>
    {/* Global toaster */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "#4CAF50",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#F44336",
              color: "#fff",
            },
          },
        }}
      />
    </>
  )
}

export default Tost
