'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Loader2, Upload } from 'lucide-react';
import { productAction } from '../../actions';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { NewProduct } from '@/server/db/schema';


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




export default function NewProductPage() {
  const [fileError, setFileError] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [state, action, isPending] = useActionState(productAction, initialState);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFileError('');

    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size exceeds 5MB limit.');
        return;
      }

      // Check file type
      if (!file.type.startsWith('image/')) {
        setFileError('Please select an image file.');
        return;
      }

      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center gap-2">
        <Link href="/admin/products">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Add New Product</h1>
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
      <form action={action} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your coffee product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Product Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Arabika Gayo Speciality"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" required>
                  <SelectTrigger id="category">
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
                />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Product Image</CardTitle>
              <CardDescription>Upload a high-quality image of your product.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="file">Upload Image</Label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    {selectedFile ? (
                      <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                        Image Selected
                      </div>
                    ) : (
                      <Upload className="h-10 w-10 text-muted-foreground" />
                    )}
                    <div className="flex flex-col space-y-1">
                      <span className="text-sm font-medium">
                        {selectedFile ? selectedFile.name : 'Drop files or click to upload'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        PNG, JPG, GIF up to 5MB
                      </span>
                    </div>
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />
                    <Button type="button" variant="outline" size="sm" onClick={() => document.getElementById('file')?.click()}>
                      Select Image
                    </Button>
                  </div>
                </div>
                {fileError && (
                  <p className="text-sm text-destructive mt-2">{fileError}</p>
                )}
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
            disabled={isPending || !!fileError}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Product'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
