function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles using the GitHub api. Built by
        following along with Brad Traversy of
        <strong>
          <a href="https://traversymedia.com"> Traversy Media</a>
        </strong>
        .
        <p className="text-lg text-gray-400">
          Layout created by:
          <a href="https://twitter.com/hassibmoddasser" className="text-white">
            {' '}
            Hassid Moddasser
          </a>
        </p>
      </p>
    </div>
  );
}

export default About;
