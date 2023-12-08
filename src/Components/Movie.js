function Movie ({ title, year }) {
  return (
    <div className='movie'>
      <h1>{title}</h1>
      <h2>Year: {year}</h2>
    </div>
  )
}

export default Movie
