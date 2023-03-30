export const DIVIDER_ANIMATION = {
  hidden: {
    width: 0
  },
  show: {
    width: '100%',
    transition: {
      duration: 1.5,
      delay: 0.3
    }
  }
}

export const CONTAINER_ANIMATION = ({
  staggerChildren
}: {
  staggerChildren?: number
}) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || 0.4
    }
  }
})

export const ITEM_ANIMATION = {
  hidden: {
    x: -20,
    opacity: 0
  },
  show: {
    opacity: 1,
    x: 0
  }
}
