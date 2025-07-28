// StudentCard.jsx

// Component Summary:
// Displays student profile information. Utilizes props for static data (name, bio, image)
// and manages local state to toggle the visibility of the student's biography.

// Imports the React library. 'useState' is accessed via 'React.useState'.
import React from 'react';

// StudentCard functional component definition.
// Props (name, major, year, bio, imageUrl) are received from the parent component.
function StudentCard(props) {
  // Destructures essential props for direct use. Props are immutable inputs.
  const { name, major, year, bio, imageUrl } = props;

  // State declaration using React.useState.
  // 'showBio' is the state variable (boolean, initial: false).
  // 'setShowBio' is the setter function to update 'showBio' and trigger re-renders.
  const [showBio, setShowBio] = React.useState(false);

  // Event handler to toggle 'showBio' state.
  // Updates 'showBio' to its opposite boolean value.
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  // JSX structure for the StudentCard component.
  // Inline styles are applied directly to elements.
  return (
    <div style={{ /* Component container styling */
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Image displays 'imageUrl' prop; alt text uses 'name' prop. */}
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      {/* Displays 'name' prop. */}
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      {/* Displays 'major' and 'year' props. */}
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{major} – {year}</p>
      {/* Button to control bio visibility.
          'onClick' event triggers 'toggleBio' function.
          Button text conditionally changes based on 'showBio' state. */}
      <button onClick={toggleBio} style={{ /* Button styling */
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {/* Conditional rendering of the bio paragraph.
          The '<p>' element with 'bio' prop is rendered ONLY if 'showBio' is true. */}
      {showBio && <p style={{ marginTop: '16px', fontSize: '14px' }}>{bio}</p>}
    </div>
  );
}

// Exports StudentCard as the default export, making it importable by other modules.
export default StudentCard;