import React from 'react'
import rooms from '../../rooms'

const Rooms = () => {
  return (<>
  <section>
    <article>

    {
                            rooms.map((room) => {
                                return (
                                    <article key={room.id} >
                                      <div>
                                      <img src={room.img} alt={room.id} />
                                        <p>{room.title}</p>
                                      </div>
                                        
                                    </article>

                                )
                            })
                        }
  

    </article>
  </section>
   
  </>
  )
}

export default Rooms