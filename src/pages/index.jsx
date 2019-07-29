import React, { useState, useCallback } from "react"
import { Helmet } from "react-helmet"
import "../styles/index.css"
import validator from "validator"

function Remutil() {
  const [rootPxField, setRootPxField] = useState(16)
  const [pxField, setPxField] = useState(16)
  const [remField, setRemField] = useState(1)

  function isEmpty(input) {
    return typeof input !== "string" || input.length === 0
  }

  function format(input) {
    return isEmpty(input) ? " " : validator.isNumeric(input) ? input : " "
  }

  const handleRootPxChange = useCallback(e => {
    const value = format(e.target.value)
    setRootPxField(value)
    if (validator.isNumeric(value)) {
      setRemField(pxField / value)
    }
  })

  const handlePxChange = useCallback(e => {
    const value = format(e.target.value)
    setPxField(value)
    if (validator.isNumeric(value)) {
      setRemField(value / rootPxField)
    }
  })

  const handleRemChange = useCallback(e => {
    const value = format(e.target.value)
    setRemField(value)
    if (validator.isNumeric(value)) {
      setPxField(rootPxField * value)
    }
  })

  return (
    <div className="remutil">
      <Helmet>
        <title>remutil | Tyncture</title>
      </Helmet>
      <main className="remutil__main">
        <section className="remutil__root-px_section">
          <label htmlFor="root-px">Root Font Size (px)</label>
          <input
            type="number"
            name="root-px"
            id="root-px"
            value={rootPxField}
            onChange={handleRootPxChange}
          />
        </section>
        <section className="remutil__px_section">
          <label htmlFor="px">px</label>
          <input
            type="number"
            name="px"
            id="px"
            value={pxField}
            onChange={handlePxChange}
          />
        </section>
        <section className="remutil__rem_section">
          <label htmlFor="rem">rem</label>
          <input
            type="number"
            name="rem"
            id="rem"
            value={remField}
            onChange={handleRemChange}
          />
        </section>
      </main>
    </div>
  )
}

export default Remutil
