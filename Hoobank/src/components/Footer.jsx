import styles from "../style"
import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles
    .paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="Hoobank" className="w-[266px] h-[72px] object-contain"/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy reliable and secure</p>
          <div>
          <input type="email" placeholder="Enter Your Email" className="mt-5 py-4 px-6 font-poppins font-medium outline-none"/>
          <button type="button" className="bg-blue-gradient py-4 px-6 font-poppins font-medium outline-none ">Send</button>
          </div>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className="font-poppins font-medium text-18px leading-7px text-white">{footerLink.title}</h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => (
                    <li key={link.name} className={`font-poppins font-normal text-16px leading-2px text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                      {link.name}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )


export default Footer