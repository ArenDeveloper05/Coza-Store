import BaseTitleImage from "../../components/common/baseTitleImage/BaseTitleImage"
import Layout from "../../components/layout/Layout"
import ContactBg from "../../assets/pageBackgroundImages/contact-page.webp"
import Contact from "../../components/contact/Contact"
import ContactMap from "../../components/contact/contactMap/ContactMap"

const ContactPage = () => {
  return (
    <Layout>
      <main className="page-main">
        <BaseTitleImage title="Contact" image={ ContactBg } />
        <div className="page-main-wrapper">
          <Contact />
        </div>
      <ContactMap />

      </main>
    </Layout>
    )
}

export default ContactPage