type Props = {
  title: string;
  description: string;
  image?: string;
  link?: string;
};

export default function ProjectCard({ title, description, image, link }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {link && <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">View Project</a>}
      </div>
    </div>
  );
}
