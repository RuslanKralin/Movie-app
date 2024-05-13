"use client";


import { TextInput, createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  colors: {
    purple_100: [
      "#f5edff",
      "#e5d7f7",
      "#c8aded",
      "#a97fe3",
      "#9058da",
      "#7f40d5",
      "#7734d3",
      "#6526bc",
      "#5a21a8",
      "#4d1b95"
    ]
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
  components: {
    TextInput: TextInput.extend({
      defaultProps: {
        radius: '30px',
    
        // variant: 'outline',
        // disabled: true
      },
    }),
  },
});


