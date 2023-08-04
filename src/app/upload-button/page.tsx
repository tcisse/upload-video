"use client";

import { UploadButton } from "@uploadthing/react";

import { OurFileRouter } from "../api/uploadthing/core";

export default function UploadButtonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res: any) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}