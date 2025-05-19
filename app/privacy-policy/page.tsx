import TitleComponent from "@/components/TitleComponent"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Privacy policy'
}

const PrivacyPolicy = () => {
    return (
        <main className=' my-14 space-y-5 p-3 mx-auto max-w-6xl'>
            <TitleComponent title={'Privacy policy'} />
        </main>
    )
}

export default PrivacyPolicy