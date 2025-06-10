export const sendToWhatsApp = (name: string, message: string) => {
  // Ganti dengan nomor WhatsApp Anda (format: 62XXXXXXXXXX tanpa +)
  const phoneNumber = "6282173181404" // Ganti dengan nomor WA Anda

  // Format pesan yang akan muncul di WhatsApp
  const formattedMessage = `Halo Jati! 👋

Saya tertarik untuk berkolaborasi dengan Anda.

📝 *Detail Kontak:*
• Nama: ${name}

💬 *Pesan:*A
${message}`

  // Encode pesan untuk URL
  const encodedMessage = encodeURIComponent(formattedMessage)

  // Buat URL WhatsApp dengan pesan yang sudah diformat
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  // Debug: tampilkan URL di console (hapus ini di production)
  console.log("WhatsApp URL:", whatsappUrl)
  console.log("Formatted Message:", formattedMessage)

  // Buka WhatsApp di tab baru
  window.open(whatsappUrl, "_blank")
}
