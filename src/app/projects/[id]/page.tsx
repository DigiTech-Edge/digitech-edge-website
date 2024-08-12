export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen container mx-auto">
      <h1>Project Page</h1>
      <p>{params.id}</p>
    </div>
  );
}
