export function pretendTeamDirectoryRequest() {
  const departmentish: any = ['All', 'Design', 'Engineering', 'Marketing', 'Operations', 'Product', 'Sales']

  const aBunchOfPeople: any = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      bio: 'Passionate about building accessible, performant web applications and mentoring other engineers.',
      email: 'sarah.chen@company.com',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Product Designer',
      department: 'Design',
      bio: 'Creating intuitive user experiences with a focus on design systems and cross-functional collaboration.',
      email: 'marcus.johnson@company.com',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Product Manager',
      department: 'Product',
      bio: 'Driving product strategy and execution. Experienced in B2B SaaS and growth initiatives.',
      email: 'emily.rodriguez@company.com',
      location: 'Austin, TX',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 4,
      name: 'Daniel Kim',
      title: 'Engineering Manager',
      department: 'Engineering',
      bio: 'Leading distributed engineering teams delivering reliable platforms at scale.',
      email: 'daniel.kim@company.com',
      location: 'Seattle, WA',
      avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 5,
      name: 'Priya Patel',
      title: 'Marketing Strategist',
      department: 'Marketing',
      bio: 'Crafts integrated marketing campaigns with measurable impact for enterprise customers.',
      email: 'priya.patel@company.com',
      location: 'Chicago, IL',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 6,
      name: 'James Roberts',
      title: 'Operations Lead',
      department: 'Operations',
      bio: 'Obsessed with operational excellence, logistics, and keeping the trains running on time.',
      email: 'james.roberts@company.com',
      location: 'Denver, CO',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 7,
      name: 'Olivia Park',
      title: 'Sales Director',
      department: 'Sales',
      bio: 'Partnering with enterprise customers to solve complex problems with modern technology.',
      email: 'olivia.park@company.com',
      location: 'Los Angeles, CA',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 8,
      name: 'Liam Turner',
      title: 'Design Technologist',
      department: 'Design',
      bio: 'Blends design and engineering skills to rapidly prototype high fidelity experiences.',
      email: 'liam.turner@company.com',
      location: 'Portland, OR',
      avatar: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80',
    },
  ]



  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        incomingPeople: aBunchOfPeople,
        hardDepartments: departmentish,
      })
    }, 220 + Math.random() * 420)
  })
}
