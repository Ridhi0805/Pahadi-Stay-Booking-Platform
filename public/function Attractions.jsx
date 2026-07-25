function Attractions() {
  const places = [
    "Tehri Lake",
    "Surkanda Devi Temple",
    "Kanatal",
    "Dhanaulti",
    "Chamba",
    "Eco Park",
  ];

  return (
    <section className="section">
      <h2>Tourist Attractions</h2>

      <div className="cards">
        {places.map((place, index) => (
          <div className="card" key={index}>
            <h3>{place}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Attractions;