"use client"
import { useActionState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { NewProduct, Product } from '@/server/db/schema';
import { editAction } from '@/app/admin/products/edit/[id]/actions';


export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof NewProduct]?: string[];
  };
}

const initialState: ActionResponse = {
  success: false,
  message: '',
}

export default function EditProduct({ product }: { product: Product }) {
  const [state, action, isPending] = useActionState(editAction, initialState);
  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center gap-2">
        <Link href="/admin/products">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Edit Product</h1>
      </div>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <Alert variant="destructive" className="mb-6">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside">
              {Object.entries(state.errors).map(([field, messages]) => (
                messages.map((message, index) => (
                  <li key={`${field}-${index}`}>
                    <strong>{field}:</strong> {message}
                  </li>
                ))
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
      {state.success && (
        <Alert variant="default" className="mb-6">
          <AlertTitle>Success edit Product</AlertTitle>
        </Alert>
      )}
      <form action={action} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your coffee product.</CardDescription>
              <span className="text-red-500 text-sm">*if u want edit image, delete the product then create one</span>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Arabika Gayo Speciality"
                  defaultValue={product.name}
                  required
                />
                <Input name="id" id="id" hidden defaultValue={product.id} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" required>
                  <SelectTrigger id="category" defaultValue={product.category}>
                    <SelectValue placeholder="Select bean type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="green">Green Beans</SelectItem>
                    <SelectItem value="roasted">Roasted Beans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Brief description for product..."
                  className="min-h-[80px]"
                  defaultValue={product.description ?? ""}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end gap-4">
          <Link href="/admin/products">
            <Button variant="outline" type="button">Cancel</Button>
          </Link>
          <Button
            type="submit"
            className="bg-[#104B2B] hover:bg-[#104B2B]/90"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Update Product'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
