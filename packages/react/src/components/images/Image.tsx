import {
  Box,
} from '@radix-ui/themes'

export const Image = (props: JSX.IntrinsicElements['img']) => (
  <Box
    pb="3"
  >
    <img
      {...props}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  </Box>
)
