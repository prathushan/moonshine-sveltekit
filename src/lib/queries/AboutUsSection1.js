export const aboutUsSection1Query = `*[_type == "aboutusSection1"][0]{
    title,
    subTitle,
    description,
    videoType,
    youtubeUrl,
    uploadedVideo {
      asset->{
        url
      }
    }
  }`;
  