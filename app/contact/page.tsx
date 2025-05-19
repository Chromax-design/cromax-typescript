import { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import TitleComponent from "@/components/TitleComponent"

export const metadata: Metadata = {
    title: 'Contact'
}

const Contact = () => {
    return (
        <main className='my-14 space-y-5 p-4 lg:p-2 max-w-6xl mx-auto'>
            <TitleComponent title={'Contact'} />
            <ContactForm />
        </main>
    )
}

export default Contact