import React, { useState } from 'react'
import { Tabs, Tab } from "vtex.styleguide"

function Multihome(props: any) {
  const homeSelected = localStorage.getItem("homeSelected")
  const [tabActive, setTabActive] = useState(homeSelected || "1")

  console.log(homeSelected)
  return (
    <Tabs>
      <Tab
        label="LiliPink"
        active={"1" === tabActive}
        onClick={() => {
          setTabActive("1")
          localStorage.setItem("homeSelected", "1")
        }}
      >
        {props.children[0]}
      </Tab>
      <Tab
        label="Yoi"
        active={"2" === tabActive}
        onClick={() => {
          setTabActive("2")
          localStorage.setItem("homeSelected", "2")
        }}
      >
        {props.children[1]}
      </Tab>
    </Tabs >


  )

}


export default Multihome
