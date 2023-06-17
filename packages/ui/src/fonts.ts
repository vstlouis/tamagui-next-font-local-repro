import { createFont } from 'tamagui'
import { AVENIR_NEXT_FONT_FAMILY } from './font'

const headingFont = createFont({
  family: AVENIR_NEXT_FONT_FAMILY,
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
    7: 24,
    8: 28,
    9: 32,
    10: 34,
    11: 36,
    12: 48,
    13: 64,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    1: 400,
    2: 500,
    3: 600,
    4: 700,
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: AVENIR_NEXT_FONT_FAMILY },
  },
})

const bodyFont = createFont({
  family: AVENIR_NEXT_FONT_FAMILY,
  face: {
    700: { normal: AVENIR_NEXT_FONT_FAMILY },
  },
  weight: {
    1: 400,
    2: 500,
    3: 600,
    4: 700,
  },
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
    7: 24,
    8: 28,
    9: 32,
    10: 34,
    11: 36,
    12: 48,
    13: 64,
  },
  letterSpacing: {
    4: 0,
    8: -1,
  },
  lineHeight: {
    1: 16,
    2: 18,
    3: 20,
    4: 22,
  },
})

export const fonts = {
  heading: headingFont,
  body: bodyFont,
}
