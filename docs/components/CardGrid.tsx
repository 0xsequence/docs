const Card = ({ title, description, icon, link }: any) => {
  const CardContent = (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )

  // If you're using client-side routing:
  // return <Link to={link}>{CardContent}</Link>;

  // For regular links:
  return (
    <a href={link} className="card-link">
      {CardContent}
    </a>
  )
}

const CardGrid = ({ children }: any) => {
  return <div className="card-grid">{children}</div>
}

export { Card, CardGrid }
