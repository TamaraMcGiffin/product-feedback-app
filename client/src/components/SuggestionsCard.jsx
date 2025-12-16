// Receives data for one suggestion as a prop
// Use CountryCard.jsx as a reference in Countries App project

function SuggestionsCard({ suggestion }) {
  // Removed category for temporary test rendering
  const { title, detail } = suggestion;
  // If No suggestion how to render no feedback card - do it here? No do it in Home.jsx

  return (
    <>
      <div className="suggestions-card">
        <div className="suggestions-title">
          <h3>{title}</h3>
        </div>
        <div className="suggestions-detail">
          <p>{detail}</p>
        </div>
        {/* Suggestions LOOKS just like button, however in demo does not function, just a tag - maybe add to button styling class in css later? */}
        {/* <div className="suggestions-category-tag">{category}</div> */}
      </div>
    </>
  );
}

export default SuggestionsCard;

// import { Link } from "react-router-dom";

// function CountryCard({ country }) {
//   // console.log("country prop working?", country);
//   const { flags, name, population, region, capital } = country;
//   // const country = { flags, name, population, region, capital };
//   return (
//     // Working don't mess with it
//     <Link to={`/country-detail/${country.name.common}`}>
//       <div className="country-card">
//         <img src={flags.png} alt="Flag" />
//         <div className="country-details">
//           <h3>{name.common}</h3>
//           <p>
//             <b>Population:</b> {population.toLocaleString()}
//           </p>
//           <p>
//             <b>Region:</b> {region}
//           </p>
//           <p>
//             <b>Capital:</b> {capital}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CountryCard;
