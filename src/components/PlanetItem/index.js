import './index.css'

const PlanetItem = props => {
  const {planetItem} = props
  const {name, imageUrl, description} = planetItem

  return (
    <div className="planet-item">
      <img src={imageUrl} className="planet-image" alt={`planet ${name}`} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
export default PlanetItem
