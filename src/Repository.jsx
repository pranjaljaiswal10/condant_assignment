

const Repository = (props) => {
   const  {name,language,visibility,size,updated_at,created_at}=props
  return (
   <div>
    <div>
   <strong>{name}</strong>
    <small>{visibility}</small>
    </div>
  <ul>
    <li>{language}</li>
    <li>{size}kb</li>
    <li>{updated_at}</li>
  </ul>
   </div>
  )
}

export default Repository