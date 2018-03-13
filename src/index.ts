import * as React from 'react'
import * as PropTypes from 'prop-types'

export const elementOf = (element: React.ReactNode) => PropTypes.shape({ type: PropTypes.oneOf([element]) })
