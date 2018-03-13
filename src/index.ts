import * as React from 'react'
import * as PropTypes from 'prop-types'

const elementOf = (element: React.ReactNode) => PropTypes.shape({ type: PropTypes.oneOf([element]) })

export = { elementOf }
