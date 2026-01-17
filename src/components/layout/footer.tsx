import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { personalInfo } from "@/common/data"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2024 {personalInfo.name}. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <Link href={personalInfo.social.github} className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={personalInfo.social.linkedin} className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={personalInfo.social.twitter} className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href={personalInfo.social.instagram} className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
