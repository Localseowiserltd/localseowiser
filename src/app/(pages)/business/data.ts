import avatar1 from '@/assets/images/team/avatar-1.jpg'
import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar3 from '@/assets/images/team/avatar-3.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar7 from '@/assets/images/team/avatar-7.jpg'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import { StaticImageData } from 'next/image'

type ServicesType = {
  icon: string
  title: string
  description: string
}

export type ReviewsType = {
  description: string
  image: StaticImageData
  name: string
  role: string
  review: number
}

type TeamType = {
  image: StaticImageData
  name: string
  role: string
}

export const servicesData: ServicesType[] = [
  {
    icon: 'tabler:artboard',
    title: 'Digital Design',
    description: 'It is a long established fact that a reader will be distracted by the content of a page when looking at its layout.',
  },
  {
    icon: 'tabler:palette',
    title: 'Unlimited Colors',
    description: 'The European languages are members of the same family. Their separate existence is a myth music, sport',
  },
  {
    icon: 'tabler:section',
    title: 'Strategy Solutions',
    description: 'He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed',
  },
  {
    icon: 'tabler:headset',
    title: 'Awesome Support',
    description: 'The wonderful serenity has taken of my these sweet mornings of spring which enjoy with my whole heart.',
  },
  {
    icon: 'tabler:box-multiple-0',
    title: 'Truly Multipurpose',
    description: 'It showed a lady fitted out with a fur hat and boa who sat upright a heavy fur muff that covered the whole.',
  },
  {
    icon: 'tabler:table-options',
    title: 'Easy to customize',
    description: 'The languages only differ in their grammar, their and their most common why a new common language',
  },
]

export const reviewsData: ReviewsType[] = [
  {
    name: 'Dorothy C. Swarts',
    image: avatar1,
    description: "I couldn't be more thrilled with the experience I had with Skywave. team was incredibly responsive",
    review: 3.5,
    role: 'Design Lead',
  },
  {
    name: 'Allyson Robi',
    image: avatar2,
    description: 'I had the pleasure of working with Skywave, and it was an experience like no other. The level of professionalism,',
    review: 4.5,
    role: 'Project Lead',
  },
  {
    name: 'Samuel Kane',
    image: avatar3,
    description: "Choosing Skywave was one of the best decisions I've ever made. From start to finish, the experience ",
    review: 4.2,
    role: 'Developer',
  },
  {
    name: 'Hazel S. Rutt',
    image: avatar4,
    description: 'Working with Skywave has been an absolute game-changer. Their innovative approach and cutting-edge',
    review: 4.7,
    role: 'Manager',
  },
  {
    name: 'Kenneth Moore',
    image: avatar5,
    description: 'I am thrilled with my experience with Skywave. Their exceptional service and attention to detail ',
    review: 4.1,
    role: 'Design Lead',
  },
  {
    name: 'John Johnson',
    image: avatar6,
    description: 'Thanks to pagedone, I feel more informe and confident about my investment decisions than ever before ',
    review: 4.6,
    role: 'Design Lead',
  },
]

export const teamData: TeamType[] = [
  {
    image: avatar8,
    name: 'James L. Cox',
    role: 'CEO',
  },
  {
    image: avatar1,
    name: 'Kim D. Smith',
    role: 'Founder',
  },
  {
    image: avatar2,
    name: 'Angela Gingr',
    role: 'Co-Founder',
  },
  {
    image: avatar3,
    name: 'John K. Myers',
    role: 'Developer',
  },
  {
    image: avatar5,
    name: 'Albert J. Pass',
    role: 'Manager',
  },
  {
    image: avatar7,
    name: 'Lester Meha',
    role: 'Team Lead',
  },
]
