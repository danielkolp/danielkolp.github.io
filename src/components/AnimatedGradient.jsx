export default function AnimatedGradient({
  children,
  className = '',
  colors = ['#ff6a00', '#00b7ff', '#ff8b00'],
  animationSpeed = 8,
  showBorder = false,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  }

  const textClass = 'animate-gradient-flow bg-[length:300%_100%] bg-clip-text text-transparent'

  return (
    <span className={`inline-block ${className}`.trim()}>
      {showBorder ? (
        <span className="mr-1 inline-flex rounded-full border border-white/10 bg-white/[0.02] px-[0.65rem] py-[0.2rem]">
          <span className={textClass} style={gradientStyle}>
            {children}
          </span>
        </span>
      ) : (
        <span className={textClass} style={gradientStyle}>
          {children}
        </span>
      )}
    </span>
  )
}
