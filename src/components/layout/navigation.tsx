"use client"

import { useState, useEffect } from "react"
import { navMenu } from "@/common/constants"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navMenu.map((item) => item.link)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll() // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 border border-border shadow-lg">
        <div className="flex items-center gap-6">
          {navMenu.map((item) => (
            <button
              key={item.link}
              onClick={() => scrollToSection(item.link)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                activeSection === item.link
                  ? "bg-slate-700 text-gray-200"
                  : "text-slate-800 hover:font-bold hover:scale-125"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-4 z-50 bg-slate-700 backdrop-blur-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {isOpen && (
          <div className="fixed inset-0 z-40 bg-slate-400 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navMenu.map((item) => (
                <button
                  key={item.link}
                  onClick={() => scrollToSection(item.link)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                    activeSection === item.link
                      ? "bg-slate-700 text-gray-200"
                      : "text-slate-800 hover:font-bold hover:scale-125"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
