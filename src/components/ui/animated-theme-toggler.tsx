import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "../../lib/utils"
import { useTheme } from "../common/Theme"

// Type declaration for View Transition API
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      ready: Promise<void>
    }
  }
}

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(() => {
    // Initialize from DOM
    return document.documentElement.classList.contains("dark")
  })
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Sync isDark with DOM changes
  useEffect(() => {
    const updateTheme = () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark")
      setIsDark(isCurrentlyDark)
    }

    // Initial check
    updateTheme()

    // Watch for DOM changes
    const observer = new MutationObserver(() => {
      updateTheme()
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    // Watch for system theme changes if using system theme
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => updateTheme()
      mediaQuery.addEventListener("change", handleChange)
      return () => {
        observer.disconnect()
        mediaQuery.removeEventListener("change", handleChange)
      }
    }

    return () => observer.disconnect()
  }, [theme])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    const newTheme = !isDark ? "dark" : "light"

    // Check if browser supports view transitions
    if (document.startViewTransition) {
      await document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme)
        })
      }).ready
    } else {
      // Fallback for browsers without view transition support
      setTheme(newTheme)
      return
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [isDark, setTheme, duration])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
