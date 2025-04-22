export const aboutUsSection1Query = `*[_type == "aboutusSection1"][0]{
  title,
  subTitle,
  description,
  image1 {
    asset -> {
      url
    }
  },
  image2 {
    asset -> {
      url
    }
  }
}`;
