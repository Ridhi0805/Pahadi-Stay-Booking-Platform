function Card({ title, description, image, price, location }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 14px 30px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
      }}
    >
      {image ? (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />
      ) : (
        <div
          style={{
            height: "220px",
            background:
              "linear-gradient(135deg, #2e7d32, #81c784)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "50px",
          }}
        >
          🏔️
        </div>
      )}

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            margin: "0 0 10px",
            color: "#1b5e20",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "8px",
          }}
        >
          📍 {location}
        </p>

        <p
          style={{
            color: "#444",
            marginBottom: "15px",
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong
            style={{
              fontSize: "20px",
              color: "#2e7d32",
            }}
          >
            ₹{price}
            <span
              style={{
                fontSize: "13px",
                color: "#777",
                fontWeight: "normal",
              }}
            >
              {" "}
              / night
            </span>
          </strong>

          <button
            style={{
              background: "#2e7d32",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            View Stay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;