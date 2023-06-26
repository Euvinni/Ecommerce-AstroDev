import React from 'react'

const Exercicio06 = () => {

  const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];

  const colorPrimary = cores.filter((item) => cores.includes(item))

  console.log(colorPrimary)
  //fazer para os outros

  return (
    <div>
      {colorPrimary.map((item, index) => (

        <div key={index}>
          <p>{item}</p>
        </div>

      ))}
    </div>
  )
}

export default Exercicio06