// import { Inter, Montserrat } from 'next/font/google'
// import './globals.css'
// import LoadingScreen from '@/app/components/ui/LoadingScreen'
// import CustomCursor from '@/app/components/ui/CustomCursor'

// // In body:
// <body>
//   <LoadingScreen />
//   <CustomCursor />
//   {children}
// </body>

// const inter = Inter({ 
//   subsets: ['latin'],
//   variable: '--font-inter'
// })

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-montserrat',
//   weight: ['700', '800', '900']
// })

// export const metadata = {
//   title: 'ULTIMATE FITNESS | Premium Gym & Transformation Center',
//   description: 'Transform your body with certified trainers, premium equipment, and a serious fitness culture. Join 100,000+ members who achieved their goals.',
//   keywords: 'gym, fitness, personal training, strength training, weight loss, muscle building',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
//       <body>
//          <LoadingScreen />
//          <CustomCursor />
//         {children}
//       </body>
//     </html>
//   )
// }


import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/app/components/ui/LoadingScreen'
import CustomCursor from '@/app/components/ui/CustomCursor'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700', '800', '900']
})

export const metadata = {
  title: 'ULTIMATE FITNESS | Premium Gym & Transformation Center',
  description: 'Transform your body with certified trainers, premium equipment, and a serious fitness culture. Join 100,000+ members who achieved their goals.',
  keywords: 'gym, fitness, personal training, strength training, weight loss, muscle building',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <LoadingScreen />
        {/* <CustomCursor /> */}
        {children}
      </body>
    </html>
  )
}