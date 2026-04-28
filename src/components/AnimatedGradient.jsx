export default function AnimatedGradient({
  children,
  className = '',
  colors = ['#ff6a00', '#00b7ff', '#ff8b00'],
  animationSpeed = 8,
  showBorder = false,
  mode = 'text',
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`,
  }

  const animatedBaseClass = 'animate-gradient-flow bg-[length:300%_100%]'
  const textClass = `${animatedBaseClass} bg-clip-text text-transparent`

  if (mode === 'background') {
    return <span className={`${animatedBaseClass} inline-block ${className}`.trim()} style={gradientStyle} aria-hidden="true" />
  }

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
