'use client'
import dynamic from 'next/dynamic'
const MapCluster = dynamic(() => import('./MapCluster'), {
	ssr: false,
})

export default function PropertyMap({ topmap, singleMap }) {
	return (
		<>{
			!singleMap ?
				<MapCluster topmap={topmap} />
				:
				<iframe src="https://maps.google.com/maps?q=morka%20real%20estate&t=m&z=11&output=embed&iwloc=near" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
		}
		</>
	)
}
