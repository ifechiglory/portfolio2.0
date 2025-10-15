import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Trash2 } from "lucide-react";

export default function Projects() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech_stack: "",
    github_link: "",
    live_demo: "",
    image_url: "",
    imageFile: null as File | null,
  });
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [uploading, setUploading] = useState(false);

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error loading projects",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setProjects(data || []);
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Cloudinary image upload
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploadRes = await res.json();

      if (uploadRes.secure_url) {
        setForm({ ...form, image_url: uploadRes.secure_url });
        toast({ title: "✅ Image uploaded successfully" });
      } else {
        throw new Error(uploadRes.error?.message || "Image upload failed");
      }
    } catch (err: any) {
      console.error("Image upload error:", err);
      toast({
        title: "Upload failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  // ✅ Add new project
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);

    try {
      const { error } = await supabase.from("projects").insert([
        {
          title: form.title,
          description: form.description,
          tech_stack: form.tech_stack
            ? form.tech_stack.split(",").map((s) => s.trim())
            : [],
          github_link: form.github_link,
          live_demo: form.live_demo,
          image_url: form.image_url,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      toast({ title: "✅ Project added successfully!" });
      setForm({
        title: "",
        description: "",
        tech_stack: "",
        github_link: "",
        live_demo: "",
        image_url: "",
        imageFile: null,
      });
      fetchProjects();
    } catch (err: any) {
      toast({
        title: "Error adding project",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      toast({
        title: "Delete failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({ title: "🗑️ Project deleted successfully!" });
    fetchProjects();
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>

      {/* Add Project Form */}
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 mb-10">
        <Input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <Input
          name="tech_stack"
          placeholder="Tech Stack (e.g. React, Tailwind, Supabase)"
          value={form.tech_stack}
          onChange={handleChange}
        />
        <Textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="md:col-span-2"
        />
        <Input
          name="github_link"
          placeholder="GitHub URL"
          value={form.github_link}
          onChange={handleChange}
        />
        <Input
          name="live_demo"
          placeholder="Live Demo URL"
          value={form.live_demo}
          onChange={handleChange}
        />
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading}
          />
          {uploading && (
            <p className="text-xs text-muted-foreground mt-1">
              Uploading image...
            </p>
          )}
          {form.image_url && (
            <img
              src={form.image_url}
              alt="preview"
              className="rounded-lg mt-2 w-40 border"
            />
          )}
        </div>

        <Button
          type="submit"
          className="md:col-span-2"
          disabled={adding || uploading}
        >
          {adding ? (
            <Loader2 className="animate-spin w-4 h-4 mr-2" />
          ) : (
            "Add Project"
          )}
        </Button>
      </form>

      {/* Project List */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="animate-spin h-6 w-6" />
        </div>
      ) : projects.length === 0 ? (
        <p className="text-center text-muted-foreground">No projects yet</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="relative">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {project.image_url && (
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="rounded-md mb-3"
                  />
                )}
                <p className="text-sm mb-2">{project.description}</p>
                <p className="text-xs text-muted-foreground mb-2">
                  Tech Stack:{" "}
                  {Array.isArray(project.tech_stack)
                    ? project.tech_stack.join(", ")
                    : project.tech_stack}
                </p>
                <div className="flex gap-2 text-sm">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live_demo && (
                    <a
                      href={project.live_demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </CardContent>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleDelete(project.id)}
                className="absolute top-2 right-2"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
