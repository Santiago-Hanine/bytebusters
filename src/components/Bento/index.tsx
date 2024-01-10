import BentoItem from "../BentoItem"
import Layout from "../Layout"


const Bento = () => {
  return (
    <Layout className="grid md:grid-cols-3 md:grid-rows-2 md:h-screen gap-4 py-20">
        <BentoItem 
          className="md:col-span-2" 
          title="Diagnostic Delight" 
          description="Our expert technicians perform thorough diagnostics to identify and resolve any issues plaguing your device. We believe in providing precise solutions tailored to your computer's unique needs."
          imgCard="men-repair.jpg"
        />
        <BentoItem 
          className="col-span-1 md:row-span-2" 
          title="Hardware Harmony" 
          description="From replacing faulty components to upgrading your system for optimal performance, our hardware solutions ensure your computer runs seamlessly. We use high-quality parts to guarantee reliability and longevity."
          imgCard="hardware-harmony.jpg"

        />
        <BentoItem 
          className="col-span-1" 
          title="Software Symphony" 
          description="Optimize your computer's performance with malware removal, security updates, and seamless software integration."
          imgCard="software.jpg"

        />
        <BentoItem 
          className="col-span-1" 
          title="Data Rescue" 
          description="Accidentally deleted files? Encountered a hard drive failure? Our data rescue service is here to retrieve and restore your valuable data."
          imgCard="data-rescue.jpg"

        />
    </Layout>
  )
}

export default Bento