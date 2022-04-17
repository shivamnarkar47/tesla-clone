import React from 'react'
import Section from './Section'

function Home() {
  return (
    <div>
        <Section
          title="Model S"
          desc="Order Online for Touchless Delivery"
          bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/35861782-9705-4f73-84f0-86d615adb661/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
          leftbtnText="Custom Order"
          rightbtnText="Existing Inventory"
        />
         <Section
          title="Model X"
          desc="Order Online for Touchless Delivery"
          bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/5102fa27-0d41-4f79-b07b-7ffb1ceb55ff/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD"
          leftbtnText="Custom Order"
          rightbtnText="Existing Inventory"
        />
         <Section
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
          leftbtnText="Custom Order"
          rightbtnText="Existing Inventory"
        />
        <Section
         title="Model 3"
         desc="Order Online for Touchless Delivery"
         bgImg="https://tesla-cdn.thron.com/delivery/public/image/tesla/b314365b-e41d-4682-b890-608bdbdfa49e/bvlatuR/std/2560x2204/Model-3-Range-Hero-Desktop-LHD"
         leftbtnText="Custom Order"
         rightbtnText="Existing Inventory"
       />
       
    </div>
  )
}

export default Home