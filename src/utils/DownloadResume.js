import cv from "../assets/cv.pdf"
export default function handleDownloadClick() {
  const link = document.createElement("a")
  link.href = cv
  link.target = "_blank"
  link.download = "Khaled_Hammami_cv"
  link.click()
}
