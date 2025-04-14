import React, { useState } from 'react'

function Jogo() {
  const [matriz, setMatriz] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])

  const BotaoClick = (linha, coluna) => {
    setMatriz(prev =>
      prev.map((linhaArr, i) =>
        linhaArr.map((valor, j) =>
          i === linha && j === coluna && valor !== 'X' ? 'X' : valor
        )
      )
    )
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 80px)', gap: '10px', justifyContent: 'center' }}>
      {matriz.map((linha, i) =>
        linha.map((valor, j) => (
          <button
            key={`${i}-${j}`}
            onClick={() => BotaoClick(i, j)}
            style={{
              width: '80px',
              height: '80px',
              fontSize: '24px',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            {valor}
          </button>
        ))
      )}
    </div>
  )
}

export default Jogo
