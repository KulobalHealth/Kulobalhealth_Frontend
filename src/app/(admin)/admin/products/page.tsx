'use client';

import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  Plus,
  Search,
  Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { AddProductModal } from '@/components/admin/add-product-modal';
import { DeleteProductModal } from '@/components/admin/delete-product-modal';
import { ProductDetailsModal } from '@/components/admin/product-details-modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const products = [
  {
    id: '1',
    name: 'Product name',
    performance: 'Excellent',
    performanceColor: 'success',
    totalSold: '13k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: true,
  },
  {
    id: '2',
    name: 'Product name',
    performance: 'Good',
    performanceColor: 'success',
    totalSold: '12k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: true,
  },
  {
    id: '3',
    name: 'Product name',
    performance: 'Good',
    performanceColor: 'success',
    totalSold: '12k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: false,
  },
  {
    id: '4',
    name: 'Product name',
    performance: 'Good',
    performanceColor: 'success',
    totalSold: '12k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: true,
  },
  {
    id: '5',
    name: 'Product name',
    performance: 'Best',
    performanceColor: 'primary',
    totalSold: '12k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: true,
  },
  {
    id: '6',
    name: 'Product name',
    performance: 'Best',
    performanceColor: 'primary',
    totalSold: '12k',
    stock: '33k',
    price: '₵ 600.00',
    visibility: true,
  },
];

function EmptyState({ onAddProduct }: { onAddProduct: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="mb-6 h-48 w-64">
        <svg className="h-full w-full" viewBox="0 0 300 200">
          {/* Laptop */}
          <rect
            fill="#e5e7eb"
            height="80"
            rx="4"
            stroke="#d1d5db"
            strokeWidth="2"
            width="120"
            x="50"
            y="80"
          />
          <rect fill="#f3f4f6" height="65" width="110" x="55" y="85" />
          <rect fill="#d1d5db" height="8" width="20" x="105" y="160" />
          <rect fill="#d1d5db" height="4" rx="2" width="60" x="85" y="168" />

          {/* Medical cross on screen */}
          <rect fill="#10b981" height="6" rx="3" width="30" x="95" y="105" />
          <rect fill="#10b981" height="30" rx="3" width="6" x="107" y="93" />

          {/* Person */}
          <circle cx="200" cy="60" fill="#6b7280" r="15" />
          <rect fill="#6b7280" height="40" rx="15" width="30" x="185" y="75" />
          <rect fill="#6b7280" height="25" rx="7" width="15" x="175" y="85" />
          <rect fill="#6b7280" height="25" rx="7" width="15" x="210" y="85" />
          <rect fill="#6b7280" height="25" rx="4" width="8" x="190" y="115" />
          <rect fill="#6b7280" height="25" rx="4" width="8" x="202" y="115" />
        </svg>
      </div>
      <h3 className="mb-2 font-medium text-lg">No products added yet</h3>
      <p className="mb-6 max-w-md text-center text-gray-600">
        You have not added any product yet. Click on the button below to add
        your first product
      </p>
      <Button
        className="bg-primary-500 text-white hover:bg-primary-600"
        onClick={onAddProduct}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add New Product
      </Button>
    </div>
  );
}

