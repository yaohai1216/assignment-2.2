import Movie from './Movie'

function Genre ({ name, description, movieTitle1, movieTitle2 }) {
  return (
    <div className='genre'>
      <h2>{name}</h2>
      <p>{description}</p>
      <Movie title={movieTitle1.title} year={movieTitle1.year} />
      <Movie title={movieTitle2.title} year={movieTitle2.year} />
    </div>
  )
}

export default Genre
