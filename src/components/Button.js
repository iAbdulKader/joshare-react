import LoadingSpiner from "./LoadingSpiner";

export default function Button({ text, loading = false, handler, divClass,...rest}) {
  const handleClick = () => {
    if(!loading){
      handler()
    }
  }
  
  return (
    <div className={`btnDefault center ${divClass}`} onClick={handleClick} {...rest}>
      { !loading ? 
        (<div>
          {text}
        </div>)
        : (<div className="center">
            <LoadingSpiner className="spinerCommon" />
          </div>)
      }
    </div>
    )
}