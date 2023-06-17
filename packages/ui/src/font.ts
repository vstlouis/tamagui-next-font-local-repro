import localFont from 'next/font/local'

export const AvenirNextFont = localFont({
  src: [
    { path: './fonts/AvenirNext-Bold.ttf', weight: '700' },
    { path: './fonts/AvenirNext-DemiBold.ttf', weight: '600' },
    { path: './fonts/AvenirNext-Medium.ttf', weight: '500' },
    { path: './fonts/AvenirNext-Regular.ttf', weight: '400' },
  ],
})

export const AVENIR_NEXT_FONT_FAMILY = `Avenir Next, Avenir, __AvenirNextFont_5eac85, __AvenirNextFont_Fallback_5eac85`
