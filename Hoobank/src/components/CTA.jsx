import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Lets try our services</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>Everything you need to accept card payments anywhere in the world.</p>
    </div>
    <div>
      <Button className={`${styles.flexCenter} sm:mt-0 mt-10 sm:ml-10 ml-0`}/>
    </div>
  </section>
) 

export default CTA