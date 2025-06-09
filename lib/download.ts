export const downloadCV = () => {
  try {
    // Create a temporary anchor element
    const link = document.createElement("a")
    link.href = "/cv-jati-nugroho.pdf"
    link.download = "CV-Jati-Nugroho.pdf"
    link.target = "_blank"

    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Optional: Show success message
    console.log("CV download started")
  } catch (error) {
    console.error("Download failed:", error)
    // Fallback: open in new tab
    window.open("/cv-jati-nugroho.pdf", "_blank")
  }
}

export const previewCV = () => {
  try {
    window.open("/cv-jati-nugroho.pdf", "_blank")
  } catch (error) {
    console.error("Preview failed:", error)
  }
}
