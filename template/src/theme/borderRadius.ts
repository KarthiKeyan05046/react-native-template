const borderRadius = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12,
    '2xl': 14,
    '3xl': 16,
    '4xl': 20,
    '5xl': 24,
    '6xl': 28,
  } as const;

  export type BorderRadiusKeys = keyof typeof borderRadius;

  export default borderRadius;
