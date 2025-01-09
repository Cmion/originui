import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

const items = [
  {
    id: "1",
    name: "Alex Thompson",
    username: "@alexthompson",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358071/avatar-40-02_upqrxi.jpg",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "@sarahchen",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358073/avatar-40-01_ij9v7j.jpg",
    email: "sarah.c@company.com",
    location: "Singapore",
    status: "Active",
    balance: "$600.00",
  },
  {
    id: "4",
    name: "Maria Garcia",
    username: "@mariagarcia",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358072/avatar-40-03_dkeufx.jpg",
    email: "m.garcia@company.com",
    location: "Madrid, Spain",
    status: "Active",
    balance: "$0.00",
  },
  {
    id: "5",
    name: "David Kim",
    username: "@davidkim",
    image: "https://res.cloudinary.com/dlzlfasou/image/upload/v1736358070/avatar-40-05_cmz0mg.jpg",
    email: "d.kim@company.com",
    location: "Seoul, KR",
    status: "Active",
    balance: "-$1,000.00",
  }
]

export default function Component() {
  return (
    <Table>
      <TableCaption>Table with images</TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <img className="rounded-full" src={item.image} width={40} height={40} alt={item.name} />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <span className="mt-0.5 text-xs text-muted-foreground">{item.username}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="text-right">{item.balance}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
