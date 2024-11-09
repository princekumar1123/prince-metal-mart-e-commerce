import React from 'react'
import plasticImg from '../asserts/plastic.jpg'

function Home() {
  return (
    <>
       <div class="card" style={{ width: "150px" }}>
          <img src={plasticImg} class="card-img-top" alt="" />
          <div class="d-flex justify-content-center">
            <div style={{
              fontWeight:'bold',
              fontFamily:'sans-serif'
            }}>Plastic</div>
          </div>
        </div>
    </>

  )
}

export default Home