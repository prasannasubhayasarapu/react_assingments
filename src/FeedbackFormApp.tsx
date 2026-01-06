

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";


export default function FeedbackFormApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    feedback: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <div className="space-y-6 max-w-md mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="feedback"
              placeholder="Your feedback..."
              value={formData.feedback}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </CardContent>
      </Card>

      {submittedData && (
        <Card>
          <CardHeader>
            <CardTitle>Thank You! Here's Your Submission:</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Feedback:</strong> {submittedData.feedback}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}