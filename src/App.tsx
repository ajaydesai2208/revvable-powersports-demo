import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell'
import { HomePage } from './routes/HomePage'
import { InventoryPage } from './routes/InventoryPage'
import { NotFoundPage } from './routes/NotFoundPage'
import { VehicleDetailPage } from './routes/VehicleDetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'inventory', element: <InventoryPage /> },
      { path: 'inventory/:id', element: <VehicleDetailPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
