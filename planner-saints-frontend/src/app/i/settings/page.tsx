import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import { Settigns } from './Settings'
import { Heading } from '@/components/ui/Heading'

export const metadata: Metadata = {
  title: 'Settings',
  ...NO_INDEX_PAGE
}

export default function SettingsPage() {
  return (
    <div>
      <Heading title='Settings' />
      <Settigns />
    </div>
  )
}
