import ContactUsInfo from "../../components/ContactUsInfo";
import Form from "../../components/Form";

const ContactUs = () => {
    return (
        <section className="flex xl:text-left text-center xl:flex-row flex-col items-start justify-between gen-wrapper sm:pt-32 pt-24 xl:pb-40 sm:pb-10 pb-40">
            <ContactUsInfo />
            <Form />
        </section>
    );
}

export default ContactUs;