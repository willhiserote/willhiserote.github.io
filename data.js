const products = [
    { name: 'Shelf', stock: 200 },
    { name: 'Rod', stock: 150 },
    { name: 'Wire', stock: 300 },
    { name: 'Superslide', stock: 100 }
];

const orderHistory = [
    { builder: 'Panther Builders', date: '2025-01-01', items: { 'Shelf': 60, 'Rod': 30 } },
    { builder: 'Dumont Construction', date: '2025-01-01', items: { 'Wire': 45, 'Shelf': 20, 'Rod': 20 } },
    { builder: 'Wood Homes', date: '2025-01-01', items: { 'Wire': 120 } },
    { builder: 'Todd Wood Homes', date: '2025-03-01', items: { 'Wire': 100, 'Shelf': 35, 'Rod': 35 } },
    { builder: 'Dumont Construction', date: '2025-03-01', items: { 'Wire': 50 } },
    { builder: 'Panther Builders', date: '2025-03-01', items: { 'Shelf': 150 } },
    { builder: 'Dumont Construction', date: '2025-07-01', items: { 'Shelf': 40, 'Rod': 40, 'Wire': 30 } },
    { builder: 'Todd Wood Homes', date: '2025-07-01', items: { 'Superslide': 20 } },
    { builder: 'Panther Builders', date: '2025-07-01', items: { 'Wire': 30, 'Superslide': 30, 'Shelf': 50, 'Rod': 50 } },
    { builder: 'Panther Builders', date: '2025-08-01', items: { 'Superslide': 50, 'Wire': 60 } },
    { builder: 'Todd Wood Homes', date: '2025-08-01', items: { 'Shelf': 50, 'Rod': 50 } },
    { builder: 'Dumont Construction', date: '2025-08-01', items: { 'Wire': 100, 'Shelf': 70, 'Rod': 70 } }
];
