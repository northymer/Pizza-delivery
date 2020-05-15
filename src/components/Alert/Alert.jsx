import React, {useEffect, useRef} from 'react'
import classNames from 'classnames'

import './Alert.scss'

export const Alert = (props) => {
  const {
    text = null,
    color = 'success'
  } = props

  const alertRef = useRef(null)

  const hide = () => {
    alertRef.current.classList.add('alert-hide')
  }

  useEffect(() => {
    if (text !== null) {
      setTimeout(() => hide(), 3000)
    }
  }, [text])

  let alertClassNames = classNames(
    'alert',
    {
      'alert-hide': text === null,
      'alert-success': color === 'success',
      'alert-error': color === 'error',
    }
  )

  return (
    <div className={alertClassNames} onClick={() => hide()} ref={alertRef}>
      <div className="alert__wrap">
        {text}
      </div>
    </div>
  )
}
