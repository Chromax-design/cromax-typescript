"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import TitleComponent from '@/components/TitleComponent'
import SocialMedia from '@/components/SocialMedia'
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    message: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
})

const Contact = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: '',
            subject: '',
            message: ''
        },
    })

    return (
        <main className='my-14 space-y-5 p-4 lg:p-2 max-w-6xl mx-auto'>
            <TitleComponent title={'Contact'} />
            <section className='max-md:space-y-10 md:grid md:grid-cols-12 gap-10 text-white w-full'>
                <div className=' md:col-span-8 w-full'>
                    <Form {...form}>
                        <form className='space-y-5'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="capitalize">first name</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="w-full p-3 rounded-none border border-white/45" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-4">
                                            <FormLabel className="capitalize">last name</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="w-full p-3 rounded-none border border-white/45" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="space-y-4">
                                        <FormLabel className="capitalize">email</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="w-full p-3 rounded-none border border-white/45 bg-transparent" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem className="space-y-4">
                                        <FormLabel className="capitalize">subject</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="w-full p-3 rounded-none border border-white/45" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="space-y-4">
                                        <FormLabel className="capitalize">message</FormLabel>
                                        <FormControl>
                                            <Textarea className="w-full min-h-38 p-3 rounded-none border border-white/45" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="capitalize">send message</Button>
                        </form>
                    </Form>
                </div>
                <div className=' md:col-span-4 space-y-7'>
                    <div>
                        <h2>Phone</h2>
                        <p className=' text-white/45'><a href="tel:+2349061592634">+234&nbsp;906&nbsp;159&nbsp;2634</a></p>
                    </div>
                    <div>
                        <h2>Email Address</h2>
                        <p className=' text-white/45'><a href="mailto:chromax.design@gmail.com">chromax.designs@gmail.com</a></p>
                    </div>
                    <SocialMedia />
                </div>
            </section>
        </main>
    )
}

export default Contact