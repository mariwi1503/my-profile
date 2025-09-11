// "use client"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Let&apos;s Work Together</h2>
          <div className="w-1/3 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl  max-w-3xl mx-auto leading-relaxed text-pretty">
            Ready to build something amazing? I&apos;m always open to discussing new opportunities and interesting
            projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              className="hover:bg-slate-200 transition-shadow cursor-pointer hover:scale-105"
              onClick={() => (window.location.href = "mailto:mariwilagi@gmail.com")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-gray-200 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="">mariwilagi@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:bg-slate-200 transition-shadow cursor-pointer hover:scale-105"
              onClick={() => window.open("https://wa.me/6285338714313", "_blank")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-gray-200 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-slate-800">+62 853-3871-4313</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:bg-slate-200 transition-shadow cursor-pointer hover:scale-105"
              onClick={() => window.open("https://www.linkedin.com/in/muhammad-ary-687552209/", "_blank")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-gray-200 p-3 rounded-lg">
                    <Linkedin className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-slate-800">Connect with me</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:bg-slate-200 transition-shadow cursor-pointer hover:scale-105"
              onClick={() => {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent,
                )
                const location = "Indonesia"
                if (isMobile) {
                  window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, "_blank")
                } else {
                  window.open(`https://www.google.com/maps/search/${encodeURIComponent(location)}`, "_blank")
                }
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-orange-500 to-gray-200 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-slate-800">Indonesia (Remote Available)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
