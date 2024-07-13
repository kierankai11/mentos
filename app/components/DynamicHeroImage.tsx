import dynamic from 'next/dynamic'

const DynamicHeroImage = dynamic(() => import('../components/ParallexHeroImage'), {
  ssr: false
})

export default () => <DynamicHeroImage />