import type React from "react"

// Type declaration for the <dotlottie-wc> custom element used for the
// playful Lottie "easter egg" animations.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string
          speed?: string | number
          autoplay?: boolean
          loop?: boolean
        },
        HTMLElement
      >
    }
  }
}

export {}
