export const CONTAINER_ANIMATION = {
  hidden: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3
    }
  },
  show: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.2,
      // delayChildren: 0.1,
      staggerChildren: 0.09
    }
  }
}

export const ITEM_ANIMATION = {
  hidden: {
    y: 10,
    opacity: 0,
    transition: { duration: 0.2 }
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
}
