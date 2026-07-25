function Homestays() {
  const stays = [
    {
      name: "Lake View Homestay",
      location: "New Tehri",
    },
    {
      name: "Pahadi Village Stay",
      location: "Kanatal",
    },
    {
      name: "Eco Green Homestay",
      location: "Chamba",
    },
  ];

  return (
    <section className="section">
      <h2>Popular Homestays</h2>

      <div className="cards">
        {stays.map((stay, index) => (
          <div className="card" key={index}>
            <h3>{stay.name}</h3>
            <p>{stay.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Homestays;