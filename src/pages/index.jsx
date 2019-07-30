import React, { useState, useCallback, createRef } from "react"
import { Helmet } from "react-helmet"
import validator from "validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faOsi } from "@fortawesome/free-brands-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "../styles/index.css"

function Remutil() {
  const [rootPxField, setRootPxField] = useState(16)
  const [pxField, setPxField] = useState(16)
  const [remField, setRemField] = useState(1)

  function isEmpty(input) {
    return typeof input !== "string" || input.length === 0
  }

  function format(input) {
    // Allow fields to be non-numeric when empty
    // "" causes HTML form input to be uncontrolled
    return isEmpty(input) ? " " : validator.isNumeric(input) ? input : " "
  }

  const handleRootPxChange = useCallback(
    element => {
      const value = format(element.target.value)
      setRootPxField(value)
      if (validator.isNumeric(value)) {
        setRemField(pxField / value)
      }
    },
    [setRootPxField, setRemField, pxField]
  )

  const handlePxChange = useCallback(
    element => {
      const value = format(element.target.value)
      setPxField(value)
      if (validator.isNumeric(value)) {
        setRemField(value / rootPxField)
      }
    },
    [setPxField, setRemField, rootPxField]
  )

  const handleRemChange = useCallback(
    element => {
      const value = format(element.target.value)
      setRemField(value)
      if (validator.isNumeric(value)) {
        setPxField(rootPxField * value)
      }
    },
    [setRemField, setPxField, rootPxField]
  )

  return (
    <div className="remutil">
      <Helmet>
        <title>remutil | Tyncture</title>
      </Helmet>
      <main className="remutil__main">
        <section className="remutil__root_px_section">
          <label htmlFor="root-px">Root Font px</label>
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
      <footer className="remutil__footer">
        Made by&nbsp;
        <a href="https://github.com/Tyncture/remutil">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Tyncture
        </a>
        &nbsp;and published under&nbsp;
        <a href="https://github.com/Tyncture/remutil/blob/master/LICENSE.md">
          <FontAwesomeIcon icon={faOsi}></FontAwesomeIcon> MIT License
        </a>
      </footer>
    </div>
  )
}

export default Remutil
