import { styled } from "@stitches/react";

export const HomeContainer = styled('main', {
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,

  display: 'flex',
  gap: '3rem',

  marginLeft: 'auto',
})

export const Product = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  padding: '0.25rem',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: "hidden",


  position: 'relative',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img: {
    objectFit: 'cover'
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'absolute',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',

    padding: '2rem',
    borderRadius: 6,

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg'
    },

    span: {
      fontSize: '$1xl',
      fontWeight: 'bold',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  }
})