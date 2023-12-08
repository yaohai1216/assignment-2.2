import Genre from './Genre'
function Container () {
  return (
    <div className='container'>
      <h1>Movie App</h1>
      <Genre
        name='Comedy'
        description='Funny and entertaining movies'
        movieTitle1={{ title: 'No Hard Feeling', year: 2023 }}
        movieTitle2={{ title: 'The Hangover', year: 2009 }}
      />
      <Genre
        name='Romance'
        description='Heartwarming and romantic stories'
        movieTitle1={{ title: 'The Notebook', year: 2004 }}
        movieTitle2={{ title: 'LaLaLand', year: 2016 }}
      />
    </div>
  )
}

export default Container
