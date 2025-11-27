const BlurCircle = ( {top = "auto", left = "auto", right = "auto", bottom = "auto", } ) => {
  return (
    <div 
    className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-linear-to-r from-purple-500 to-fuchsia-500 blur-3xl"
    style={{top: top, left: left, right: right, bottom: bottom,  }}
    >

      
    </div>
  )
}

export default BlurCircle