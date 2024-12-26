import {useRouteError} from "react-router-dom"

const Error = () => {
    const {status,statusText}=useRouteError()
    console.log(status,statusText)
  return (
  <div className="text-lg font-bold pt-24">
    {(status|| statusText)&& <h1>{`${status}  ${statusText}`}</h1>}
    <h2>Page Not Found</h2>
  </div>
  )
}

export default Error