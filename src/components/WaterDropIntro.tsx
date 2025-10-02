// import { useEffect, useRef } from 'react'

// interface WaterDrop {
//   x: number
//   y: number
//   radius: number
//   speed: number
//   ripples: Array<{ radius: number; opacity: number }>
// }

// export const WaterDropIntro = ({ density = 15 }: { density?: number }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const setSize = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
//     setSize()

//     const drops: WaterDrop[] = []
//     let animationFrame = 0

//     const createDrop = () => {
//       drops.push({
//         x: Math.random() * canvas.width,
//         y: -20,
//         radius: Math.random() * 3 + 2,
//         speed: Math.random() * 3 + 2,
//         ripples: [],
//       })
//     }

//     for (let i = 0; i < density; i++) {
//       setTimeout(createDrop, i * 200)
//     }
//     const dropInterval = setInterval(createDrop, 400)

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       drops.forEach((drop, index) => {
//         if (drop.y < canvas.height) {
//           const gradient = ctx.createRadialGradient(
//             drop.x,
//             drop.y,
//             0,
//             drop.x,
//             drop.y,
//             drop.radius
//           )
//           gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)')
//           gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.6)')
//           gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)')

//           ctx.beginPath()
//           ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2)
//           ctx.fillStyle = gradient
//           ctx.fill()

//           ctx.shadowBlur = 10
//           ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'

//           drop.y += drop.speed
//         } else {
//           if (drop.ripples.length === 0) {
//             drop.ripples.push({ radius: 0, opacity: 1 })
//           }
//         }

//         drop.ripples.forEach((ripple, rIndex) => {
//           ctx.beginPath()
//           ctx.arc(drop.x, canvas.height - 50, ripple.radius, 0, Math.PI * 2)
//           ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity})`
//           ctx.lineWidth = 2
//           ctx.stroke()

//           ripple.radius += 2
//           ripple.opacity -= 0.01

//           if (ripple.opacity <= 0) drops.splice(index, 1)
//         })
//       })

//       ctx.shadowBlur = 0
//       animationFrame = requestAnimationFrame(animate)
//     }

//     animate()

//     const handleResize = () => setSize()
//     window.addEventListener('resize', handleResize)

//     return () => {
//       cancelAnimationFrame(animationFrame)
//       clearInterval(dropInterval)
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [density])

//   return (
//     <canvas
//       ref={canvasRef}
//       className='fixed top-0 left-0 w-full h-full pointer-events-none z-0'
//       style={{
//         background:
//           'linear-gradient(135deg, #0A1929 0%, #1e3a5f 50%, #152238 100%)',
//       }}
//     />
//   )
// }

import { useEffect, useRef } from 'react'

interface WaterDrop {
  x: number
  y: number
  radius: number
  speed: number
  ripples: Array<{ radius: number; opacity: number }>
}

export const WaterDropIntro = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const drops: WaterDrop[] = []
    let animationFrame: number

    // Create water drops
    const createDrop = () => {
      drops.push({
        x: Math.random() * canvas.width,
        y: -20,
        radius: Math.random() * 3 + 2,
        speed: Math.random() * 3 + 2,
        ripples: [],
      })
    }

    // Initial drops
    for (let i = 0; i < 15; i++) {
      setTimeout(createDrop, i * 200)
    }

    // Continue creating drops
    const dropInterval = setInterval(createDrop, 400)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, index) => {
        // Draw falling drop
        if (drop.y < canvas.height) {
          const gradient = ctx.createRadialGradient(
            drop.x,
            drop.y,
            0,
            drop.x,
            drop.y,
            drop.radius
          )
          gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)')
          gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.6)')
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)')

          ctx.beginPath()
          ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()

          // Drop shadow/glow
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(59, 130, 246, 0.5)'

          drop.y += drop.speed
        } else {
          // Create ripple when drop hits bottom
          if (drop.ripples.length === 0) {
            drop.ripples.push({ radius: 0, opacity: 1 })
          }
        }

        // Draw ripples
        drop.ripples.forEach((ripple, rIndex) => {
          ctx.beginPath()
          ctx.arc(drop.x, canvas.height - 50, ripple.radius, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(59, 130, 246, ${ripple.opacity})`
          ctx.lineWidth = 2
          ctx.stroke()

          ripple.radius += 2
          ripple.opacity -= 0.01

          if (ripple.opacity <= 0) {
            drop.ripples.splice(rIndex, 1)
          }
        })

        // Remove drops that are done
        if (drop.y > canvas.height + 50 && drop.ripples.length === 0) {
          drops.splice(index, 1)
        }
      })

      ctx.shadowBlur = 0
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearInterval(dropInterval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full pointer-events-none z-0'
      style={{
        background:
          'linear-gradient(135deg, #0A1929 0%, #1e3a5f 50%, #152238 100%)',
      }}
    />
  )
}
