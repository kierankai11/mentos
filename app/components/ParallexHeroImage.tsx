"use client"
import Image from "next/image";
import Atropos from 'atropos';
import 'atropos/css'

const myAtropos = Atropos({
    el: '.atropos',
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      console.log('Enter');
    },
    onLeave() {
      console.log('Leave');
    },
    onRotate(x, y) {
      console.log('Rotate', x, y);
    }
});

export default function ParallexHeroImage() {
  return (
    <div className="atropos my-atropos">
        <div className="atropos-scale">
            <div className="atropos-rotate">
                <div className="atropos-inner">
                    <Image src="/heroImage.jpg" alt="A cool image of Mentos" width={300} height={200} data-atropos-offset="5" / >
                </div>
            </div>
        </div>
    </div>
  )
}