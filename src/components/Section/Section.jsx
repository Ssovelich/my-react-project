const Section = ({ titel, children }) => {
  return (
    <section style={{ margin: "0 auto", padding: "0 15px 30px 15px" }}>
      <h2 style={{ paddingBottom: "15px" }}>{titel}</h2>
      {children}
    </section>
  );
};

export default Section;
