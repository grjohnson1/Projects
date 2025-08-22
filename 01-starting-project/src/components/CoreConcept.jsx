export default function CoreConcept({image, title, description}){ {/* standalone variables from props so you don't have to write props.title */}
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}