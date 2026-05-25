"use client"

import {
  CldUploadWidget,
} from "next-cloudinary"

interface CloudinaryUploadProps {
  onUpload: (
    url: string
  ) => void
}

export function CloudinaryUpload({
  onUpload,
}: CloudinaryUploadProps) {

  return (
    <CldUploadWidget
      uploadPreset="portfolio_upload"

      options={{
        sources: ["local"],
      }}

      onSuccess={(result: any) => {

        const url =
          result?.info?.secure_url

        if (!url) return

        onUpload(url)
      }}
    >

      {({ open }) => {

        return (
          <button
            type="button"

            onClick={() => open?.()}

            className="
              rounded-2xl
              bg-cyan-400
              px-6 py-4
              font-semibold
              text-black
            "
          >
            Upload imagem
          </button>
        )
      }}

    </CldUploadWidget>
  )
}