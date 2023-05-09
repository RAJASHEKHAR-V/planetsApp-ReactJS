import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    SlidesToScroll: 1,
  }

  return (
    <div className="planet-slider" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanetItem => (
          <PlanetItem key={eachPlanetItem.id} planetItem={eachPlanetItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
