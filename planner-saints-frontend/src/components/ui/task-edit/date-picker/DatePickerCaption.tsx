import dayjs from 'dayjs'
import type { DateFormatter } from 'react-day-picker'

const seasonEmoji: Record<string, string> = {
  winter: '⛄',
  spring: '🌸',
  summer: '🌞',
  autumn: '🍂'
}

const getSeason = (month: Date): keyof typeof seasonEmoji => {
  const monthNumber = month.getMonth() + 1

  if (monthNumber > 2 && monthNumber < 6) return 'autumn'
  if (monthNumber > 5 && monthNumber < 9) return 'winter'
  if (monthNumber > 8 && monthNumber < 12) return 'spring'
  else return 'summer'
}

export const formatCaption: DateFormatter = month => {
  const season = getSeason(month)

  return (
    <>
      <span
        role='img'
        aria-label={season}
        className='mr-2'
      >
        {seasonEmoji[season]}
      </span>
      {dayjs(month).format('MMMM')}
    </>
  )
}