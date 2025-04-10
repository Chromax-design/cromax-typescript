import { Skeleton } from '@/components/ui/skeleton'

const loading = () => {
    return (
        <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5 mt-10'>
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
            <Skeleton className="w-full h-full min-h-80 rounded" />
        </section>

    )
}

export default loading