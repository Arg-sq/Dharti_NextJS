import { Testimonial } from '@/components/testimonial/Testimonial';
import Endorsed from '@/components/endorsed/Endorsed';
import ProductLine from '@/components/productLine/productLine';
import Achievements from '@/components/achievements/Achievements';
import About from '@/components/about/About';
import { Header } from '@/components/header/Header';
export default function Home() {
  return (
    <main>
      <Header />
      {/* note: (206(64+142 ie. height of card/2)) */}
      {/* note: my-20 (80 + 206(64+142)) = 286 ~= 288 === 72*4 */}
      <div className='md:mb-28 xl:mt-72'>
        <About />
      </div>
      <Achievements />
      <ProductLine />
      <Endorsed />
      <Testimonial />
    </main>
  );
}
