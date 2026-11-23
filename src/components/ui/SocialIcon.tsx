import { Mail } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const brandIcons: Record<string, IconDefinition> = {
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  WhatsApp: faWhatsapp,
  X: faXTwitter,
}

const iconClassName = 'h-6 w-6 shrink-0'
const iconStyle = { width: 24, height: 24 }

export default function SocialIcon({ name }: { name: string }) {
  const icon = brandIcons[name]
  return icon
    ? <FontAwesomeIcon icon={icon} aria-hidden="true" focusable="false" className={iconClassName} style={iconStyle} />
    : <Mail aria-hidden="true" focusable="false" className={iconClassName} style={iconStyle} />
}