function ProductRow({
  product,
  onViewDetails,
  onDelete,
}: {
  product: any;
  onViewDetails: (product: any) => void;
  onDelete: (product: any) => void;
}) {
  const getPerformanceBadgeClass = (color: string) => {
    switch (color) {
      case 'success':
        return 'bg-success-100 text-success-700';
      case 'primary':
        return 'bg-primary-100 text-primary-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <tr className="border-gray-100 border-b hover:bg-gray-50">
      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Icons.Basket className="h-6 w-6 text-white" />
          </div>
          <span className="font-medium">{product.name}</span>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <Badge className={getPerformanceBadgeClass(product.performanceColor)}>
            {product.performance}
          </Badge>
          <div className="relative h-8 w-8">
            <svg className="-rotate-90 h-8 w-8 transform" viewBox="0 0 32 32">
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="12"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="12"
                stroke={
                  product.performanceColor === 'success' ? '#10b981' : '#3b82f6'
                }
                strokeDasharray={`${
                  product.performance === 'Excellent'
                    ? 75
                    : product.performance === 'Best'
                      ? 85
                      : 65
                } 75`}
                strokeLinecap="round"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Total Sold</span>
          <Badge className="bg-gray-50" variant="outline">
            {product.totalSold}
          </Badge>
        </div>
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Stock</span>
          <Badge className="bg-gray-50" variant="outline">
            {product.stock}
          </Badge>
        </div>
      </td>
      <td className="px-4 py-4 font-medium">{product.price}</td>
      <td className="px-4 py-4">
        <Switch checked={product.visibility} />
      </td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onViewDetails(product)}
            size="sm"
            variant="ghost"
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <Edit className="h-4 w-4" />
          </Button>
          <Button onClick={() => onDelete(product)} size="sm" variant="ghost">
            <Trash2 className="h-4 w-4 text-danger-600" />
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasProducts, setHasProducts] = useState(false); // Toggle this to show empty/populated state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product: any) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  const handleDelete = (product: any) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log('Deleting product:', selectedProduct);
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-1 font-bold text-2xl">Products</h1>
            <p className="text-gray-600">
              View and manage all registered products
            </p>
          </div>
          <Button
            className="bg-primary-500 text-white hover:bg-primary-600"
            onClick={handleAddProduct}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <div className="mb-1 text-gray-600 text-sm">
                Number of products in stock
              </div>
              <div className="font-bold text-2xl">
                {hasProducts ? '40,000' : '0'}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="mb-1 text-gray-600 text-sm">
                Average Performance
              </div>
              <div className="font-bold text-2xl">
                {hasProducts ? 'Good' : 'N/A'}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="mb-1 text-gray-600 text-sm">Products Sold</div>
              <div className="font-bold text-2xl">
                {hasProducts ? '40,000' : '0'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar and Filters */}
        <div className="mb-6 flex gap-2">
          <div className="relative max-w-md flex-1">
            <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-400" />
            <Input
              className="pl-10"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search product"
              value={searchTerm}
            />
          </div>
          <Button className="bg-primary-500 text-white hover:bg-primary-600">
            Search
          </Button>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-white" variant="outline">
                  5 per page
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>5 per page</DropdownMenuItem>
                <DropdownMenuItem>10 per page</DropdownMenuItem>
                <DropdownMenuItem>25 per page</DropdownMenuItem>
                <DropdownMenuItem>50 per page</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Content */}
        {hasProducts ? (
          <div className="rounded-lg bg-white shadow-sm">
            <table className="w-full">
              <thead className="border-gray-200 border-b">
                <tr>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Product name
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Performance
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Total Sold
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Stock
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Product Price
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Visibility
                  </th>
                  <th className="px-4 py-4 text-left font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductRow
                    key={product.id}
                    onDelete={handleDelete}
                    onViewDetails={handleViewDetails}
                    product={product}
                  />
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between border-gray-200 border-t p-4">
              <Button className="text-gray-600" size="sm" variant="ghost">
                <ChevronLeft className="mr-1 h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                  <Button
                    className={
                      page === 1 ? 'bg-black text-white' : 'text-gray-600'
                    }
                    key={index}
                    size="sm"
                    variant={page === 1 ? 'default' : 'ghost'}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button className="text-gray-600" size="sm" variant="ghost">
                Next
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <EmptyState onAddProduct={handleAddProduct} />
        )}

        {/* Toggle button for demo purposes */}
        <div className="fixed right-4 bottom-4">
          <Button
            className="bg-white shadow-lg"
            onClick={() => setHasProducts(!hasProducts)}
            variant="outline"
          >
            Toggle {hasProducts ? 'Empty' : 'Populated'} State
          </Button>
        </div>
      </div>

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        product={selectedProduct}
      />
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
